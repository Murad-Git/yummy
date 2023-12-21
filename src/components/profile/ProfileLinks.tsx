'use client';
import { NavLink } from '~/components/ui/NavLink';
import { profileLinks } from '~/constant/mainConst';
import { useAppSelector } from '~/types/main';

export default function ProfileLinks() {
  const curNav = useAppSelector((state) => state.profNav);
  return (
    <ul className='space-y-4 text-lg font-semibold'>
      {profileLinks.map((link) => (
        <NavLink
          size='lg'
          key={link as string}
          category={link as string}
          isActive={curNav === link}
          setCategories={true}
        />
      ))}
    </ul>
  );
}
