'use client';
import Link from 'next/link';
import { UserLogin } from '~/components/header/UserLogin';
import { DropdownMobItems } from '~/components/ui/dropdowns/DropdownMobItems';
import { navList } from '~/constant/nav';
import { setHamburMenu } from '~/store/navigationSlice';
import { useAppDispatch } from '~/types/main';

export const DropdownMob = () => {
  const dispatch = useAppDispatch();

  return (
    <div className='text-gray-200 pr-4 pt-12'>
      <ul className='space-y-5 text-xl flex flex-col items-center'>
        {navList.map((hamItem) => (
          <DropdownMobItems key={hamItem.id} hamItem={hamItem} />
        ))}
        <li className='text-2xl'>
          <button onClick={() => dispatch(setHamburMenu())}>
            <Link href='/blog'>Blog</Link>
          </button>
        </li>
        <UserLogin className='text-2xl' />
      </ul>
    </div>
  );
};
