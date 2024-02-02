import { DropItem } from '~/components/ui/dropdowns/DropItem';
import { navList } from '~/constant/nav';

export const DropList = () => {
  return (
    <ul>
      {navList.map((item) => (
        <li key={item.id} className='group inline-block relative text-gray-200'>
          <button className='font-semibold py-2 px-4 rounded inline-flex items-center xl:text-lg cursor-pointer hover:text-white transition-all hover:bg-gray-800 mr-2'>
            <span className='mr-1'>{item.name}</span>
            <svg
              className=' fill-green-400 h-4 w-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
            >
              <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
            </svg>
          </button>
          <DropItem subItems={item.subRecipes} />
        </li>
      ))}
    </ul>
  );
};
