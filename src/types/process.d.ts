declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;
    TWITTER_ID: string;
    TWITTER_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    AUTH0_ID: string;
    AUTH0_SECRET: string;
  }
}
// }
interface Children {
  children?: React.ReactNode | [React.ReactNode];
}
interface ProfileLinks {
  [`Personal Info` | `Your Favourite Recipes`];
}

interface Ingredient {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
  meta: string[];
  measures: {
    us: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
    metric: {
      amount: number;
      unitShort: string;
      unitLong: string;
    };
  };
}

interface RecipeComment {
  created_at: string;
  user_id: string;
  comment_text: string;
  id: number;
  page_id: string;
}
interface RecipeSupabase {
  recipe_id: number;
  recipe: Recipe;
  user_id: number;
  id: number;
}
interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  // license: string;
  code: number;
  sourceName: string;
  pricePerServing: number;
  extendedIngredients: Ingredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  occasions: string[];
  instructions: string;
  analyzedInstructions: {
    name: string | '';
    steps: {
      number: number;
      step: string;
      ingredients: {
        id: number;
        name: string;
        localizedName: string;
        image: string;
      }[];
      equipment: {
        id: number;
        name: string;
        localizedName: string;
        image: string;
      }[];
    }[];
  }[];
  originalId: null | number;
  spoonacularSourceUrl: string;
}

interface searchResult {
  id: number;
  imageType?: string;
  title: string;
  // readyInMinutes: number;
  // servings: number;
  // sourceUrl: string;
  image: string;
  name?: string;
}

type specificRecipe = {
  id: string;
  isDynamic?: boolean;
};

interface ingredientProps {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: {
    aisle: string;
    amount: number;
    id: number;
    image: string;
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
    unitLong: string;
    unitShort: string;
  }[];
  title: string;
  unusedIngredients: string[];
  usedIngredientCount: numebr;
  usedIngredients: {
    aisle: string;
    amount: number;
    id: number;
    image: string;
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
    unitLong: string;
    unitShort: string;
  }[];
}
