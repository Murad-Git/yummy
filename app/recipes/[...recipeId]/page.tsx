import xss from 'xss';

import { notFound } from 'next/navigation';
import { RecipePage } from '~/pages/RecipePage';
import { fetchRecipes, fetchSimilar } from '~/utils/fetch-helpers';

interface Props {
  params: {
    recipeId: string[];
  };
}

export default async function Recipe({ params: { recipeId } }: Props) {
  const recipeInfo = await fetchRecipes({
    recipe: { id: recipeId[0], isDynamic: true },
  });
  const similar = await fetchSimilar(recipeId[0]);
  if (recipeInfo?.code === 404) {
    return notFound();
  }
  const stringEnd = recipeInfo.summary.indexOf(`calories`);
  const calories = recipeInfo.summary.substring(stringEnd - 4, stringEnd - 1);

  const description = {
    __html: `summary` in recipeInfo ? xss(recipeInfo.summary) : ``,
  };
  return (
    <main>
      <RecipePage
        recipeInfo={recipeInfo}
        similar={similar}
        calories={calories}
        description={description}
      />
    </main>
  );
}
