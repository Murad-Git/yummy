'use client';
import Link from 'next/link';
import { UserLogin } from '~/components/header/UserLogin';
import { DropList } from '~/components/ui/dropdowns/DropList';
import { navList } from '~/constant/nav';

export const Nav = () => {
  return (
    <div className='items-center justify-between hidden md:flex py-2'>
      <DropList items={navList} />
      <Link
        className='absolute mx-auto left-0 right-0 text-center inline-table'
        href='/'
      >
        <h1 className='text-lg font-bold uppercase text-white '>yummy</h1>
      </Link>
      <ul className='nav-links'>
        <li>
          <Link href='/blog'>blog</Link>
        </li>
        <UserLogin />
      </ul>
    </div>
  );
};
