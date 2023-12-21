'use client';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { Auth } from '~/components/auth/Auth';
import { useAuth } from '~/components/auth/AuthProvider';
import { SignOut } from '~/components/auth/SignOut';
import { Overlay } from '~/components/ui/Overlay';

export const UserLogin = () => {
  const [showAuth, setShowAuth] = useState(false);
  const { session } = useAuth();

  return (
    <li className='flex items-end md:items-center md:justify-around md:space-x-4 flex-col md:flex-row'>
      {session ? (
        <SignOut />
      ) : (
        <button
          className='text-white xl:text-lg transition-all xl:p-3'
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
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>
      )}
    </li>
  );
};
