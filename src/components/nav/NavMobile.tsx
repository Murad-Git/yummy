'use client';
import { faBurger, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, config, useSpring } from '@react-spring/web';
import { useEffect, useState } from 'react';
import { SearchField } from '~/components/header/SearchField';
import { UserLogin } from '~/components/header/UserLogin';
import { DropdownMob } from '~/components/ui/dropdowns/DropdownMob';
import { Overlay } from '~/components/ui/Overlay';
import { navList } from '~/constant/nav';
import { setHamburMenu } from '~/store/navigationSlice';
import { useAppDispatch, useAppSelector } from '~/types/main';

export const NavMobile = () => {
  const isHamMenuOpen = useAppSelector((state) => state.isHamburMenuOpen);
  const dispatch = useAppDispatch();
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;
      setOffset(() => {
        // setScrollDown(scrollY - prevValue > 0 ? true : false);
        return scrollY;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // const transitions = useTransition(openNav, {
  //   from: {
  //     transform:translate
  //   },
  //   enter: { opacity: 1, transform: `scale(${1})` },
  //   leave: { opacity: 0, transform: `scale(${0.9})` },
  //   config: config.wobbly,
  // });
  return (
    <div
      className={`fixed bg-gray-900 top-0 w-full transition-all duration-500 md:hidden z-30 ${
        offset > 100 ? 'h-32' : 'h-14'
      }`}
    >
      <div
        className={`md:hidden text-end relative px-10 ${
          offset > 100 ? 'py-4' : 'py-2'
        } `}
      >
        <h1 className='text-2xl font-bold uppercase text-white absolute mx-auto left-0 right-0 text-center inline-table'>
          yummy
        </h1>
        <button onClick={() => dispatch(setHamburMenu())}>
          <p className='inline-block text-green-500 italic font-bold mr-3'>
            Menu{' '}
          </p>
          <FontAwesomeIcon
            className='text-green-500 text-3xl'
            icon={faBurger}
          />
        </button>
        {/* <aside
          className={`fixed min-w-[17rem] min-h-screen z-40 pl-16 pr-8 rounded top-0 right-0 bg-gray-900 transition-all duration-300 px-10 py-4 block md:hidden ${
            openNav ? `translate-x-0` : `translate-x-full invisible`
          }`}
        > */}
        <aside
          className={`absolute min-w-[17rem] min-h-screen z-50 pl-16 pr-8 rounded top-0 right-0 bg-gray-900 transition-all duration-300 px-10 py-4 block md:hidden ${
            isHamMenuOpen ? `translate-x-0` : `translate-x-full hidden`
          }`}
        >
          <button className='mr-2' onClick={() => dispatch(setHamburMenu())}>
            <FontAwesomeIcon
              icon={faXmark}
              className='text-green-500 text-3xl'
            />
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
          {isHamMenuOpen && (
            <Overlay
              className='md:hidden'
              onConfirm={() => dispatch(setHamburMenu())}
            />
          )}
        </aside>
        <SearchField
          className={`absolute left-0 right-0 mx-auto flex space-x-3 text-center top-[100%] transition-opacity duration-500 md:hidden ${
            offset > 100 ? 'opacity-100' : 'opacity-0 invisible'
          }`}
          subClassName='flex'
        />
      </div>
    </div>
  );
};
