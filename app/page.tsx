import Loading from '@/loading';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Suspense } from 'react';
import { Database } from '~/types/database';

interface Props {
  params: string;
}

export default async function HomePage() {
  const supabase = createServerComponentClient<Database>({ cookies });
  console.log('from Page.tsx, user:');
  console.log(await supabase.auth.getUser());

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
      {/* <main className='background-pattern'> */}
      <section className='py-12'>
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
        <Suspense fallback={<Loading />}>
          {/* <RecipeScroll recipes={scrollData.results} title='Ideas for Dinner' /> */}
        </Suspense>
        {/* <RecipesGroup recipes={groupData.results} /> */}
      </section>
    </main>
  );
}
