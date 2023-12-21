// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const More = () => {
  return (
    <div className='flex items-center justify-center rounded-b-sm bg-gray-100 opacity-90 shadow-md hover:opacity-100'>
      <Link href='/'>
        <FontAwesomeIcon
          className='h-20 font-extralight text-green-500'
          icon={faArrowRight}
        />
      </Link>
    </div>
  );
};
