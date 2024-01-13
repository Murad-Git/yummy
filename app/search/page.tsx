import { notFound } from 'next/navigation';
import { SearchPage } from '~/page/SearchPage';
import { fetchRecipes, searchRec } from '~/utils/fetch-helpers';

interface Props {
  searchParams?: { term: string; type: string };
}
export default async function Search({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams ||
    (searchParams && !searchParams.term)
  )
    return notFound();
  // const recipeType = searchParams.type === 'recipe' ? 'query' : 'cuisine';
  const data = await fetchRecipes({
    recipe: { type: 'query', value: searchParams?.term, items: '5' },
  });
  if (!data) notFound();

  return (
    <main>
      <SearchPage params={searchParams.term} recipes={data.results} />
    </main>
  );
}
