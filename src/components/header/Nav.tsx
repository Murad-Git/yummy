'use client';
import Link from 'next/link';
import { UserLogin } from '~/components/header/UserLogin';
import { DropList } from '~/components/ui/dropdowns/DropList';
import { navList } from '~/constant/nav';

export const Nav = () => {
  // const [openRecipes, setOpenRecipes] = useState(false);
  // const [openCategory, setOpenCategory] = useState(false);
  // const [openDishes, setOpenDishes] = useState(false);
  return (
    <div className='items-center justify-between hidden md:flex' id='nav'>
      <DropList items={navList} />
      <Link
        className='absolute mx-auto left-0 right-0 text-center inline-table'
        href='/'
      >
        <h1 className='text-lg font-bold uppercase text-white '>yummy</h1>
      </Link>
      <ul className='nav-links'>
        <li>
          <Link href='/blog'>blog</Link>
        </li>
        <UserLogin />
      </ul>
    </div>
  );
  // return (
  //   // <div className='bg-gray-900 px-10 py-4 w-screen hidden md:block'>
  //   <div
  //     className='relative hidden md:flex items-center justify-between text-gray-200'
  //     id='nav'
  //
  //     <ul className='nav-links'>
  //       <li
  //         className='group/recipes relative'
  //         // onClick={() => setOpenRecipes((prev) => !prev)}
  //       >
  //         recipes{' '}
  //         <span>
  //           <FontAwesomeIcon
  //             className='text-center text-sm text-green-400'
  //             size='1x'
  //             icon={faChevronDown}
  //           />
  //         </span>
  //         <DropdownList
  //           // open={openRecipes}
  //           listItems={navRecipes}
  //           className='group-hover/recipes:block'
  //           // className='group-hover/recipes:visible group-hover/recipes:z-30 group-hover/recipes:opacity-100'
  //         />
  //       </li>
  //       <li
  //         className='group/category relative'
  //         // onClick={() => setOpenCategory((prev) => !prev)}
  //       >
  //         category{' '}
  //         <span>
  //           <FontAwesomeIcon
  //             className='text-center text-sm text-green-400'
  //             size='1x'
  //             icon={faChevronDown}
  //           />
  //         </span>
  //         <DropdownList
  //           // open={openCategory}
  //           listItems={navCategory}
  //           className='group-hover/category:block'
  //           // className='group-hover/category:visible group-hover/category:z-30 group-hover/category:opacity-100'
  //         />
  //       </li>
  //       <li
  //         className='group/dishes relative'
  //         // onClick={() => setOpenDishes((prev) => !prev)}
  //       >
  //         dishes{' '}
  //         <span>
  //           <FontAwesomeIcon
  //             className='text-center text-sm text-green-400'
  //             size='1x'
  //             icon={faChevronDown}
  //           />
  //         </span>
  //         <DropdownList
  //           // open={openDishes}
  //           listItems={navDishes}
  //           className='group-hover/dishes:block'
  //           // className='group-hover/dishes:visible group-hover/dishes:z-30 group-hover/dishes:opacity-100'
  //         />
  //       </li>
  //       <li>blog</li>
  //     </ul>
  //     <h1 className='text-lg font-bold uppercase text-white absolute mx-auto left-0 right-0 text-center inline-table'>
  //       yummy
  //     </h1>
  //     {/* <h1 className='text-lg font-bold uppercase'>yummy</h1> */}
  //     <ul className='nav-links'>
  //       <li>about</li>
  //       <UserLogin />
  //     </ul>
  //   </div>
  //   // </div>
  // );
};
