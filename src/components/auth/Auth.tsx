'use client';
import { useAuth } from '~/components/auth/AuthProvider';
import { ResetPass } from '~/components/auth/ResetPass';
import { SignIn } from '~/components/auth/SignIn';
import { SignUp } from '~/components/auth/SignUp';

export const Auth = () => {
  // const [view, setView] = useState<AuthTypes>
  //   ('signIn');
  const { view, setView } = useAuth();
  switch (view) {
    case 'resetPassword':
      return <ResetPass setView={setView} />;
    case 'signUp':
      return <SignUp setView={setView} />;
    default:
      return <SignIn />;
  }
};
