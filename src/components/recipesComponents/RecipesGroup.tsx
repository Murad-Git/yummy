'use client';

import { useState } from 'react';
import useSWR, { Key } from 'swr';

import Loading from '@/loading';

import Recipes from '~/components/recipesComponents/Recipes';
import { NavLink } from '~/components/ui/NavLink';
import {
  recipeGroupItems as items,
  recipesMainPage,
} from '~/constant/mainRecipesTypes';
import { fetcher } from '~/utils/helpers';

export default function RecipesGroup() {
  const [currentCategory, setCurrentCategory] = useState(
    recipesMainPage[0].mealType
  );
  const keyLink: Key = `https://api.spoonacular.com/recipes/complexSearch?cuisine=${currentCategory}&number=${items}&apiKey=${process.env.API_KEY}`;

  const { data, error, isLoading } = useSWR<getResponse, Error>(
    keyLink,
    fetcher
  );
  if (!data || isLoading) return <Loading />;
  if (error) return <p>An error occured</p>;

  console.log(`data from SWR`);
  console.log(data);

  return (
    <section>
      <div className='menu'>
        <ul className='mb-10 flex flex-wrap items-center space-x-3 overflow-hidden'>
          {recipesMainPage.map((category) => (
            <NavLink
              key={category.id}
              category={category.mealType}
              isActive={currentCategory === category.mealType}
              setCategories={setCurrentCategory}
            />
          ))}
        </ul>
        <Recipes recipes={data?.data.results} />
      </div>
    </section>
  );
}
