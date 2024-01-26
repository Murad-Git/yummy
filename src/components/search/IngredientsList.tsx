import React from 'react';
import { IngredientList } from '~/components/search/IngredientList';

interface Props {
  ingredients: ingredientProps[];
  sectionTitle?: string;
}

export const IngredientsList = ({ sectionTitle, ingredients }: Props) => {
  return (
    <section className='my-10'>
      {!!sectionTitle && <h1 className='section-title'>{sectionTitle}</h1>}
      <div
        className={`px-2 grid grid-cols-fluid-four
         gap-6`}
      >
        <>
          {!!ingredients &&
            ingredients.map((recipe) => (
              <IngredientList key={recipe.id} ingredient={recipe} />
            ))}
        </>
      </div>
    </section>
  );
};
