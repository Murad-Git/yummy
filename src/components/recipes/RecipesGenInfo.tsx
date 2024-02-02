'use client';
import { faLeaf, faWheatAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';
import { ScaledImg } from '~/components/ui/ScaledImg';

interface Props {
  recipeInfo: Recipe;
  calories: string;
}

export const RecipesGenInfo = ({ recipeInfo, calories }: Props) => {
  const [scaleImg, setScaleImg] = useState(false);

  const src = `https://spoonacular.com/recipeImages/${recipeInfo.id}-636x393.${recipeInfo.imageType}`;
  return (
    <div className='grid grid-cols-2 gap-4 align-middle'>
      <div>
        <button className='block' onClick={() => setScaleImg((prev) => !prev)}>
          <Image
            className='w-full cursor-pointer rounded-sm transition-all duration-200 hover:scale-110'
            src={src || `/images/no-food.png`}
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
      <ScaledImg src={src} scaleImg={scaleImg} onClick={setScaleImg} />
    </div>
  );
};
