import { Suspense } from 'react';

import Loading from '@/loading';

import Container from '~/components/layout/Container';
import HeroRecipes from '~/components/recipesComponents/HeroRecipes';
import Recipes from '~/components/recipesComponents/Recipes';
import RecipeScroll from '~/components/recipesComponents/RecipeScroll';
import RecipesGroup from '~/components/recipesComponents/RecipesGroup';
import Divider from '~/components/ui/Divider';
import { fetchRecipes } from '~/utils/helpers';

export default async function HomePage() {
  const data = await fetchRecipes({ items: `13`, isDynamic: false });
  const mealData = await fetchRecipes({
    items: `5`,
    isDynamic: false,
    mealType: `main course`,
  });
  return (
    <main className='background-pattern'>
      <section className='py-12'>
        <Container>
          <HeroRecipes heroRecipes={data.recipes.slice(0, 5)} />
          <Suspense fallback={<Loading />}>
            <Recipes
              sectionTitle='Featured Today'
              recipes={data.recipes.slice(6, 13)}
            />
          </Suspense>
        </Container>
        <Divider
          src='/images/divider-img-2.jpg'
          alt='divider'
          className='h-80 w-screen object-cover'
        />
        <Container>
          <RecipeScroll recipes={mealData.results} />
          <RecipesGroup />
        </Container>
      </section>
    </main>
  );
}
