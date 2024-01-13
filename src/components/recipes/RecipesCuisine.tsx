'use client';
import Loading from '@/loading';
import { Suspense, useEffect, useState } from 'react';
import Recipes from '~/components/recipes/Recipes';
import { CuisineDrop } from '~/components/ui/dropdowns/CuisineDrop';
import { CuisineMenu } from '~/components/ui/dropdowns/CuisineMenu';
import { cuisineConst } from '~/constant/mainConst';

interface Props {
  searchCuisin: (cuisin: string) => Promise<Recipe[] | null>;
}

export default function RecipesCuisine({ searchCuisin }: Props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Recipe[] | null>(null);
  const [currentCuisine, setCurrentCuisine] = useState(
    cuisineConst[0].cuisineType,
  );

  const cuisineHandle = (cuisine: string) => {
    setCurrentCuisine(cuisine);
  };

  useEffect(() => {
    setLoading(true);
    searchCuisin(currentCuisine).then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [currentCuisine]);
  if (data === null) return <p>No Cuisine data</p>;
  return (
    <div className='menu'>
      <h1 className='section-title'>cuisine</h1>
      <CuisineMenu onCuisine={cuisineHandle} />
      <CuisineDrop onCuisine={cuisineHandle} />
      {!!loading && <Loading />}
      {!!data && <Recipes recipes={data} />}
    </div>
  );
}
