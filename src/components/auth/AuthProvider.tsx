'use client';

import {
  createClientComponentClient,
  Session,
  User,
} from '@supabase/auth-helpers-nextjs';
import { AuthError } from '@supabase/supabase-js';
import { realtime } from 'j-supabase';
import { useRouter } from 'next/navigation';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const EVENTS = {
  PASSWORD_RECOVERY: `PASSWORD_RECOVERY`,
  SIGNED_OUT: `SIGNED_OUT`,
  USER_UPDATED: `USER_UPDATED`,
};

export const VIEWS = {
  SIGN_IN: `signIn`,
  SIGN_UP: `signUp`,
  FORGOTTEN_PASSWORD: `resetPassword`,
  // MAGIC_LINK: 'magic_link',
  // UPDATE_PASSWORD: 'update_password',
};

type AuthContextState = {
  initial: boolean;
  session: Session | null;
  user: User | null;
  view: string;
  usersRecipes: Recipe[] | [];
  recipeComments: RecipeComment[] | [];
  blogComments: RecipeComment[] | [];
  setView: Dispatch<SetStateAction<string>>;
  signOut: () => Promise<{
    error: AuthError | null;
  }>;
};

// default state
const contextDefaultValues: AuthContextState = {
  initial: true,
  session: null,
  user: null,
  view: `signIn`,
  usersRecipes: [],
  recipeComments: [],
  blogComments: [],
  setView: () => ``,
  signOut: async () => {
    return { error: null };
  },
};

export const AuthContext =
  createContext<AuthContextState>(contextDefaultValues);

export const AuthProvider = ({
  accessToken,
  children,
}: {
  accessToken: string | null;
  children: React.ReactNode | React.ReactNode[];
}) => {
  const [initial, setInitial] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [recipeComments, setRecipeComments] = useState<RecipeComment[] | []>(
    [],
  );
  const [blogComments, setBlogComments] = useState<RecipeComment[] | []>([]);
  const [usersRecipes, setUsersRecipes] = useState<Recipe[] | []>([]);
  const [view, setView] = useState<string>(VIEWS.SIGN_IN);
  const router = useRouter();
  // const { accessToken, ...rest } = props;
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getActiveSession() {
      const {
        data: { session: activeSession },
      } = await supabase.auth.getSession();
      setSession(activeSession);
      setUser(activeSession?.user ?? null);
      setInitial(false);
    }
    getActiveSession();

    const {
      data: { subscription: authListener },
    } = supabase.auth.onAuthStateChange((event, currentSession) => {
      if (currentSession?.access_token !== accessToken) {
        router.refresh();
      }
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      // console.log('user');
      // console.log(currentSession?.user);
      if (currentSession?.user && currentSession?.user.id !== undefined) {
        const userId = currentSession?.user.id;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const liked_recipes = realtime<RecipeSupabase>(supabase)
          .from(`liked_recipes`)
          .eq(`user_id`, userId)
          .subscribe((snap) => {
            const recList = snap.data.map((item) => item.recipe);
            setUsersRecipes(recList);
          });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const recipe_comments = realtime<RecipeComment>(supabase)
          .from(`recipe_comments`)
          .subscribe((snap) => {
            setRecipeComments(snap.data);
          });
        const blog_comments = realtime<RecipeComment>(supabase)
          .from(`blog_comments`)
          .subscribe((snap) => {
            setBlogComments(snap.data);
          });
      }

      switch (event) {
        // case EVENTS.PASSWORD_RECOVERY:
        //   setView(VIEWS.UPDATE_PASSWORD);
        //   break;
        case EVENTS.SIGNED_OUT:
        case EVENTS.USER_UPDATED:
          setView(VIEWS.SIGN_IN);
          break;
        default:
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value: AuthContextState = useMemo(() => {
    return {
      initial,
      session,
      user,
      view,
      setView,
      usersRecipes,
      recipeComments,
      blogComments,
      signOut: () => supabase.auth.signOut(),
    };
  }, [
    initial,
    session,
    user,
    view,
    usersRecipes,
    recipeComments,
    blogComments,
    supabase.auth,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
};
