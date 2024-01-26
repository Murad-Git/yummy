import React from 'react';
import HeroRecipes from '~/components/recipes/HeroRecipes';
import Recipes from '~/components/recipes/Recipes';
interface Props {
  params: string;
  recipes: searchResult[];
  type: string;
}
export const ComponentSelector = ({ params, recipes, type }: Props) => {
  switch (type) {
    case 'ingredients':
      const formatIng = recipes.map(({ id, name, image }) => ({
        title: name || 'title',
        id,
        image,
      }));
      return (
        <HeroRecipes
          heroRecipes={formatIng}
          title={`Search results for ${params}`}
        />
      );
    default:
      return (
        <Recipes
          recipes={recipes}
          items='four'
          sectionTitle={`Search results for ${params}`}
        />
      );
  }
};
