import { notFound } from 'next/navigation';

import Recipes from '~/components/recipesComponents/Recipes';

interface Props {
  searchParams?: { term: string };
}
export default function SearchPage({ searchParams }: Props) {
  console.log(searchParams?.term);
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams ||
    (searchParams && !searchParams.term)
  )
    return notFound();
  return (
    <div>
      <h1>Search results for {searchParams?.term}</h1>
      <Recipes />
    </div>
  );
}
