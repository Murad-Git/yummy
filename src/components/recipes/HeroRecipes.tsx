import Image from 'next/image';
import Link from 'next/link';

import { makeSlug } from '~/utils/helpers';

interface Props {
  heroRecipes: Recipe[];
}

export default function HeroRecipes({ heroRecipes }: Props) {
  // const data = await fetchRecipes({ items: '1', isDynamic: false });
  return (
    <section className='section relative py-8'>
      <h1 className='section-title'>Most Popular</h1>
      <ul className='mx-auto grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        <li
          key={heroRecipes[0].id}
          className='relative mb-8 overflow-hidden md:col-span-2 md:row-span-2 md:m-1'
        >
          <Link
            href={makeSlug(heroRecipes[0].id, heroRecipes[0].title)}
            aria-label='top product'
          >
            <Image
              className='w-full object-contain transition-all duration-200 hover:scale-110'
              src={`https://spoonacular.com/recipeImages/${heroRecipes[0].id}-636x393.jpg`}
              height={500}
              width={600}
              alt='product'
            />
          </Link>
        </li>
        {heroRecipes.slice(1).map((recipe) => (
          <li key={recipe.id} className='relative mb-8 overflow-hidden md:m-1'>
            <Link
              href={makeSlug(recipe.id, recipe.title)}
              aria-label='top product'
            >
              <Image
                className='w-full object-contain transition-all duration-200 hover:scale-110'
                src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
                height={500}
                width={600}
                alt='product'
              />
            </Link>
          </li>
        ))}
        {/* <Link
          href='/'
          aria-label='top product'
          className='relative mb-8 overflow-hidden md:col-span-2 md:row-span-2 md:m-1'
        >
          <Image
            className='w-full object-contain transition-all duration-200 hover:scale-110'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            height={500}
            width={600}
            alt='product'
          />
        </Link>
        <Link
          href='/'
          aria-label='top product'
          className='relative mb-8 overflow-hidden md:m-1'
        >
          <Image
            className='object-contain transition-all duration-200 hover:scale-110'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            height={500}
            width={600}
            alt='product'
          />
        </Link>
        <Link
          href='/'
          aria-label='top product'
          className='relative mb-8 overflow-hidden md:m-1'
        >
          <Image
            className='object-contain transition-all duration-200 hover:scale-110'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            height={500}
            width={600}
            alt='product'
          />
        </Link>
        <Link
          href='/'
          aria-label='top product'
          className='relative mb-8 overflow-hidden md:m-1'
        >
          <Image
            className='object-contain transition-all duration-200 hover:scale-110'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            height={500}
            width={600}
            alt='product'
          />
        </Link>
        <Link
          href='/'
          aria-label='top product'
          className='relative mb-8 overflow-hidden md:m-1'
        >
          <Image
            className='object-contain transition-all duration-200 hover:scale-110'
            src='https://spoonacular.com/recipeImages/641727-636x393.jpg'
            height={500}
            width={600}
            alt='product'
          />
        </Link> */}
      </ul>
    </section>
  );
}
