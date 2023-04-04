'use client';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  recipe: Recipe | searchResult;
  link: string;
}

export default function ImageWithLike({ recipe, link }: Props) {
  // const recipeLink = makeSlug(recipe.id, recipe.sourceUrl, recipe.title);
  // const addLikedHandler = () => {
  //   dispatch(likedList(recipe));
  // };
  // const isLiked = useAppSelector(
  //   (state) =>
  //     state.likedRecipes.find((storeRecipe) => storeRecipe.id === recipe.id) ||
  //     false
  // );
  return (
    <div className='relative overflow-hidden rounded-t-sm'>
      <Link href={link}>
        {/* <Link href={recipeLink}> */}
        <Image
          className='cursor-pointer rounded-sm transition-all duration-200 hover:scale-125'
          src={
            `https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg
          ` || `/images/no-food.png`
          }
          height={500}
          width={500}
          alt='product'
        />
      </Link>
      {/* <button
        className='icons absolute right-3 top-4 mb-3 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100'
        onClick={addLikedHandler}
      >
        <FontAwesomeIcon
          className='h-8 text-mainColor transition-all duration-200'
          size='2x'
          icon={isLiked ? solidHeart : faHeart}
        />
      </button> */}
    </div>
  );
}
