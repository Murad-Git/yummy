import { faLeaf, faWheatAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  recipeInfo: Recipe;
  calories: string;
}

export const RecipesGenInfo = ({ recipeInfo, calories }: Props) => {
  return (
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
            <p className='font-bold'>{recipeInfo.extendedIngredients.length}</p>
            Ingredients
          </li>
          <li className='flex flex-col items-center'>
            <p className='font-bold'>{calories}</p>
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
  );
};
