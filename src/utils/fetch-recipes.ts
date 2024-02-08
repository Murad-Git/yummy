import { ingredientsResults, similarRecipes } from '~/constant/mainConst';

const keys1 = process.env.API_KEY as string;
const keys2 = process.env.API_KEY2 as string;
const keys3 = process.env.API_KEY3 as string;
const keys = {
  1: keys1,
  2: keys2,
  3: keys3,
};
let unauthCounter = 1;

export const fetchSingleRec: (
  id: string,
  isDynamic?: boolean,
) => Promise<Recipe> = async (id: string, isDynamic?: boolean) => {
  try {
    const request = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
        keys[unauthCounter as unknown as keyof typeof keys]
      }`,
      {
        method: `GET`,
        headers: {
          'Content-Type': `application/json`,
        },
        next: isDynamic ? { revalidate: 0 } : { revalidate: 3600 },
      },
    );
    const response = await request.json();
    if (response.code === 402) {
      unauthCounter === 3 ? (unauthCounter = 0) : unauthCounter++;
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
          keys[unauthCounter as unknown as keyof typeof keys]
        }`,
        {
          method: `GET`,
          headers: {
            'Content-Type': `application/json`,
          },
          next: isDynamic ? { revalidate: 0 } : { revalidate: 3600 },
        },
      );
      const response = await request.json();
      return response;
    }
    return response;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return error;
  }
};

export const fetchAllRec = async (
  items: string,
  random: boolean,
  type?: string,
  value?: string,
  isDynamic?: boolean,
) => {
  try {
    const request = await fetch(
      `https://api.spoonacular.com/recipes/${
        random ? `random?` : `complexSearch?${type}=${value}&`
      }number=${items}&apiKey=${
        keys[unauthCounter as unknown as keyof typeof keys]
      }`,
      {
        method: `GET`,
        headers: {
          'Content-Type': `application/json`,
        },
        next: isDynamic ? { revalidate: 0 } : { revalidate: 3600 },
      },
    );
    const response = await request.json();
    if (response.code === 402) {
      unauthCounter === 3 ? (unauthCounter = 0) : unauthCounter++;
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${
          random ? `random?` : `complexSearch?${type}=${value}&`
        }number=${items}&apiKey=${
          keys[unauthCounter as unknown as keyof typeof keys]
        }`,
        {
          method: `GET`,
          headers: {
            'Content-Type': `application/json`,
          },
          next: isDynamic ? { revalidate: 0 } : { revalidate: 3600 },
        },
      );
      const response = await request.json();
      return response;
    }
    return response;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return error;
  }
};

export const fetchSimilarRec = async (id: string) => {
  try {
    // fetch similar based on ID
    if (id) {
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${id}/similar?number=${similarRecipes}&apiKey=${
          keys[unauthCounter as unknown as keyof typeof keys]
        }`,
      );
      const response = await request.json();
      if (response.code === 402) {
        unauthCounter === 3 ? (unauthCounter = 0) : unauthCounter++;
        const request = await fetch(
          `https://api.spoonacular.com/recipes/${id}/similar?number=${similarRecipes}&apiKey=${
            keys[unauthCounter as unknown as keyof typeof keys]
          }`,
        );
        const response = await request.json();
        return response;
      }
      return response;
    } else console.error(`no recipe id was provided`);
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return error;
  }
};

export const fetchByIngredientsRec = async (ingred: string) => {
  try {
    const searchItems =
      ingred && ingred.length > 1
        ? ingred
            ?.split(`,`)
            .map((item) => item.trim())
            .join(`,+`)
        : ingred;
    const request = await fetch(
      `
            https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchItems}&number=${ingredientsResults}&apiKey=${
              keys[unauthCounter as unknown as keyof typeof keys]
            }`,
    );
    const response = await request.json();
    if (response.code === 402) {
      unauthCounter === 3 ? (unauthCounter = 0) : unauthCounter++;
      const request = await fetch(
        `
            https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchItems}&number=${ingredientsResults}&apiKey=${
              keys[unauthCounter as unknown as keyof typeof keys]
            }`,
      );
      const response = await request.json();
      return response;
    }
    return response;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
    return error;
  }
};
