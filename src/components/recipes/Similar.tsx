import Image from 'next/image';

interface Props {
  title: string;
  recipes: searchResult[];
}

export const Similar = ({ title, recipes }: Props) => {
  return (
    <section className=' relative my-12'>
      <h1 className='font-bold text-3xl mb-4'>{title}</h1>
      <ul className='space-y-2'>
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className='flex items-center cursor-pointer hover:bg-gray-100'
          >
            <Image
              src={
                `https://spoonacular.com/recipeImages/${recipe.id}-636x393.${recipe.imageType}` ||
                `/images/no-food.png`
              }
              width={500}
              height={500}
              alt='recipe'
              className='mr-3 w-44 object-cover'
            />
            <h3>{recipe.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};
