interface Props {
  id?: string;
  items?: string;
  mealType?: string;
  isDynamic?: boolean;
}

export const makeSlug = (id: number, title: string) => {
  const formatTitle = title
    .split(` `)
    .map((letter) => letter.toLocaleLowerCase())
    .join(`-`);

  // const link = `/recipes/${id}/${url.split('/').pop() || formatTitle}`;
  const link = `/recipes/${id}/${formatTitle}`;
  return link;
};

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const fetcher = (url: string) => fetch(url).then((res) => res.json());
// export const fetcher = async (url: string) => {
//   const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const data = await response.json();
//   return data;
// };
// export const fetcher = async (items: string, cuisine: string) => {
//   console.log(items, cuisine);
//   const response = await fetch(
//     `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=${items}&apiKey=${process.env.API_KEY}`,
//     {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   );
//   const data = await response.json();
//   return data;
// };
// export const SWRFetcher = async ({ items, cuisine }: PropsSWR) => {
//   const { data, error, isLoading } = useSWR<getResponse, Error>(
//     cuisine,
//   );
//   return {
//     error,
//     data: data,
//     isLoading,
//   };
// };

export const fetchRecipes = async ({
  id,
  items,
  isDynamic,
  mealType,
}: Props) => {
  try {
    if (id) {
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`,
        {
          method: `GET`,
          headers: {
            'Content-Type': `application/json`,
          },
          cache: isDynamic ? `no-cache` : `default`,
          next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
        }
      );
      const response = await request.json();
      return response;
    }
    // const randomDishes = `https://api.spoonacular.com/recipes/random?number=${items}&apiKey=${process.env.API_KEY}`;
    // const mainCourse = `https://api.spoonacular.com/recipes/complexSearch?type=main course&number=${items}&apiKey=${process.env.API_KEY}`;
    // const american = `https://api.spoonacular.com/recipes/complexSearch?cuisine=American&number=${items}&apiKey=${process.env.API_KEY}`;

    const request = await fetch(
      `https://api.spoonacular.com/recipes/${
        mealType ? `complexSearch?type=` + mealType : `random`
      }?number=${items}&apiKey=${process.env.API_KEY}`,
      {
        method: `GET`,
        headers: {
          'Content-Type': `application/json`,
        },
        cache: isDynamic ? `no-cache` : `default`,
        next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
      }
    );
    const response = await request.json();
    return response;
    // return {
    //   random,

    // }
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }

  // try {
  //   if (id) {
  //     const request = await fetch(
  //       `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`,
  //       {
  //         cache: isDynamic ? 'no-cache' : 'default',
  //         next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
  //       }
  //     );
  //     const response = await request.json();
  //     return response;
  //   } else {
  //     const request = await fetch(
  //       `https://api.spoonacular.com/recipes/random?number=${items}&apiKey=${process.env.API_KEY}`,
  //       {
  //         cache: isDynamic ? 'no-cache' : 'default',
  //         next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
  //       }
  //     );
  //     const response = await request.json();
  //     console.log(response);
  //     return response;
  //   }
  // } catch (error) {
  //   if (error instanceof Error) throw new Error(error.message);
  // }
};
