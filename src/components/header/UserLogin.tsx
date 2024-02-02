'use client';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { Auth } from '~/components/auth/Auth';
import { useAuth } from '~/components/auth/AuthProvider';
import { SignOut } from '~/components/auth/SignOut';
import { Overlay } from '~/components/ui/Overlay';

interface Props {
  className?: string;
}

export const UserLogin = ({ className }: Props) => {
  const [showAuth, setShowAuth] = useState(false);
  const { session } = useAuth();

  return (
    <li
      className={`flex items-center md:justify-around md:space-x-4 flex-col md:flex-row ${className}`}
    >
      {session ? (
        <SignOut />
      ) : (
        <button
          className='text-gray-300 xl:text-lg transition-all xl:p-3'
          onClick={() => setShowAuth((prev) => !prev)}
        >
          <p className='inline-block mr-3'>Sign In</p>
          <FontAwesomeIcon className='text-green-500' icon={faRightToBracket} />
        </button>
      )}
      {showAuth && <Auth />}
      {showAuth && <Overlay onConfirm={setShowAuth} />}
      {session && (
        <Link
          href='/profile'
          className='hover:text-white xl:text-lg transition-all xl:p-3 mt-4 md:mt-0'
        >
          <FontAwesomeIcon className='text-green-500' icon={faUser} />
        </Link>
      )}
    </li>
  );
};
