import { formattedDate } from '~/utils/helpers';

export const HeroTitle = () => {
  return (
    <div className='absolute top-[15%] mx-auto left-0 right-0 text-center z-30'>
      <div className=' flex flex-col items-center text-3xl md:text-5xl xl:text-7xl italic font-bold uppercase text-white hero-title'>
        <p>simple and</p>
        <br />
        <p>tasty recipes</p>
      </div>
      <div className='mt-4 text-sm text-white'>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};
