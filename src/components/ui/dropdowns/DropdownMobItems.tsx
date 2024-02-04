import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import { setHamburMenu } from '~/store/navigationSlice';
import { useAppDispatch } from '~/types/main';

interface Props {
  hamItem: {
    id: number;
    name: string;
    subRecipes: {
      id: number;
      text: string;
      src: string;
    }[];
  };
}

export const DropdownMobItems = ({ hamItem }: Props) => {
  const dispatch = useAppDispatch();
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <li key={hamItem.id}>
      <button onClick={() => setOpenNavigation((prev) => !prev)}>
        <p className='capitalize mb-4 text-2xl'>
          {hamItem.name}{' '}
          <span>
            <FontAwesomeIcon
              className='ml-1 text-center text-sm text-green-400'
              size='1x'
              icon={openNavigation ? faChevronUp : faChevronDown}
            />
          </span>
        </p>
      </button>
      <ul
        className={`dropdown-mobile ${
          openNavigation ? `dropdown-mobile--active` : ``
        }`}
      >
        {hamItem.subRecipes.map((subHam) => (
          <li key={subHam.id}>
            <button onClick={() => dispatch(setHamburMenu())}>
              <Link href={subHam.src} className='capitalize'>
                {subHam.text}
              </Link>
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};
