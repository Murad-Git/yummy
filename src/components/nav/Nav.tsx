'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SearchField } from '~/components/header/SearchField';
import { UserLogin } from '~/components/header/UserLogin';
import { DropList } from '~/components/ui/dropdowns/DropList';

export const Nav = () => {
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;
      setOffset(() => {
        // setScrollDown(scrollY - prevValue > 0 ? true : false);
        return scrollY;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    // <div
    //   className={`fixed bg-gray-900 top-0 w-full transition-all duration-500 z-40 hidden md:block`}
    // >
    <div
      className={`fixed bg-gray-900  top-0 w-full ${
        offset > 300 ? 'h-28 px-14' : 'h-auto'
      } transition-all duration-500 z-40 hidden md:block`}
    >
      {/* <div
         className={`items-center flex justify-between px-10 relative text-2xl`}
       > */}
      <div
        className={`items-center flex justify-between px-5 lg:px-10 relative text-2xl ${
          offset > 300 ? 'py-0' : 'py-2'
        }`}
      >
        <DropList />
        <Link
          className='absolute mx-auto left-0 right-0 text-center inline-table font-bold uppercase text-white '
          href='/'
        >
          yummy
        </Link>
        <ul className='nav-links'>
          <li>
            <Link href='/blog'>blog</Link>
          </li>
          <UserLogin />
        </ul>
        <SearchField
          className={`absolute left-0 right-0 mx-auto space-x-3 text-center top-[100%] transition-opacity duration-500 hidden md:flex ${
            offset > 300 ? 'opacity-100' : 'opacity-0 invisible'
          }`}
          subClassName='flex'
        />
      </div>
    </div>
  );
};
