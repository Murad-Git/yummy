import { faLeaf, faWheatAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import xss from 'xss';
import Container from '~/components/layout/Container';

import Ingredients from '~/components/recipes/Ingredients';
import { RecipeHeader } from '~/components/recipes/RecipeHeader';
import { Similar } from '~/components/recipes/Similar';
import { Comments } from '~/components/ui/Comments';
import RecipeImg from '~/components/ui/RecipeImg';
import { recipe as recipeInfo, recipes } from '~/constant/recipes';
import { makeSlug } from '~/utils/fetch-helpers';

interface Props {
  params: {
    recipeId: string[];
  };
}

export default async function RecipePage({ params: { recipeId } }: Props) {
  const stringEnd = recipeInfo.summary.indexOf(`calories`);
  const calories = recipeInfo.summary.substring(stringEnd - 4, stringEnd - 1);

  const description = {
    __html: `summary` in recipeInfo ? xss(recipeInfo.summary) : '',
  };
  return (
    <div>
      <RecipeHeader recipeName={recipeInfo.title} />
      <Container className='mb-20'>
        <section className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-3 md:gap-6 border-b-2 border-gray-400 pb-6 align-middle mt-8'>
          {/* recipe and description */}
          <div className='col-span-2'>
            {/* img and title */}
            <div className='grid grid-cols-2 gap-4 align-middle'>
              <div>
                <RecipeImg
                  recipe={recipeInfo}
                  link={makeSlug(recipeInfo.id, recipeInfo.title)}
                />
                <a
                  className='text-xs text-gray-400'
                  href={recipeInfo.creditsText}
                >
                  {recipeInfo.creditsText}
                </a>
              </div>
              <div>
                <div className='mb-3'>
                  <h1 className='text-2xl'>{recipeInfo.title}</h1>
                </div>
                <div className='mt-4'>
                  <ul className='grid grid-cols-3 justify-items-center font-light'>
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
            </div>
            <div className='mt-8'>
              <p
                className='inline-block text-gray-700 leading-[2] px-2 text-justify text-md'
                dangerouslySetInnerHTML={description}
              ></p>
            </div>
            <div className='mt-8'>
              <h1 className='font-semibold text-2xl mb-6 italic'>
                How to cook:
              </h1>
              <ol className='space-y-2'>
                {recipeInfo.analyzedInstructions[0].steps.map(
                  (recipe, index) => (
                    <li className='px-4'>
                      <span className='mr-3 inline'>{index + 1}.</span>
                      <p className='text-gray-700 leading-[2.5] px-2 text-justify text-md inline'>
                        {recipe.step}
                      </p>
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>

          {/* ingredients and similar recipes */}
          <div className='col-span-1'>
            <Ingredients
              ingredients={recipeInfo.extendedIngredients}
              servings={recipeInfo.servings}
            />
            <Similar title='Similar recipes:' recipes={recipes} />
          </div>
        </section>
        <section className='mt-6'></section>
        <Comments recipeId={recipeInfo.id} />
      </Container>
      <div className='mt-5 relative'>
        <div className='background' />
        <div className='absolute top-[20%] right-[30%] mx-auto max-w-[40%] text-white'>
          <div className='text-center space-y-7 background-text'>
            <h6>fresh meat and fish</h6>
            <h2>
              High quality <br />
              of meal service
            </h2>
            <p>
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus, faucibus lorem eget, egestas eros.
            </p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
