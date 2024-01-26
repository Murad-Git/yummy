import { notFound } from 'next/navigation';
import { SearchPage } from '~/page/SearchPage';
import { fetchRecipes } from '~/utils/fetch-helpers';

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
  const { type, term } = searchParams;
  const data = await fetchRecipes({
    recipe: { type: type, value: term, items: '5', isDynamic: true },
  });
  if (!data) notFound();

  return (
    <main>
      <SearchPage params={term} recipes={data.results} type={type} />
    </main>
  );
}
