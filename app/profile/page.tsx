import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { GetServerSidePropsContext } from 'next';
import { cookies } from 'next/headers';
import ProfilePage from '~/components/profile/ProfilePage';
import { Database } from '~/types/database';
// import { authOptions } from '~/pages/api/auth/[...nextauth]';

export default async function Profile(context: GetServerSidePropsContext) {
  // const session = await getServerSession(authOptions);
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  // const checkCookiesWhenEnter = async () => {
  //   'use server';
  // const data = await getServerSession(authOptions);
  // console.log(context);
  // if (data?.user?.name) {
  //   cookies().set('username', 'john-smith6', { secure: true });
  //   const cookieStore = cookies();
  //   const usernameCook = cookieStore.get('username');
  //   console.log(usernameCook);
  // const hashCook = cookieStore.get('hash');
  // cookies().set('username', 'john-smith6', '/');
  // cookies().set('hash', '39096f644f811bc2cdefc9864c81b0fb07aad305', '/');
  // console.log(usernameCook);
  // console.log(hashCook);
  //   if (usernameCook === undefined || usernameCook.name.length < 0) {
  //     const { name, email } = data.user;
  //     const userData = await userAuth({
  //       username: name,
  //       firstName: name.split(' ')[0],
  //       lastName: name.split(' ')[1],
  //       email,
  //     });
  //     if (!userData) return console.error('Could not fetch userData');
  //     const { hash, username } = userData.data;
  //     cookies().set('username', username);
  //     cookies().set('hash', hash);

  //   }
  // }
  // else redirect('/');
  // };
  // console.log('client side cookies');
  // console.log(getCookies('username'));
  // const session = await getSession(ctx);
  // console.log(context);
  // const session = await getServerSession(context.req, context.res, authOptions);
  // console.log(session);
  // const { data: session } = useSession();
  // const dispatch = useAppDispatch();
  // const liked = useAppSelector(likedValues);
  // const userData = useAppSelector(userValues);
  // const [curNav, setCurNav] = useState(`Your Favourite Recipes`);

  // if (!session || session === undefined || session === null) {
  //   return;
  // }
  // console.log(session?.user?.name);
  // console.log(session);

  // else {
  //   useEffect(() => {
  //     if (userData && userData.username.length > 0 && userData.hash.length > 0)
  //       return;

  // const getUserData = async () => {
  //   const data = await axios.post('/api/login', {
  //     username: session.user?.name,
  //     firstName: session.user?.name?.split(' ')[0],
  //     lastName: session.user?.name?.split(' ')[1],
  //     email: session.user?.email,
  //   });
  //   if (!data) return <p> No data was found</p>;
  //   const { hash, username } = data.data;
  //   dispatch(addLoginData({ username, hash }));
  // };
  //     getUserData(session);
  //   }, [session]);
  // }

  // async function getUserData(session: Session) {
  //   try {
  //     const data = await axios.post('/api/login', {
  //       username: session.user?.name,
  //       firstName: session.user?.name?.split(' ')[0],
  //       lastName: session.user?.name?.split(' ')[1],
  //       email: session.user?.email,
  //     });
  //     if (!data) return <p> No data was found</p>;
  //     const { hash, username } = data.data;
  //     dispatch(addLoginData({ username, hash }));
  //   } catch (error) {
  //     if (error instanceof Error) console.log(error.message);
  //   }
  // }
  // console.log('userdata.username');
  // console.log(userData.username);
  // console.log('userdata.hash');
  // console.log(userData.hash);
  {
    /* @ts-expect-error Server Component */
  }
  return <ProfilePage session={session} />;
}
