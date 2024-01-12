import { notFound } from 'next/navigation';
import { SearchPage } from '~/page/SearchPage';
import { searchRec } from '~/utils/fetch-helpers';

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
  const data = await searchRec(searchParams?.term, searchParams.type);
  if (!data) notFound();

  return (
    <main>
      <SearchPage params={searchParams.term} recipes={data.results} />
    </main>
  );
}
