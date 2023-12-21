'use client';
import Loading from '@/loading';
import { Suspense, useEffect, useState } from 'react';
import Recipes from '~/components/recipes/Recipes';
import { CuisineDrop } from '~/components/ui/dropdowns/CuisineDrop';
import { CuisineMenu } from '~/components/ui/dropdowns/CuisineMenu';
import { cuisineConst } from '~/constant/mainConst';

export default function RecipesCuisine() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentCuisine, setCurrentCuisine] = useState(
    cuisineConst[0].cuisineType,
  );

  const cuisineHandle = (cuisine: string) => {
    setCurrentCuisine(cuisine);
  };

  useEffect(() => {
    const abortController = new AbortController();
    try {
      setLoading(true);
      fetch(`/api/hello`, {
        signal: abortController.signal,
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({ currentCuisine }),
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data.results);
          setLoading(false);
        });
      return () => abortController.abort();
    } catch (error) {
      if (error instanceof Error) {
        console.error(`error in fetching data ${error.message}`);
      }
    }
  }, [currentCuisine]);

  if (!data) return <p>No Cuisine data</p>;
  return (
    <div className='menu'>
      <h1 className='section-title'>cuisine</h1>
      <CuisineMenu onCuisine={cuisineHandle} />
      <CuisineDrop onCuisine={cuisineHandle} />
      <Suspense fallback={<Loading />}>
        {!!loading && <Loading />}
        {!!data && <Recipes recipes={data} />}
      </Suspense>
    </div>
  );
}
