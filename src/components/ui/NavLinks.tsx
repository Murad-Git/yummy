'use client';
import { usePathname } from 'next/navigation';

import { NavLink } from '~/components/ui/NavLink';

interface Props {
  categories: Category[];
  shallow: boolean;
  type: string;
}

export const NavLinks = ({ categories, shallow, type }: Props) => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split(`/`).pop() === path;
  };
  return (
    <nav>
      {categories.map((category) => (
        <NavLink
          shallow={shallow}
          key={category as string}
          category={category as string}
          type={type}
          isActive={isActive(category as string)}
        />
      ))}
    </nav>
  );
};
