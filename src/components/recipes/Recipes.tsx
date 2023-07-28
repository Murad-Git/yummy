import Recipe from '~/components/recipes/Recipe';
import { More } from '~/components/ui/More';

interface Props {
  recipes: Recipe[] | searchResult[];
  sectionTitle?: string;
  items?: 'three' | 'four' | 'five' | 'six';
}
export default function Recipes({
  sectionTitle,
  items = `three`,
  recipes,
}: Props) {
  // const { recipes } = recipesData;

  return (
    <section className='py-4'>
      {!!sectionTitle && <h1 className='section-title'>{sectionTitle}</h1>}
      {/* <div className='grid grid-cols-fluid- gap-6'> */}
      <div
        className={` grid ${
          items === `five` ? `grid-cols-fluid-five` : `grid-cols-fluid-four`
        }  gap-6`}
      >
        <>
          {!!recipes &&
            recipes.map((recipe) => <Recipe key={recipe.id} recipe={recipe} />)}
          <More />
        </>
      </div>
    </section>
  );
}