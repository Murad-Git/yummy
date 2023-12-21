import Loading from '@/loading';
import { Suspense } from 'react';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import HeroRecipes from '~/components/recipes/HeroRecipes';
import Recipes from '~/components/recipes/Recipes';
import RecipeScroll from '~/components/recipes/RecipeScroll';
import RecipesCuisine from '~/components/recipes/RecipesCuisine';
import { Filler } from '~/components/ui/Filler';

interface Props {
  heroData: Recipe[];
  scrollData: Recipe[];
}

export const MainPage = ({ heroData, scrollData }: Props) => {
  return (
    <>
      <HeroImg title='simple and tasty recipes' />
      <Container>
        <section className='py-12'>
          <Suspense fallback={<Loading />}>
            <HeroRecipes
              heroRecipes={heroData.slice(0, 5)}
              // eslint-disable-next-line prettier/prettier
              title='What&#39;s new on our table'
            />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Recipes
              sectionTitle='Featured Today'
              recipes={heroData.slice(6, 13)}
            />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <RecipeScroll recipes={scrollData} title='Ideas for Dinner' />
          </Suspense>
          <RecipesCuisine />
        </section>
      </Container>
      <Filler />
    </>
  );
};
