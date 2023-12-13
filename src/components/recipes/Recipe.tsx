'use client';

import DOMPurify from 'dompurify';
import Link from 'next/link';

import RecipeImg from '~/components/ui/RecipeImg';
import { makeSlug } from '~/utils/fetch-helpers';

type Props = {
  recipe: Recipe | searchResult;
};

// Virtual List - React biblary
// user select none in CSS

export default function Recipe({ recipe }: Props) {
  // const [descr, setDescr] = useState<{ __html: string }>
  // ({
  //   __html: ``,
  // });
  const anotherDesc = {
    __html: `summary` in recipe ? DOMPurify.sanitize(recipe.summary) : ``,
  };
  // useEffect(() => {
  //   if (`summary` in recipe) {
  //     const sanitizedData = () => ({
  //       __html: DOMPurify.sanitize(recipe.summary),
  //     });
  //     setDescr(sanitizedData);
  //   }
  // }, []);
  const recipeLink = makeSlug(recipe.id, recipe.title);
  return (
    <div className='relative rounded-b-sm shadow-md '>
      {/* <div className='relative rounded-b-sm bg-gray-200 shadow-md '> */}
      <RecipeImg recipe={recipe} link={recipeLink} />
      {/* <div className='overflow-hidden rounded-t-sm'>
        <Link href={recipeLink}> */}
      {/* <NextImage
            useSkeleton={true}
            src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
            width={500}
            height={500}
            alt='product'
            imgClassName='cursor-pointer transition-all duration-200 hover:scale-125'
          /> */}
      {/* <Image
            className='cursor-pointer transition-all duration-200 hover:scale-125'
            src={`https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg`}
            height={500}
            width={500}
            alt='product'
          />
        </Link>
      </div> */}
      <div
        className={`flex ${
          anotherDesc.__html.length > 0 ? `h-48` : `h-32`
        } flex-col items-start justify-between px-3 pb-1 pt-6 hover:bg-gray-100`}
      >
        {/* <div className='flex h-40 flex-col items-start justify-between px-3 pb-1 pt-6 opacity-80 hover:opacity-100'> */}
        <div className='mb-3 text-left'>
          <Link href={recipeLink}>
            <h2 className='my-3 cursor-pointer text-xl font-bold hover:text-gray-600'>
              {recipe.title}
            </h2>
          </Link>
          <p
            className='inline-block cursor-text text-md text-gray-500 line-clamp-2'
            dangerouslySetInnerHTML={anotherDesc}
          />
        </div>
      </div>
    </div>
  );
}
