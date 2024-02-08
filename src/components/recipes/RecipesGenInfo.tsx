'use client';
import { faLeaf, faWheatAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import { ScaledImg } from '~/components/ui/ScaledImg';
import { setImgScaled } from '~/store/navigationSlice';
import { useAppDispatch, useAppSelector } from '~/types/main';

interface Props {
  recipeInfo: Recipe;
  calories: string;
}

export const RecipesGenInfo = ({ recipeInfo, calories }: Props) => {
  const dispatch = useAppDispatch();
  const src =
    `https://spoonacular.com/recipeImages/${recipeInfo.id}-636x393.${recipeInfo.imageType}` ||
    `/images/no-food.png`;
  return (
    <div className='grid md:grid-cols-2 md:gap-4 align-middle'>
      <div>
        <button
          className='block mx-auto'
          onClick={() => dispatch(setImgScaled())}
        >
          <Image
            className='w-full cursor-pointer rounded-sm transition-all duration-200 hover:scale-110'
            src={src}
            height={500}
            width={500}
            alt='product'
          />
        </button>
        <a className='text-xs text-gray-400' href={recipeInfo.creditsText}>
          {recipeInfo.creditsText}
        </a>
      </div>
      <div>
        <div className='mb-3'>
          <h1 className='text-2xl'>{recipeInfo.title}</h1>
        </div>
        <div className='mt-4'>
          <ul className='grid grid-cols-2 md:grid-cols-3 justify-items-center font-light'>
            <li className='flex flex-col items-center'>
              <p className='font-bold'>{recipeInfo.readyInMinutes}</p>
              Minutes
            </li>
            <li className='flex flex-col items-center'>
              <p className='font-bold'>
                {recipeInfo.extendedIngredients.length}
              </p>
              Ingredients
            </li>
            <li className='flex flex-col items-center'>
              <p className='font-bold'>{calories}</p>
              Calories
            </li>
          </ul>
          <ul className='mt-4 flex items-center space-x-4 text-xl'>
            {!!recipeInfo.vegetarian && (
              <li className='text-mainColor'>
                <p>vegetarian</p>
                <FontAwesomeIcon icon={faLeaf} size='1x' />
              </li>
            )}

            {!!recipeInfo.glutenFree && (
              <li className='text-mainColor'>
                <p>gluten free</p>
                <FontAwesomeIcon icon={faWheatAlt} size='1x' />
              </li>
            )}
          </ul>
        </div>
      </div>
      <ScaledImg src={src} onClick={() => dispatch(setImgScaled)} />
    </div>
  );
};
