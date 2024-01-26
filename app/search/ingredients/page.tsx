import { notFound } from 'next/navigation';
import React from 'react';
import { IngredientsPage } from '~/page/IngredientsPage';
import { fetchByIngredients } from '~/utils/fetch-helpers';

interface Props {
  searchParams?: { term: string };
}

export default async function Ingredients({ searchParams }: Props) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams ||
    (searchParams && !searchParams.term)
  )
    return notFound();
  const { term } = searchParams;
  const results = await fetchByIngredients(term);

  return (
    <main>
      <IngredientsPage ingredients={results} params={term} />
    </main>
  );
}
