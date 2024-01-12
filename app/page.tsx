import { notFound } from 'next/navigation';
import { MainPage } from '~/page/MainPage';
import { fetchRecipes } from '~/utils/fetch-helpers';

interface HeroProps {
  recipes: Recipe[];
}
interface ScrollProps {
  results: Recipe[];
}

const getRecipes = async () => {
  const heroData: HeroProps = await fetchRecipes({
    recipe: { items: `13`, isDynamic: false, random: true },
  });
  const scrollData: ScrollProps = await fetchRecipes({
    recipe: {
      items: `5`,
      isDynamic: false,
      type: `type`,
      value: `main course`,
    },
  });

  return {
    heroData,
    scrollData,
  };
};

export default async function Home() {
  const { heroData, scrollData } = await getRecipes();

  if (heroData.recipes.length === 0 || scrollData.results.length === 0)
    notFound();
  return (
    <main>
      <MainPage heroData={heroData.recipes} scrollData={scrollData.results} />
    </main>
  );
}
