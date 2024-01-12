'use client';

import Ingredient from '~/components/recipes/Ingredient';

interface Props {
  ingredients: Ingredient[];
  servings: number;
}

export default function Ingredients({ ingredients, servings }: Props) {
  if (!ingredients.length) return <p>No ingredients</p>;

  const uniqeIngeredients = ingredients.filter(
    (elem, index, self) =>
      self.findIndex((t) => {
        return t.nameClean === elem.nameClean;
      }) === index,
  );
  return (
    <div className='bg-black py-10 px-6 text-white relative z-30 -mt-24'>
      <div className='mb-8 pb-8 border-b space-y-2 border-gray-500'>
        <h3 className='text-3xl font-semibold'>Ingredients:</h3>
        <h5 className='text-sm'>{servings} Servings</h5>
      </div>
      <ul>
        {!!uniqeIngeredients &&
          uniqeIngeredients.map((ingredient) => (
            <Ingredient key={ingredient.id} ingredient={ingredient} />
          ))}
      </ul>
    </div>
  );
}
