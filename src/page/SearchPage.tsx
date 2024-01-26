import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import { ComponentSelector } from '~/components/search/ComponentSelector';
import { heroImgList } from '~/constant/mainConst';

interface Props {
  params: string;
  recipes: searchResult[];
  type: string;
}

export const SearchPage = ({ params, recipes, type }: Props) => {
  const img = heroImgList.includes(params)
    ? `/images/hero/${params}.jpg`
    : `/images/hero/hero-bg2.jpeg`;
  return (
    <>
      <HeroImg title={params} img={img} />
      <Container>
        <ComponentSelector params={params} recipes={recipes} type={type} />
      </Container>
    </>
  );
};
