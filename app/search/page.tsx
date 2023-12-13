import { notFound } from 'next/navigation';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import Recipes from '~/components/recipes/Recipes';
import { searchRec } from '~/utils/fetch-helpers';

interface Props {
  searchParams?: { term: string; type: string };
}
export default async function SearchPage({ searchParams }: Props) {
  console.log(`searchParams`);
  console.log(searchParams);
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams ||
    (searchParams && !searchParams.term)
  )
    return notFound();
  const data = await searchRec(searchParams?.term, searchParams.type);
  if (!data) notFound();
  console.log(`recipes from search`);
  console.log(data);

  return (
    <section>
      <HeroImg
        title={searchParams.term}
        img={`/images/hero/${searchParams.term}.jpg`}
      />
      {/* <div className='relative'>
      <div className='relative'>
        <Image
          src={`/images/hero/${searchParams.term}.jpg` || '/images/hero/hero-bg2.jpeg'}
          alt='hero'
          width='0'
          height='0'
          sizes='100vw'
          className='h-[calc(100vh/1.5)] w-full object-cover'
        />
        <div className='absolute top-0 z-10 h-[calc(100vh/1.5)] w-full bg-black opacity-20 ' />
        </div>
        <HeroTitle title={searchParams.term} />
      <SearchField className='absolute bottom-[30%] mx-auto left-0 right-0 text-center z-30' />
      </div> */}
      <Container>
        <Recipes
          recipes={data.results || data}
          items='four'
          sectionTitle={`Search results for ${searchParams?.term}`}
        />
      </Container>
    </section>
  );
}
