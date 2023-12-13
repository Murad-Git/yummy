'use client';
import Loading from '@/loading';
import { Suspense, useState } from 'react';
import Recipes from '~/components/recipes/Recipes';
import { CuisineDrop } from '~/components/ui/CuisineDrop';
import { CuisineMenu } from '~/components/ui/CuisineMenu';
import { cuisineConst } from '~/constant/mainConst';
import { recipes as constantRecipes } from '~/constant/recipes';

interface Props {
  recipes: searchResult[];
}

export default function RecipesCuisine({ recipes }: Props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [currentCuisine, setCurrentCuisine] = useState(
    cuisineConst[0].cuisineType,
  );

  const cuisineHandle = (cuisine: string) => {
    setCurrentCuisine(cuisine);
  };
  // useEffect(() => {
  //   const dataFetch = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await axios.post('/api/hello', { currentCuisine });

  //       if (!data) return <p>No data was found</p>;
  //       setData(data.data.results);
  //       setLoading(false);
  //     } catch (error) {
  //       if (error instanceof Error)
  //         console.error(`error in fetching data ${error.message}`);
  //       return <p>No data was found</p>;
  //     }
  //   };
  //   dataFetch();
  // }, [currentCuisine]);

  if (loading) return <Loading />;

  return (
    <div className='menu'>
      <h1 className='section-title'>cuisine</h1>
      <CuisineMenu onCuisine={cuisineHandle} />
      <CuisineDrop onCuisine={cuisineHandle} />
      {/* <ul className='mb-10 flex flex-wrap items-center space-x-3 overflow-hidden'>
        {recipesMainPage2.map((category) => (
          <CuisineMenu
            item={category}
            key={category}
            setCategories={setcurrentCuisine}
            isActive={currentCuisine === category}
          />
        ))}
      </ul> */}
      <Suspense fallback={<Loading />}>
        <Recipes recipes={constantRecipes} />
        {/* {!!data && <Recipes recipes={data} />} */}
      </Suspense>
    </div>
  );
}
