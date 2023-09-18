import Image from 'next/image';
import { HeroTitle } from '~/components/header/HeroTitle';
import { SearchField } from '~/components/header/SearchField';

export const HeroImg = () => {
  return (
    <div className='relative'>
      <div className='relative'>
        <Image
          src='/images/hero/hero-bg.jpg'
          alt='hero'
          width='0'
          height='0'
          sizes='100vw'
          className='h-[calc(100vh/1.5)] w-full object-cover'
        />
        <div className='absolute top-0 z-20 h-[calc(100vh/1.5)] w-full bg-black opacity-20 ' />
      </div>
      <HeroTitle />
      <SearchField className='absolute bottom-[30%] mx-auto left-0 right-0 text-center z-30' />
    </div>
  );
};
