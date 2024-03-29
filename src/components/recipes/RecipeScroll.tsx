'use client';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useEffect, useRef, useState } from 'react';

import { makeSlug } from '~/utils/helpers';

interface Props {
  recipes: searchResult[];
  title: string;
}

export default function RecipeScroll({ recipes, title }: Props) {
  const scrollerRef: RefObject<HTMLUListElement> = useRef(null);

  const handleScrollingRight = () => {
    if (scrollerRef.current && scrollerRef.current.scrollLeft < -970) return;
    if (scrollerRef.current) scrollerRef.current.scrollLeft += 400;
  };
  const handleScrollingLeft = () => {
    if (scrollerRef.current && scrollerRef.current.scrollLeft === 0) return;
    if (scrollerRef.current) scrollerRef.current.scrollLeft -= 400;
  };
  return (
    <section className=' relative my-24'>
      <h1 className='section-title'>{title}</h1>
      <ul
        ref={scrollerRef}
        className='flex scroll-m-1 space-x-2 overflow-hidden scroll-smooth whitespace-nowrap'
      >
        {!!recipes &&
          recipes.map((recipe) => (
            <li
              key={recipe.id}
              className='inline-block min-w-[16rem] md:min-w-[21rem] rounded-full'
            >
              <Link href={makeSlug(recipe.id, recipe.title)}>
                <Image
                  className='mb-3 h-[15rem] md:h-[20rem] min-w-[15rem] md:min-w-[21rem] rounded-full object-cover'
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
                  width={500}
                  height={500}
                  alt='recipe'
                />
                <h2 className='mt-1 mb-2 cursor-pointer truncate text-center text-lg font-bold hover:text-gray-600 break-words'>
                  {recipe.title}
                </h2>
              </Link>
            </li>
          ))}
      </ul>
      <button
        className='absolute top-1/2 -left-4 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-green-500 bg-opacity-80'
        onClick={handleScrollingLeft}
      >
        <FontAwesomeIcon className='h-6 text-white' icon={faArrowLeft} />
      </button>
      <button
        className='absolute top-1/2 -right-4 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-green-500 bg-opacity-80'
        onClick={handleScrollingRight}
      >
        <FontAwesomeIcon className='h-6 text-white' icon={faArrowRight} />
      </button>
    </section>
  );
}
