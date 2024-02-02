'use client';
import Link from 'next/link';
import { setProfNav } from '~/store/navigationSlice';
import { useAppDispatch } from '~/types/main';

interface Props {
  category: string;
  isActive: boolean;
  type?: string;
  shallow?: boolean;
  setCategories?: boolean;
  size?: 'lg' | 'xl' | '2xl';
}

export const NavLink = ({
  category,
  isActive,
  type,
  setCategories,
  shallow,
  size = `2xl`,
}: Props) => {
  const dispatch = useAppDispatch();

  if (setCategories) {
    return (
      <li
        onClick={() => dispatch(setProfNav(category))}
        className={`navLink ${
          !!isActive && `link--active`
        } text-${size} font-semibold`}
      >
        {category}
      </li>
    );
  }
  return (
    <Link
      shallow={shallow}
      href={`/${type}/${category}`}
      className={`navLink ${
        !!isActive && `navLink--active`
      } text-xl font-semibold`}
    >
      {category}
    </Link>
  );
};
