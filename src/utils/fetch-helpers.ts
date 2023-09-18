import axios from 'axios';
import { recipeGroupItems, similarRecipes } from '~/constant/mainConst';

const keys = process.env.API_KEY2;

type RecipesTypes = {
  random?: boolean;
  type?: string;
  value?: string;
  items: string;
  isDynamic: boolean;
};
type specificRecipe = {
  id: string;
  isDynamic: boolean;
};
interface Props {
  recipe: specificRecipe | RecipesTypes;
}
interface userAuth {
  username: string;
  firstName: string;
  lastName: string;
  email: string | undefined | null;
}

export const makeSlug = (id: number, title: string) => {
  const formatTitle = title
    .split(` `)
    .map((letter) => letter.toLocaleLowerCase())
    .join(`-`);

  return `/recipes/${id}/${formatTitle}`;
};
export const formatMeals = (mealPlan: mealPlanType) => {
  const mealArr: object[] = [];
  Object.values(mealPlan.week).forEach((plan) => mealArr.push(plan));
  console.log('mealArr');
  console.log(mealArr);
  const mealRes = mealArr.flatMap((item) => item);
  return mealRes;
};

export const formatMeals2 = (meals: mealPlanType) => {
  console.log('meals');
  console.log(meals);
  const dateForMeal = (num: number) => {
    const today = new Date();
    return new Date(
      today.setDate(today.getDate() - today.getDay() + (num + 1))
    ).toISOString();
  };

  const objValues = Object.values(meals.week);
  const results: any[] = [];
  for (let i = 0; i < objValues.length; i++) {
    objValues[i].meals.map((item: mealType, index: number) =>
      results.push({
        start: dateForMeal(i),
        end: dateForMeal(i),
        title: item.title,
        resource: index + 1,
        allDay: true,
        link: makeSlug(item.id, item.title),
      })
    );
  }
  return results;
  //   const today = new Date()
  //   let firstDay = new Date(today.setDate(today.getDate() - today.getDay()+1))
  // let lastDay = new Date(today.setDate(today.getDate()- today.getDay()+7))
};
// export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const fetchRecipes = async ({ recipe }: Props) => {
  try {
    if ('id' in recipe && recipe.id) {
      const { id, isDynamic } = recipe;
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${keys}`,
        {
          method: `GET`,
          headers: {
            'Content-Type': `application/json`,
          },
          next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
        }
      );
      const response = await request.json();
      return response;
    }
    if ('items' in recipe) {
      const { items, random, type, value, isDynamic } = recipe;
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${
          random ? 'random?' : `complexSearch?${type}=${value}&`
        }number=1&apiKey=${keys}`,
        {
          method: `GET`,
          headers: {
            'Content-Type': `application/json`,
          },
          next: { revalidate: 60 },
        }
      );
      const response = await request.json();
      return response;
    }
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

export const searchRec = async (query?: string, type?: string) => {
  try {
    if (type === 'ingredients') {
      const searchItems =
        query && query?.split(',').length > 1
          ? query
              ?.split(',')
              .map((item) => item.trim())
              .join(',+')
          : query;
      const request = await fetch(
        `
            https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchItems}&number=${recipeGroupItems}&apiKey=${keys}`,
        {
          method: `GET`,
          headers: {
            'Content-Type': `application/json`,
          },
        }
      );

      const response = await request.json();
      return response;
    }
    const request = await fetch(
      `
            https://api.spoonacular.com/recipes/complexSearch?${
              query ? `query=${query}` : `type=${type}`
            }&number=${recipeGroupItems}&apiKey=${keys}`,
      {
        method: `GET`,
        headers: {
          'Content-Type': `application/json`,
        },
      }
    );
    const response = await request.json();
    return response;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

export const fetchSimilar = async (id: string) => {
  try {
    // const request = await fetch(
    //   `https://api.spoonacular.com/recipes/715424/similar?number=5&apiKey=${keys}`,
    //   {
    //     method: `GET`,
    //     headers: {
    //       'Content-Type': `application/json`,
    //     },
    //   }
    // );
    if (id) {
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${id.trim()}/similar?number=${similarRecipes}&apiKey=${keys}`,
        {
          method: `GET`,
          headers: {
            'Content-Type': `application/json`,
          },
        }
      );
      console.log('api');
      console.log(
        `https://api.spoonacular.com/recipes/${id.trim()}/similar?number=${similarRecipes}&apiKey=${keys}`
      );
      const response = await request.json();
      console.log('response');
      console.log(response);
      return response;
    } else console.error('no recipe id was provided');
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

export const fetcher = async (cuisine: string) => {
  try {
    const request = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=${similarRecipes}&apiKey=${keys}`,
      {
        method: `GET`,
        next: { revalidate: 60 },
      }
    );
    const response = await request.json();
    return response;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

export const userAuth = async ({
  username,
  firstName,
  lastName,
  email = 'example@goolgle.com',
}: userAuth) => {
  try {
    const requestAuth = await axios.post(
      `https://api.spoonacular.com/users/connect?apiKey=${keys}`,
      {
        username,
        firstName,
        lastName,
        email,
      }
    );
    console.log('requestAuth');
    console.log(requestAuth);
    return requestAuth;
  } catch (error) {}
};
