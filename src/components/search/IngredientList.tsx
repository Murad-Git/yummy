import Link from 'next/link';
import React from 'react';
import RecipeImg from '~/components/ui/RecipeImg';
import { makeSlug } from '~/utils/helpers';

interface Props {
  ingredient: ingredientProps;
}

export const IngredientList = ({ ingredient }: Props) => {
  const ingLink = makeSlug(ingredient.id, ingredient.title);

  return (
    <div className='relative rounded-b-sm shadow-md '>
      <RecipeImg recipe={ingredient} link={ingLink} />
      <div className={`px-3 pb-1 pt-6`}>
        <div className='mb-3 text-left'>
          <Link href={ingLink}>
            <h2 className='my-3 cursor-pointer text-xl font-bold hover:text-gray-600'>
              {ingredient.title}
            </h2>
          </Link>
          <div className='flex justify-between p-3'>
            <div className='border-green-600 border-2 border-dashed p-3 hover:border-solid hover:border-green-700 min-w-[9rem]'>
              <p className='text-green-600'>You have</p>
              {ingredient.usedIngredients.map((ing) => (
                <p
                  className='capitalize hover:underline underline-offset-2'
                  key={ing.id}
                >
                  {ing.name}
                </p>
              ))}
            </div>
            <div className='border-2 border-dashed p-3 border-yellow-500 hover:border-solid hover:border-yellow-600 min-w-[9rem]'>
              <p className='text-yellow-500'>You need</p>
              {ingredient.missedIngredients.map((ing) => (
                <p
                  className='capitalize hover:underline underline-offset-2'
                  key={ing.id}
                >
                  {ing.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
