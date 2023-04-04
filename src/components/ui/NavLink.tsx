import Link from 'next/link';

interface Props {
  category: string;
  isActive: boolean;
  setCategories?: (prev: string) => void;
  size?: 'lg' | 'xl' | '2xl';
}

export const NavLink = ({
  category,
  isActive,
  setCategories,
  size = `2xl`,
}: Props) => {
  if (setCategories) {
    return (
      <li
        onClick={() => setCategories(category)}
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
      href={`/recipes/${category}`}
      className={`navLink ${
        !!isActive && `navLink--active`
      } text-xl font-semibold`}
    >
      {category}
    </Link>
  );
};
