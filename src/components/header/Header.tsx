import { Nav } from '~/components/nav/Nav';
import { NavMobile } from '~/components/nav/NavMobile';
import { ScrollTop } from '~/components/ui/ScrollTop';

export const Header = () => {
  return (
    <div className='bg-gray-900 w-full' id='nav'>
      <Nav />
      <NavMobile />
      <ScrollTop />
    </div>
  );
};
