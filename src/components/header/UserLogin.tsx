'use client';
import { faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import { Auth } from '~/components/auth/Auth';
import { useAuth } from '~/components/auth/AuthProvider';
import { SignOut } from '~/components/auth/SignOut';
import { Overlay } from '~/components/ui/Overlay';
import { setHamburMenu, setShowAuth } from '~/store/navigationSlice';
import { useAppDispatch, useAppSelector } from '~/types/main';

interface Props {
  className?: string;
}

export const UserLogin = ({ className }: Props) => {
  const showAuth = useAppSelector((state) => state.isAuthMenuOpen);
  const { session } = useAuth();
  const dispatch = useAppDispatch();

  return (
    <li
      className={`flex items-center md:justify-around md:space-x-4 flex-col md:flex-row ${className}`}
    >
      {session ? (
        <SignOut />
      ) : (
        <button
          className='text-gray-300 xl:text-lg transition-all xl:p-3'
          onClick={() => {
            dispatch(setShowAuth());
            dispatch(setHamburMenu());
          }}
        >
          <p className='inline-block mr-3'>Sign In</p>
          <FontAwesomeIcon className='text-green-500' icon={faRightToBracket} />
        </button>
      )}
      {/* {!!showAuth && <Auth />} */}
      {!!showAuth && (
        <Overlay onConfirm={() => dispatch(setShowAuth())}>
          <Auth />
        </Overlay>
      )}
      {session && (
        <Link
          href='/profile'
          className='hover:text-white xl:text-lg transition-all xl:p-3 mt-4 md:mt-0'
        >
          Profile <FontAwesomeIcon className='text-green-500' icon={faUser} />
        </Link>
      )}
    </li>
  );
};
