import React from 'react';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import { IngredientsList } from '~/components/search/IngredientsList';

interface Props {
  params: string;
  ingredients: ingredientProps[];
}

export const IngredientsPage = ({ params, ingredients }: Props) => {
  return (
    <>
      <HeroImg title={params} />
      <Container>
        <IngredientsList
          ingredients={ingredients}
          sectionTitle={`Search results for ${params}`}
        />
      </Container>
    </>
  );
};
