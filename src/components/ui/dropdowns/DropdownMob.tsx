import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { navList } from '~/constant/nav';

interface Props {
  menuItem: (typeof navList)[0];
}

export const DropdownMob = ({ menuItem }: Props) => {
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
            <button className='capitalize'>{li.text}</button>
          </li>
        ))}
      </ul>
    </li>
  );
};
