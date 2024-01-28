import Image from 'next/image';
import Link from 'next/link';

import { makeSlug } from '~/utils/helpers';

interface Props {
  heroRecipes: searchResult[];
  title: string;
}

export default function HeroRecipes({ heroRecipes, title }: Props) {
  return (
    <section className='section relative py-16'>
      <h1 className='section-title'>{title}</h1>
      <ul className='mx-auto grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-2'>
        <li
          key={heroRecipes[0].id}
          className='relative mb-8 overflow-hidden md:col-span-2 md:row-span-2 md:m-1 group/main cursor-pointer/'
        >
          <Link
            className='relative'
            href={makeSlug(heroRecipes[0].id, heroRecipes[0].title)}
            aria-label='top product'
          >
            <Image
              className='w-full object-contain transition-all duration-200'
              src={
                `https://spoonacular.com/recipeImages/${heroRecipes[0].id}-636x393.${heroRecipes[0].imageType}` ||
                `/images/no-food.png`
              }
              height={500}
              width={600}
              alt='product'
            />
            <div className='absolute bottom-0 bg-white opacity-90 group-hover/main:h-24 h-0 transition-all w-full'>
              <p className='text-center pt-6 text-xl font-semibold'>
                {heroRecipes[0].title}
              </p>
            </div>
          </Link>
        </li>
        {heroRecipes.slice(1).map((recipe) => (
          <li
            key={recipe.id}
            className='relative mb-8 overflow-hidden md:m-1 group/other cursor-pointer'
          >
            <Link
              className='relative'
              href={makeSlug(recipe.id, recipe.title)}
              aria-label='top product'
            >
              <Image
                className='w-full object-contain transition-all duration-200'
                src={
                  `https://spoonacular.com/recipeImages/${recipe.id}-636x393.${heroRecipes[0].imageType}` ||
                  `/images/no-food.png`
                }
                height={500}
                width={600}
                alt='product'
              />
              <div className='absolute bottom-0 bg-white opacity-90 h-16 md:group-hover/other:h-20 md:h-0 transition-all w-full'>
                <p className='text-center pt-4 text-base px-2 md:px-0 md:text-lg font-semibold'>
                  {recipe.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
