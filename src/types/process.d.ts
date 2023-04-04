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
interface Category {
  [`dinners` | `meals` | `ingredients` | `occasions` | `cuisins`];
}
// }
interface Children {
  children?: React.ReactNode | [React.ReactNode];
}
interface ProfileLinks {
  [`Personal Info` | `Your Favourite Recipes` | `Meal Plan`];
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

interface getResponse {
  success: boolean;
  data: {
    results: searchResult[];
  };
}
interface searchResult {
  id: number;
  title: string;
  image: string;
  imageType: string;
}
