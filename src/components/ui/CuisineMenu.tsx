import { useState } from 'react';
import { cuisineConst } from '~/constant/mainConst';
interface Props {
  onCuisine: (cuisine: string) => void;
}

export const CuisineMenu = ({ onCuisine }: Props) => {
  const [currentCategory, setCurrentCuisine] = useState(
    cuisineConst[0].cuisineType
  );
  const handleCurrentCuisine = (cuisine: string) => {
    setCurrentCuisine(cuisine);
    onCuisine(cuisine);
  };
  // const onChangeCategory = (item: string) => {
  //   setCategories(item);
  // };
  return (
    <ul className='mb-10 md:flex flex-wrap items-center space-x-3 overflow-hidden hidden'>
      {cuisineConst.map((cuisine) => (
        <li
          key={cuisine.id}
          onClick={() => handleCurrentCuisine(cuisine.cuisineType)}
          className={`navLink ${
            currentCategory === cuisine.cuisineType && `link--active`
          } text-2xl font-semibold`}
        >
          {cuisine.cuisineType}
        </li>
      ))}
    </ul>
  );
  // return (
  //   <li
  //     onClick={() => onChangeCategory(item)}
  //     className={`navLink ${
  //       !!isActive && `link--active`
  //     } text-2xl font-semibold`}
  //   >
  //     {item}
  //   </li>
  // );
};
