import { notFound } from 'next/navigation';
import { CategoryPage } from '~/pages/CategoryPage';
import { searchRec } from '~/utils/fetch-helpers';

interface Props {
  params: {
    category: string;
  };
}

export default async function Category({ params: { category } }: Props) {
  if (
    (category && Object.entries(category).length === 0) ||
    !category ||
    (category && !category)
  )
    return notFound();
  const data = await searchRec(undefined, category);
  if (!data) notFound();
  const formCategory = category[0].replace(/[^a-zA-Z ]/g, ``);

  return (
    <section>
      <CategoryPage
        category={category}
        recipes={data.results}
        formCategory={formCategory}
      />
    </section>
  );
}
