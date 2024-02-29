'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { HeroTitle } from '~/components/header/HeroTitle';
import { SearchField } from '~/components/header/SearchField';

interface Props {
  img?: string;
  title: string;
}

export const HeroImg = ({ img, title }: Props) => {
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;
      setOffset(() => {
        // setScrollDown(scrollY - prevValue > 0 ? true : false);
        return scrollY;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className='relative'>
      <div className='relative'>
        <Image
          src={img ? img : `/images/hero/hero-bg2.jpeg`}
          alt='hero'
          width='0'
          height='0'
          sizes='100vw'
          className='h-[calc(100vh/2.5)] md:h-[calc(100vh/1.5)] w-full object-cover'
          priority
        />
        <div className='absolute top-0 z-10 h-[calc(100vh/2.5)] md:h-[calc(100vh/1.5)] w-full bg-black opacity-20 ' />
      </div>
      <HeroTitle title={title} />
      <SearchField
        className={`absolute bottom-[20%] md:bottom-[30%] mx-auto left-0 right-0 text-center z-20 flex ${
          offset > 300 ? 'opacity-0 invisible' : 'opacity-100'
        }`}
        subClassName='flex flex-col pt-2'
      />
    </div>
  );
};
