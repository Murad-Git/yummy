import { notFound } from 'next/navigation';
import { MainPage } from '~/pages/MainPage';
import { fetchRecipes } from '~/utils/fetch-helpers';

export default async function Home() {
  const heroData = await fetchRecipes({
    recipe: { items: `13`, isDynamic: false, random: true },
  });
  const scrollData = await fetchRecipes({
    recipe: {
      items: `5`,
      isDynamic: false,
      type: `type`,
      value: `main course`,
    },
  });
  if (!heroData || !scrollData) notFound();

  return (
    <main>
      <MainPage heroData={heroData.recipes} scrollData={scrollData.results} />
    </main>
  );
}
