'use client';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject, useRef } from 'react';

import { makeSlug } from '~/utils/helpers';

interface Props {
  recipes: searchResult[];
}

export default function RecipeScroll({ recipes }: Props) {
  const scrollerRef: RefObject<HTMLUListElement> = useRef(null);

  // SWR,
  return (
    <section className=' relative mb-24'>
      <h1 className='section-title'>Ideas for Dinner</h1>
      <ul
        ref={scrollerRef}
        className=' scroll-h flex scroll-m-1 space-x-2 overflow-hidden scroll-smooth whitespace-nowrap'
      >
        {!!recipes &&
          recipes.map((recipe) => (
            <li key={recipe.id} className='inline-block w-[21rem] rounded-full'>
              <Link href={makeSlug(recipe.id, recipe.title)}>
                <Image
                  className='mb-3 h-[20rem] w-[21rem] rounded-full object-cover'
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
                  width={500}
                  height={500}
                  alt='recipe'
                />
                <h2 className='mt-1 mb-2 w-[21rem] cursor-pointer whitespace-pre-wrap px-6 text-center text-lg font-bold hover:text-gray-600'>
                  {recipe.title}
                </h2>
              </Link>
            </li>
          ))}
        {/* <li className='inline-block w-[21rem] rounded-full'>
          <Image
            className='mb-3 h-[20rem] w-[21rem] rounded-full object-cover'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            width={500}
            height={500}
            alt='recipe'
          />
          <h2 className='mt-1 mb-2 w-[21rem] cursor-pointer whitespace-pre-wrap px-6 text-center text-lg font-bold hover:text-gray-600'>
            Herb chicken with sweet potato mash and sautéed broccoli
          </h2>
        </li>
        <li className='inline-block w-[21rem] rounded-full'>
          <Image
            className='mb-3 h-[20rem] w-[21rem] rounded-full object-cover'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            width={500}
            height={500}
            alt='recipe'
          />
          <h2 className='mt-1 mb-2 w-[21rem] cursor-pointer whitespace-pre-wrap px-6 text-center text-lg font-bold hover:text-gray-600'>
            Herb chicken with sweet potato mash and sautéed broccoli
          </h2>
        </li>
        <li className='inline-block w-[21rem] rounded-full'>
          <Image
            className='mb-3 h-[20rem] w-[21rem] rounded-full object-cover'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            width={500}
            height={500}
            alt='recipe'
          />
          <h2 className='mt-1 mb-2 w-[21rem] cursor-pointer whitespace-pre-wrap px-6 text-center text-lg font-bold hover:text-gray-600'>
            Herb chicken with sweet potato mash and sautéed broccoli
          </h2>
        </li>
        <li className='inline-block w-[21rem] rounded-full'>
          <Image
            className='mb-3 h-[20rem] w-[21rem] rounded-full object-cover'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            width={500}
            height={500}
            alt='recipe'
          />
          <h2 className='mt-1 mb-2 w-[21rem] cursor-pointer whitespace-pre-wrap px-6 text-center text-lg font-bold hover:text-gray-600'>
            Herb chicken with sweet potato mash and sautéed broccoli
          </h2>
        </li>
        <li className='inline-block w-[21rem] rounded-full'>
          <Image
            className='mb-3 h-[20rem] w-[21rem] rounded-full object-cover'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            width={500}
            height={500}
            alt='recipe'
          />
          <h2 className='mt-1 mb-2 w-[21rem] cursor-pointer whitespace-pre-wrap px-6 text-center text-lg font-bold hover:text-gray-600'>
            Herb chicken with sweet potato mash and sautéed broccoli
          </h2>
        </li>
        <li className='inline-block w-[21rem] rounded-full'>
          <Image
            className='mb-3 h-[20rem] w-[21rem] rounded-full object-cover'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            width={500}
            height={500}
            alt='recipe'
          />
          <h2 className='mt-1 mb-2 w-[21rem] cursor-pointer whitespace-pre-wrap px-6 text-center text-lg font-bold hover:text-gray-600'>
            Herb chicken with sweet potato mash and sautéed broccoli
          </h2>
        </li> */}
        {/* <Image
          className='h-[20rem] w-[21rem] rounded-full object-cover'
          src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
          width={500}
          height={500}
          alt='recipe'
        /> */}
        {/* <Image
          className='rounded-sm'
          src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
          width={500}
          height={500}
          alt='recipe'
        /> */}
      </ul>
      <button
        className='absolute top-[13rem] left-4 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-mainColor bg-opacity-50'
        onClick={() => (scrollerRef.current!.scrollLeft -= 600)}
      >
        <FontAwesomeIcon className='h-6 text-white' icon={faArrowLeft} />
      </button>
      <button
        className='absolute top-[13rem] right-4 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-mainColor bg-opacity-50'
        onClick={() => (scrollerRef.current!.scrollLeft += 600)}
      >
        <FontAwesomeIcon className='h-6 text-white' icon={faArrowRight} />
      </button>
    </section>
  );
}
