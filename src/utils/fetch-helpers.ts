import {
  fetchByIngredientsRec,
  fetchSimilarRec,
  fetchSingleRec,
} from '~/utils/fetch-recipes';
import { fetchAllRec } from '~/utils/fetch-recipes';

type RecipesTypes = {
  random: boolean;
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
  recipe: RecipesTypes;
}

export const fetchRecipes = async ({ recipe }: Props) => {
  return fetchAllRec(
    recipe.items,
    recipe.random,
    recipe.type,
    recipe.value,
    recipe.isDynamic,
  );
};

export const fetchSingle = async (id: string, isDynamic: boolean) => {
  return fetchSingleRec(id, isDynamic);
};

export const fetchSimilar = async (id: string) => {
  return fetchSimilarRec(id);
};

export const fetchByIngredients = async (ingred: string) => {
  return fetchByIngredientsRec(ingred);
};
