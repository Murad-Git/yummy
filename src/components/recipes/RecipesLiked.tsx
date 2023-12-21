'use client';
import { useAuth } from '~/components/auth/AuthProvider';
import Recipes from '~/components/recipes/Recipes';

export const RecipesLiked = () => {
  const { usersRecipes } = useAuth();
  return (
    <div>
      {usersRecipes.length > 0 ? (
        <Recipes
          recipes={usersRecipes}
          sectionTitle='Your Favourite Recipes'
          items='five'
          more={false}
        />
      ) : (
        <h2 className='mt-4 text-lg font-semibold'>
          You don&#39;t have liked recipes yet
        </h2>
      )}
    </div>
  );
};
