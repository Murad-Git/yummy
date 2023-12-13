import { navRecipes } from '~/constant/nav';

interface Props {
  listItems: typeof navRecipes;
  className?: string;
}

export const DropdownList = ({ listItems, className }: Props) => {
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
