'use client';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { Auth } from '~/components/auth/Auth';
import { useAuth } from '~/components/auth/AuthProvider';
import { SignOut } from '~/components/auth/SignOut';
import { Overlay } from '~/components/ui/Overlay';
// import { Auth } from '~/components/auth/Auth';
// import { SignOut } from '~/components/auth/SignOut';
// import { Overlay } from '~/components/ui/Overlay';
// import { Database } from '~/types/database';

export const UserLogin = () => {
  // const { data: session } = useSession();
  const [showAuth, setShowAuth] = useState(false);
  // const [session, setSession] = useState<Session | null>(null);
  const { session } = useAuth();
  // useEffect(() => {
  //   const getSession = async () => {
  //     const {
  //       data: { session },
  //     } = await supabase.auth.getSession();
  //     setSession(session);
  //   };
  //   getSession();
  //   supabase.auth.onAuthStateChange(async() => {
  //     setUser(await supabase.auth.getUser());
  //   });
  // }, []);
  // console.log('session from userlogin');
  // console.log(session);
  // const loginHandle = () => {
  //   session ? signOut() : signIn();
  // };
  // const handleLogOut = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   if (error) console.log({ error });
  // };

  return (
    <div className='flex items-end md:items-center md:justify-around md:space-x-4 flex-col md:flex-row'>
      {/* <div className='flex items-end md:items-center md:justify-around md:space-x-4 flex-col md:flex-row space-y-2'> */}
      {/* <button
        className='flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full bg-white'
        onClick={loginHandle}
      >
        {session ? (
          <FontAwesomeIcon className='rotate-180' icon={faRightToBracket} />
        ) : (
          <FontAwesomeIcon icon={faRightToBracket} />
        )}
      </button> */}

      {session ? (
        <SignOut />
      ) : (
        <button
          className='text-white xl:text-lg transition-all xl:p-3'
          // className='hover:bg-green-200'
          onClick={() => setShowAuth((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      )}
      {showAuth && <Auth />}
      {showAuth && <Overlay onConfirm={setShowAuth} />}
      {session && (
        <Link
          href='/profile'
          className='hover:text-white xl:text-lg transition-all xl:p-3'
          // className='flex h-10 w-10 flex-col items-center justify-center rounded-full p-3 transition-all hover:bg-green-200'
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      )}
    </div>
  );
};
