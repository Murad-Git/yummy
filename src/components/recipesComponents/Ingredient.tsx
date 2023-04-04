'use client';
import { faCircle, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface Props {
  ingredient: Ingredient;
}

export default function Ingredient({ ingredient }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <li key={ingredient.id} className='cursor-pointer space-y-4'>
      <FontAwesomeIcon
        onClick={() => setChecked((prev) => !prev)}
        icon={checked ? faCircleCheck : faCircle}
        className='mr-2 text-mainColor'
        size='1x'
      />
      <p
        className={`inline-block text-xl font-light ${
          !!checked && `line-through`
        }`}
      >
        {ingredient.measures.metric.amount}
        {` `}
        {ingredient.measures.metric.unitShort}
        {` `}
        <span className='font-bold'>{ingredient.originalName}</span>
      </p>
    </li>
  );
}
