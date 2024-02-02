'use client';
import { faBurger, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { UserLogin } from '~/components/header/UserLogin';
import { DropdownMob } from '~/components/ui/dropdowns/DropdownMob';
import { Overlay } from '~/components/ui/Overlay';
import { navList } from '~/constant/nav';

export const NavMobile = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className='md:hidden text-end relative px-10 py-4'>
      <h1 className='text-2xl font-bold uppercase text-white absolute mx-auto left-0 right-0 text-center inline-table'>
        yummy
      </h1>
      <button onClick={() => setOpenNav((prev) => !prev)}>
        <p className='inline-block text-green-500 italic font-bold mr-3'>
          Menu{' '}
        </p>
        <FontAwesomeIcon className='text-green-500 text-3xl' icon={faBurger} />
      </button>
      <div
        className={`absolute min-w-[17rem] min-h-screen z-50 pl-16 pr-8 rounded top-0 right-0 bg-gray-900 transition-all duration-300 px-10 py-4 block md:hidden ${
          openNav ? `translate-x-0` : `translate-x-full`
        }`}
      >
        <button className='mr-2' onClick={() => setOpenNav((prev) => !prev)}>
          <FontAwesomeIcon icon={faXmark} className='text-green-500 text-3xl' />
        </button>
        {/* <div className='text-gray-200 pr-4 pt-12'> */}
        <DropdownMob />
        {/* <ul className='space-y-5 text-xl'>
            {navList.map((menuItem) => (
              <DropdownMob key={menuItem.id} menuItem={menuItem} />
            ))}
            <li>Blog</li>
            <UserLogin />
          </ul> */}
        {/* </div> */}
      </div>
      {openNav && <Overlay onConfirm={setOpenNav} />}
    </div>
  );
};