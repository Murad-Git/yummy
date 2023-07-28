// import { fetcher } from '~/utils/helpers';
'use client';
import Loading from '@/loading';
import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import Recipes from '~/components/recipes/Recipes';
import { NavButton } from '~/components/ui/NavButton';
import { recipesMainPage } from '~/constant/mainConst';
import { recipesMainPage2 } from '~/constant/typesConts';

interface Props {
  recipes: searchResult[];
}

export default function RecipesGroup({ recipes }: Props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(
    recipesMainPage[0].mealType
  );

  useEffect(() => {
    const dataFetch = async () => {
      try {
        setLoading(true);
        const data = await axios.post('/api/hello', { currentCategory });

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
        {recipesMainPage2.map((category) => (
          <NavButton
            item={category}
            key={category}
            setCategories={setCurrentCategory}
            isActive={currentCategory === category}
          />
        ))}
      </ul>
      <Suspense fallback={<Loading />}>
        {!!data && <Recipes recipes={data} />}
      </Suspense>
    </div>
  );
}
