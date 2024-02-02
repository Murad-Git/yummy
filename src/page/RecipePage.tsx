import Container from '~/components/layout/Container';

import Ingredients from '~/components/recipes/Ingredients';
import { RecipeHeader } from '~/components/recipes/RecipeHeader';
import { RecipesGenInfo } from '~/components/recipes/RecipesGenInfo';
import { Similar } from '~/components/recipes/Similar';
import { CommentsHandler } from '~/components/ui/comments/CommentsHandler';
import { Filler } from '~/components/ui/Filler';

interface Props {
  recipeInfo: Recipe;
  similar: searchResult[];
  calories: string;
  description: {
    __html: string;
  };
}

export const RecipePage = ({
  recipeInfo,
  similar,
  calories,
  description,
}: Props) => {
  return (
    <>
      <RecipeHeader
        recipeName={recipeInfo.title ? recipeInfo.title : 'No title'}
      />
      <Container className='mb-20'>
        <section className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-3 md:gap-6 border-b-2 border-gray-400 pb-6 align-middle mt-8 relative'>
          {/* recipe and description */}
          <div className='col-span-2'>
            {/* img and title */}
            <RecipesGenInfo recipeInfo={recipeInfo} calories={calories} />
            <div className='mt-8'>
              <p
                className='inline-block text-gray-700 leading-[2] px-2 text-justify text-md'
                dangerouslySetInnerHTML={description}
              />
            </div>
            <div className='mt-8'>
              <h1 className='font-semibold text-2xl mb-6 italic'>
                How to cook:
              </h1>
              <ol className='space-y-2'>
                {recipeInfo.analyzedInstructions.length > 0 &&
                  recipeInfo.analyzedInstructions[0].steps.map(
                    (recipe, index: number) => (
                      <li key={index} className='px-4'>
                        <span className='mr-3 inline'>{index + 1}.</span>
                        <p className='text-gray-700 leading-[2.5] px-2 text-justify text-md inline'>
                          {recipe.step}
                        </p>
                      </li>
                    ),
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
            <Similar title='Similar recipes:' recipes={similar} />
          </div>
        </section>
        <section className='mt-6'>
          <CommentsHandler
            pageId={recipeInfo.id.toString()}
            commentsType='recipe_comments'
          />
        </section>
      </Container>
      <Filler />
    </>
  );
};
