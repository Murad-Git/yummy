'use client';
import { NavLink } from '~/components/ui/NavLink';
import { profileLinks } from '~/constant/typesConts';
import { useAppSelector } from '~/types/main';

export default function Links() {
  const curNav = useAppSelector((state) => state.profNav);
  return (
    <ul className='flex items-center md:block space-y-2 md:space-y-4 text-lg font-semibold'>
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
