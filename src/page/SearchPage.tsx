import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import Recipes from '~/components/recipes/Recipes';

interface Props {
  params: string;
  recipes: searchResult[];
}

export const SearchPage = ({ params, recipes }: Props) => {
  return (
    <>
      <HeroImg
        title={params}
        img={`/images/hero/${params}.jpg` || `/images/hero/hero-bg2.jpeg`}
      />
      <Container>
        <Recipes
          recipes={recipes}
          items='four'
          sectionTitle={`Search results for ${params}`}
        />
      </Container>
    </>
  );
};
