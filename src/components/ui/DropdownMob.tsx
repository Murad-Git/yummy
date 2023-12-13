import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { navList } from '~/constant/nav';

// interface Props {
//   listItems: typeof navRecipes;
//   isOpen?: boolean;
//   className?: string;
// }
interface Props {
  menuItem: (typeof navList)[0];
}

export const DropdownMob = ({ menuItem }: Props) => {
  // export const DropdownMob = ({ listItems, isOpen, className }: Props) => {
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <li key={menuItem.id} onClick={() => setOpenNavigation((prev) => !prev)}>
      {menuItem.name}
      <span>
        <FontAwesomeIcon
          className='ml-1 text-center text-sm text-green-400'
          size='1x'
          icon={openNavigation ? faChevronUp : faChevronDown}
        />
      </span>
      <ul
        className={`dropdown-mobile ${
          openNavigation ? `dropdown-mobile--active` : ``
        }`}
      >
        {menuItem.subRecipes.map((li) => (
          <li key={li.id}>
            <a href='#' className='capitalize'>
              {li.text}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
  // return (
  //   <ul
  //     className={`dropdown-mobile ${
  //       !!isOpen && 'dropdown-mobile--active'
  //     } ${className}`}
  //   >
  //     {listItems.map((li) => (
  //       <li key={li.id}>{li.text}</li>
  //     ))}
  //     {/* <li>pizza</li> */}
  //   </ul>
  // );
};
