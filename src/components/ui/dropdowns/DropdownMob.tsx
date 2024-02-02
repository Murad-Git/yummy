import Link from 'next/link';
import { UserLogin } from '~/components/header/UserLogin';
import { DropdownMobItems } from '~/components/ui/dropdowns/DropdownMobItems';
import { navList } from '~/constant/nav';

export const DropdownMob = () => {
  return (
    <div className='text-gray-200 pr-4 pt-12'>
      <ul className='space-y-5 text-xl flex flex-col items-center'>
        {navList.map((hamItem) => (
          <DropdownMobItems key={hamItem.id} hamItem={hamItem} />
        ))}
        <li className='text-2xl'>
          <Link href='/studio'>Blog</Link>
        </li>
        <UserLogin className='text-2xl' />
      </ul>
    </div>
  );
};
