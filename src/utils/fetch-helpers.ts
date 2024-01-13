import { searchResults, similarRecipes } from '~/constant/mainConst';

const keys = process.env.API_KEY3;

type RecipesTypes = {
  random?: boolean;
  type?: string;
  value?: string;
  items: string;
  isDynamic?: boolean;
};
type specificRecipe = {
  id: string;
  isDynamic?: boolean;
};
interface Props {
  recipe: specificRecipe | RecipesTypes;
}

export const fetchRecipes = async ({ recipe }: Props) => {
  try {
    // search recipe by id
    if (`id` in recipe && recipe.id) {
      const { id, isDynamic = false } = recipe;
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${keys}`,
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
    // search random or specific recipes
    if (`items` in recipe) {
      const { items, random, type, value, isDynamic = false } = recipe;
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${
          random ? `random?` : `complexSearch?${type}=${value}&`
        }number=${items}&apiKey=${keys}`,
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
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

export const searchRec = async (query?: string, type?: string) => {
  try {
    // search by ingredients
    if (type === `ingredients`) {
      const searchItems =
        query && query?.split(`,`).length > 1
          ? query
              ?.split(`,`)
              .map((item) => item.trim())
              .join(`,+`)
          : query;
      const request = await fetch(
        `
            https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchItems}&number=${searchResults}&apiKey=${keys}`,
      );
      const response = await request.json();
      return response;
    }
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};

export const fetchSimilar = async (id: string) => {
  try {
    // fetch similar based on ID
    if (id) {
      const request = await fetch(
        `https://api.spoonacular.com/recipes/${id}/similar?number=${similarRecipes}&apiKey=${keys}`,
      );
      const response = await request.json();
      return response;
    } else console.error(`no recipe id was provided`);
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
};
