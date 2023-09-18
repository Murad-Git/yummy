import Loading from '@/loading';
import { Suspense } from 'react';
import { HeroNav } from '~/components/header/HeroNav';
import Container from '~/components/layout/Container';
import HeroRecipes from '~/components/recipes/HeroRecipes';
import Recipes from '~/components/recipes/Recipes';
import RecipeScroll from '~/components/recipes/RecipeScroll';
import RecipesCuisine from '~/components/recipes/RecipesCuisine';
import { recipes } from '~/constant/recipes';

interface Props {
  params: string;
}

export default async function HomePage() {
  // console.log(user);
  // const heroData = await fetchRecipes({
  //   recipe: { items: '13', isDynamic: false, random: true },
  // });
  // const scrollData = await fetchRecipes({
  //   recipe: {
  //     items: '5',
  //     isDynamic: false,
  //     type: 'type',
  //     value: 'main course',
  //   },
  // });
  // const groupData = await fetchRecipes({
  //   recipe: { items: '1', isDynamic: false, type: 'type', value: 'american' },
  // });
  return (
    <main>
      <HeroNav />
      <Container>
        <section className='py-12'>
          <Suspense fallback={<Loading />}>
            <HeroRecipes
              heroRecipes={recipes.slice(0, 5)}
              title='What&#39;s new on our table'
            />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Recipes sectionTitle='Featured Today' recipes={recipes} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <RecipeScroll recipes={recipes} title='Ideas for Dinner' />
          </Suspense>
          <RecipesCuisine recipes={recipes} />
        </section>
      </Container>
      {/* <main className='background-pattern'> */}

      {/* <Suspense fallback={<Loading />}>
            <HeroRecipes
              heroRecipes={!!heroData && heroData.recipes.slice(0, 5)}
            />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Recipes
              sectionTitle='Featured Today'
              recipes={heroData.recipes.slice(6, 13)}
            />
          </Suspense> */}
      {/* <Divider
          src='/images/divider-img-2.jpg'
          alt='divider'
          className='h-80 w-screen object-cover'
        /> */}
      {/* <Container> */}

      {/* <RecipeScroll recipes={scrollData.results} title='Ideas for Dinner' /> */}

      {/* <p>{user || 'no user'}</p> */}
      {/* <RecipesCuisine recipes={groupData.results} /> */}
    </main>
  );
}
