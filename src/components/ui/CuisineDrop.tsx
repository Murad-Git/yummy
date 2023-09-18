import { ChangeEvent } from 'react';
import { cuisineConst } from '~/constant/mainConst';

interface Props {
  onCuisine: (cuisine: string) => void;
}

export const CuisineDrop = ({ onCuisine }: Props) => {
  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCuisine(e.target.value);
    // switch (e.target.value) {
    //   case 'recipe':
    //     console.log('Search...');
    //     break;
    //   case 'ingredients':
    //     console.log('apples, flour, sugar');
    //     break;
    //   case 'all':
    //     console.log('Recipes, articles, videos, ingredients, etc...');
    //     break;
    //   default:
    //     console.log('Search...');
    // }
  };
  return (
    <div className='md:hidden mb-4 mt-2'>
      <label htmlFor='cuisine-select' />
      <select
        className='h-10 rounded-lg border-2 border-gray-300 bg-gray-100 px-3 md:px-5 pt-2 text-sm focus-within:outline-none focus:border-mainColor focus:outline-none focus-visible:outline-none'
        id='cuisine-select'
        name='cuisine-select'
        onChange={handleOptionChange}
      >
        {cuisineConst.map((cuisine) => (
          <option
            className='capitalize'
            key={cuisine.id}
            value={cuisine.cuisineType}
          >
            {cuisine.cuisineType}
          </option>
        ))}
        {/* <option value='recipe'>recipe</option>
        <option value='all'>all</option> */}
      </select>
    </div>
  );
};
