import { notFound } from 'next/navigation';
import Recipes from '~/components/recipes/Recipes';
import { searchRec } from '~/utils/helpers';

interface Props {
  searchParams?: { term: string; type: string };
}
export default async function SearchPage({ searchParams }: Props) {
  console.log('searchParams');
  console.log(searchParams);
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams ||
    (searchParams && !searchParams.term)
  )
    return notFound();
  const data = await searchRec(searchParams?.term, searchParams.type);
  if (!data) notFound();
  console.log('recipes from search');
  console.log(data);

  return (
    <div>
      <Recipes
        recipes={data.results || data}
        items='four'
        sectionTitle={`Search results for ${searchParams?.term}`}
      />
    </div>
  );
}
