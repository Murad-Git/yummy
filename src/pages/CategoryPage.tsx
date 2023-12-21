import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import Recipes from '~/components/recipes/Recipes';

interface Props {
  category: string;
  recipes: searchResult[];
  formCategory: string;
}

export const CategoryPage = ({ category, recipes, formCategory }: Props) => {
  return (
    <>
      <HeroImg title={category} />
      <Container>
        <Recipes
          recipes={recipes}
          items='four'
          sectionTitle={`Search results for ${formCategory}`}
        />
      </Container>
    </>
  );
};
