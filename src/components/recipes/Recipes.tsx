'use client';
import Recipe from '~/components/recipes/Recipe';
import { More } from '~/components/ui/More';

interface Props {
  recipes: Recipe[] | searchResult[];
  sectionTitle?: string;
  items?: 'three' | 'four' | 'five' | 'six';
  more?: boolean;
}
export default function Recipes({
  sectionTitle,
  items = `three`,
  recipes,
  more = false,
}: Props) {
  return (
    <section className='my-10'>
      {!!sectionTitle && (
        <h1 className='section-title text-xl md:text-inherit'>
          {sectionTitle}
        </h1>
      )}
      <div
        className={`px-2 grid ${
          items === `five` ? `grid-cols-fluid-five` : `grid-cols-fluid-four`
        }  gap-6`}
      >
        {!!recipes &&
          recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
      </div>
    </section>
  );
}
