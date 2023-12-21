'use client';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
  ingredient: Ingredient;
}

export default function Ingredient({ ingredient }: Props) {
  const [checked, setChecked] = useState(false);
  const [isHovering, setIsHovering] = useState({ value: false, id: `` });
  const handleHover = (id: string) => {
    setIsHovering({ value: true, id });
  };
  const handleHoverExit = () => {
    setIsHovering({ value: false, id: `` });
  };
  return (
    <li
      onMouseEnter={() => handleHover(ingredient.image)}
      onMouseOut={handleHoverExit}
      onClick={() => setChecked((prev) => !prev)}
      key={ingredient.id}
      className='cursor-pointer space-y-2 text-xs'
    >
      <FontAwesomeIcon
        icon={checked ? faCircleCheck : faCircle}
        className='mr-2 text-mainColor'
        size='1x'
      />
      <p className={`inline-block font-light ${!!checked && `line-through`}`}>
        <span>{ingredient.original}</span>
      </p>
      {!!isHovering.value && (
        <Image
          className='w-32 absolute top-0 object-cover'
          src={
            `https://spoonacular.com/cdn/ingredients_250x250/${isHovering.id}` ||
            `/images/no-food.png`
          }
          height={500}
          width={500}
          alt='ingredient'
        />
      )}
    </li>
  );
}
