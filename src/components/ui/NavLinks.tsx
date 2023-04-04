'use client';
import { usePathname } from 'next/navigation';

import { NavLink } from '~/components/ui/NavLink';
import { categories } from '~/constant/categories';

export const NavLinks = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split(`/`).pop() === path;
  };
  return (
    <nav>
      {categories.map((category) => (
        <NavLink
          key={category as string}
          category={category as string}
          isActive={isActive(category as string)}
        />
      ))}
    </nav>
  );
};
