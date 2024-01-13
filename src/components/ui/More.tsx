// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const More = () => {
  return (
    <div className='flex items-center justify-center rounded-b-sm bg-gray-100 opacity-90 shadow-md hover:opacity-100'>
      <button>
        <FontAwesomeIcon
          className='h-20 font-extralight text-green-500'
          icon={faArrowRight}
        />
      </button>
    </div>
  );
};
