import { DropItem } from '~/components/ui/dropdowns/DropItem';
import { navList } from '~/constant/nav';

interface Props {
  items: typeof navList;
}

export const DropList = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className='group inline-block relative text-gray-200'
        >
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
          {/* <ul className="absolute hidden text-gray-700 pt-1 group-hover:block z-40 bg-gray-900">
            {item.subRecipes.map(item => (
          <li className='hover:bg-slate-800' key={item.id}>
            <a
              className="rounded-t text-base text-gray-200 hover:text-white p-4 capitalize block whitespace-no-wrap"
              href={item.src}
            >{ item.text}</a>
          </li>
        ))}
        </ul> */}
        </div>
      ))}
    </div>
  );
};
