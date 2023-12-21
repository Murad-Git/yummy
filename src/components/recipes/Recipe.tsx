'use client';

import DOMPurify from 'dompurify';
import Link from 'next/link';

import RecipeImg from '~/components/ui/RecipeImg';
import { makeSlug } from '~/utils/helpers';

type Props = {
  recipe: Recipe | searchResult;
};

// Virtual List - React biblary
// user select none in CSS

export default function Recipe({ recipe }: Props) {
  const anotherDesc = {
    __html: `summary` in recipe ? DOMPurify.sanitize(recipe.summary) : ``,
  };

  const recipeLink = makeSlug(recipe.id, recipe.title);
  return (
    <div className='relative rounded-b-sm shadow-md '>
      <RecipeImg recipe={recipe} link={recipeLink} />
      <div
        className={`flex ${
          anotherDesc.__html.length > 0 ? `h-48` : `h-32`
        } flex-col items-start justify-between px-3 pb-1 pt-6 hover:bg-gray-100`}
      >
        <div className='mb-3 text-left'>
          <Link href={recipeLink}>
            <h2 className='my-3 cursor-pointer text-xl font-bold hover:text-gray-600'>
              {recipe.title}
            </h2>
          </Link>
          <p
            className='inline-block cursor-text text-md text-gray-500 line-clamp-2'
            dangerouslySetInnerHTML={anotherDesc}
          />
        </div>
      </div>
    </div>
  );
}
