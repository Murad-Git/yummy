'use client';

import Ingredient from '~/components/recipes/Ingredient';

interface Props {
  ingredients: Ingredient[];
}

export default function Ingredients({ ingredients }: Props) {
  return (
    <div>
      <h3 className='text-md my-2'>2 Servings</h3>
      <ul>
        {!!ingredients &&
          ingredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient} />
          ))}
      </ul>
    </div>
  );
}
