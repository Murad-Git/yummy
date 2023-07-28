import { faLeaf, faWheatAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { notFound } from 'next/navigation';

import Ingredients from '~/components/recipes/Ingredients';
import RecipeScroll from '~/components/recipes/RecipeScroll';
import ImageWithLike from '~/components/ui/ImageWithLike';
import { fetchRecipes, fetchSimilar, makeSlug } from '~/utils/helpers';

interface Props {
  params: {
    recipeId: string[];
  };
}

export default async function RecipePage({ params: { recipeId } }: Props) {
  //  const addLikedHandler = () => {
  //    dispatch(likedList(recipe));
  //  };
  const recipeInfo = await fetchRecipes({
    recipe: { id: recipeId[0], isDynamic: true },
  });
  if (recipeInfo?.code === 404 || !recipeInfo) {
    return notFound();
  }
  const stringEnd = recipeInfo.summary.indexOf(`calories`);
  const calories = recipeInfo.summary.substring(stringEnd - 4, stringEnd - 1);
  const similarRecipes = await fetchSimilar(recipeId[0]);
  return (
    <div>
      <section className='grid grid-cols-3 justify-items-center gap-6 border-b-2 pb-6 align-middle'>
        <div className='col-span-1'>
          <div className='mb-3'>
            <h1 className='text-3xl font-semibold'>{recipeInfo.title}</h1>
            <p className='text-xs text-gray-400'>{recipeInfo.creditsText}</p>
          </div>
          <div className=''>
            <ul className='grid grid-cols-3 justify-items-center text-lg font-light'>
              <li className='flex flex-col items-center'>
                <p className='text-2xl'>{recipeInfo.readyInMinutes}</p>
                Minutes
              </li>
              <li className='flex flex-col items-center'>
                <p className='text-2xl'>
                  {recipeInfo.extendedIngredients.length}
                </p>
                Ingredients
              </li>
              <li className='flex flex-col items-center'>
                <p className='text-2xl'>{calories}</p>
                Calories
              </li>
            </ul>
            <ul className='mt-4 flex items-center space-x-4 text-xl'>
              {!!recipeInfo.vegetarian && (
                <li>
                  <FontAwesomeIcon
                    icon={faLeaf}
                    className='text-mainColor'
                    size='1x'
                  />
                </li>
              )}

              {!!recipeInfo.glutenFree && (
                <li>
                  <FontAwesomeIcon
                    icon={faWheatAlt}
                    className='text-mainColor'
                    size='1x'
                  />
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='col-span-2'>
          <ImageWithLike
            recipe={recipeInfo}
            link={makeSlug(recipeInfo.id, recipeInfo.title)}
          />
          {/* <Image
              src='https://spoonacular.com/recipeImages/716429-556x370.jpg'
              alt='recipe'
              width={500}
              height={500}
            /> */}
        </div>
      </section>
      <section className='mt-6'>
        <h2 className='text-3xl font-semibold'>Ingredients</h2>
        <Ingredients ingredients={recipeInfo.extendedIngredients} />
      </section>
      {similarRecipes.length > 0 ? (
        <RecipeScroll recipes={similarRecipes} title='You may also like' />
      ) : (
        ''
      )}

      {/* <h1>{recipeId[0]}</h1>
      <h1>{recipeId[1]}</h1> */}
    </div>
  );
}
