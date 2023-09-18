import Container from '~/components/layout/Container';

export const RecipeHeader = ({ recipeName }: { recipeName: string }) => {
  return (
    <div className='relative'>
      <div className='landingImage' />
      {/* <Image
        src='/images/hero-recipe/recipe-header.jpg'
        alt='hero'
        width='0'
        height='0'
        sizes='100vw'
        className='h-[calc(100vh/2.5)] w-full object-cover landingImage'
      /> */}
      <Container>
        <div className='absolute bottom-[40%] z-20'>
          {/* <div className='absolute top-[15%] z-20'> */}
          <p className='text-5xl uppercase text-white hero-title italic'>
            {recipeName}
          </p>
        </div>
      </Container>
    </div>
  );
};
