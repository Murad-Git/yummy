import { notFound } from 'next/navigation';
import Recipes from '~/components/recipes/Recipes';
import { searchRec } from '~/utils/helpers';

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params: { category } }: Props) {
  if (
    (category && Object.entries(category).length === 0) ||
    !category ||
    (category && !category)
  )
    return notFound();

  const data = await searchRec(undefined, category);
  if (!data) notFound();
  // console.log(typeof category);
  // console.log(category[0]);
  const formCategory = category[0].replace(/[^a-zA-Z ]/g, '');

  return (
    <div>
      <Recipes
        recipes={data.results}
        items='four'
        sectionTitle={`Search results for ${formCategory}`}
      />
    </div>
  );
}
