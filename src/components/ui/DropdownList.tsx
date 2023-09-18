import { navRecipes } from '~/constant/nav';

interface Props {
  listItems: typeof navRecipes;
  open?: boolean;
  className?: string;
}

export const DropdownList = ({ listItems, open, className }: Props) => {
  return (
    <ul className={`dropdown-menu ${className}`}>
      {/* <ul className={`dropdown-menu ${open ? 'active' : 'inactive'}`}> */}
      {listItems.map((item) => (
        <li className='dropdownItem' key={item.id}>
          <a className='hover:text-white'>{item.text}</a>
        </li>
      ))}
    </ul>
  );
};
