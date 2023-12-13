import Link from 'next/link';

interface Props {
  subItems: { id: number; text: string; src: string }[];
}

export const DropItem = ({ subItems }: Props) => {
  return (
    <ul className='absolute hidden text-gray-700 pt-1 group-hover:block z-40 bg-gray-900'>
      {subItems.map((item) => (
        <li className='hover:bg-slate-800' key={item.id}>
          <Link
            className='rounded-t text-base text-gray-200 hover:text-white p-4 capitalize block whitespace-no-wrap'
            href={item.src}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
