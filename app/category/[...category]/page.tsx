import { notFound } from 'next/navigation';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import Recipes from '~/components/recipes/Recipes';
import { searchRec } from '~/utils/fetch-helpers';

interface Props {
  params: {
    category: string;
  };
}

export default async function CategoryPage({ params: { category } }: Props) {
  if (
    (category && Object.entries(category).length === 0) ||
    !category ||
    (category && !category)
  )
    return notFound();

  const data = await searchRec(undefined, category);
  if (!data) notFound();
  // console.log(typeof category);
  // console.log(category[0]);
  const formCategory = category[0].replace(/[^a-zA-Z ]/g, ``);

  return (
    <section>
      <HeroImg title={category} />
      {/* <div className='relative'>
      <div className='relative'>
        <Image
          src={'/images/hero/hero-bg2.jpeg'}
          alt='hero'
          width='0'
          height='0'
          sizes='100vw'
          className='h-[calc(100vh/1.5)] w-full object-cover'
        />
        <div className='absolute top-0 z-10 h-[calc(100vh/1.5)] w-full bg-black opacity-20 ' />
        </div>
        <HeroTitle title={category} />
      <SearchField className='absolute bottom-[30%] mx-auto left-0 right-0 text-center z-30' />
      </div> */}
      <Container>
        <Recipes
          recipes={data.results}
          items='four'
          sectionTitle={`Search results for ${formCategory}`}
        />
      </Container>
    </section>
  );
}
