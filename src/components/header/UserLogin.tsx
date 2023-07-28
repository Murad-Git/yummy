'use client';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  createClientComponentClient,
  Session,
} from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { Auth } from '~/components/auth/Auth';
import { Overlay } from '~/components/ui/Overlay';
import { Database } from '~/types/database';

export const UserLogin = ({ session }: { session: Session | null }) => {
  // const { data: session } = useSession();
  const supabase = createClientComponentClient<Database>();
  const [showAuth, setShowAuth] = useState(false);
  // const loginHandle = () => {
  //   session ? signOut() : signIn();
  // };
  const handleLogOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.log({ error });
  };

  return (
    <div className='flex items-center justify-around space-x-4'>
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
      {/* {session && (
        <Link
          href='/profile'
          className='flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white'
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      )} */}
      {session ? (
        <button onClick={handleLogOut}>
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      ) : (
        <button onClick={() => setShowAuth((prev) => !prev)}>
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      )}
      {showAuth && <Auth />}
      {showAuth && <Overlay onConfirm={setShowAuth} />}
      {/* <SignIn /> */}
      {/* <button></button> */}
    </div>
  );
};
