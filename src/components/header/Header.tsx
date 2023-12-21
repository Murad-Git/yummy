import { Nav } from '~/components/header/Nav';
import { NavMobile } from '~/components/header/NavMobile';

export const Header = () => {
  return (
    <div className='bg-gray-900 px-10 py-2 md:py-0 w-full' id='nav'>
      <Nav />
      <NavMobile />
    </div>
  );
};
