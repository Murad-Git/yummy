'use client';

import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function UserLogin() {
  const { data: session } = useSession();
  const loginHandle = () => {
    session ? signOut() : signIn();
  };
  return (
    <div className='flex items-center justify-around space-x-4'>
      <button
        className='flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-full bg-white'
        onClick={loginHandle}
      >
        {session ? (
          <FontAwesomeIcon className='rotate-180' icon={faRightToBracket} />
        ) : (
          <FontAwesomeIcon icon={faRightToBracket} />
        )}
      </button>
      {session && (
        <Link
          href='/profile'
          className='flex h-10 w-10 flex-col items-center justify-center rounded-full bg-white'
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      )}
      {/* <button></button> */}
    </div>
  );
}
