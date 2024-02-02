// import { fetcher } from '~/utils/helpers';
'use client';
import Loading from '@/loading';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import Recipes from '~/components/recipes/Recipes';
import { NavButton } from '~/components/nav/NavButton';
import { cuisineConst } from '~/constant/mainConst';

interface Props {
  recipes: searchResult[];
}

export default function RecipesGroup({ recipes }: Props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(
    cuisineConst[0].cuisineType,
  );

  useEffect(() => {
    const dataFetch = async () => {
      try {
        setLoading(true);
        const data = await axios.post(`/api/hello`, { currentCategory });

        if (!data) return <p>No data was found</p>;
        setData(data.data.results);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error)
          console.error(`error in fetching data ${error.message}`);
        return <p>No data was found</p>;
      }
    };
    dataFetch();
  }, [currentCategory]);

  if (loading) return <Loading />;

  return (
    <div className='menu'>
      <h1 className='section-title'>cuisine</h1>
      <ul className='mb-10 flex flex-wrap items-center space-x-3 overflow-hidden'>
        {cuisineConst.map((category) => (
          <NavButton
            item={category.cuisineType}
            key={category.id}
            setCategories={setCurrentCategory}
            isActive={currentCategory === category.cuisineType}
          />
        ))}
      </ul>
      <Suspense fallback={<Loading />}>
        {!!data && <Recipes recipes={data} />}
      </Suspense>
    </div>
  );
}
