'use client';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '~/components/auth/AuthProvider';
import { Database } from '~/types/database';

interface Props {
  recipe: Recipe | searchResult;
  link: string;
}

export default function RecipeImg({ recipe, link }: Props) {
  const supabase = createClientComponentClient<Database>();
  const { user, usersRecipes } = useAuth();

  const addToLiked = async () => {
    if (user === null) return alert('no need to login first');
    const { id: userId } = user;
    const { data, error } = await supabase
      .from('recipes2')
      .select()
      .eq('recipe_id', recipe.id);
    console.log('data from checking exist');
    console.log(data);
    if (data === null || data.length === 0) {
      const { data, error } = await supabase
        .from('recipes2')
        .upsert({ recipe, user_id: userId, recipe_id: recipe.id })
        .select();
      if (error) console.log(console.error(error?.message));
    } else {
      const { error } = await supabase
        .from('recipes2')
        .delete()
        .eq('recipe_id', recipe.id);
      console.log(console.error(error?.message));
    }
  };
  const isLiked = usersRecipes.some((item) => item.id === recipe.id);

  return (
    <div className='relative overflow-hidden rounded-t-sm'>
      <Link href={link}>
        {/* <Link href={recipeLink}> */}
        <Image
          className='w-full cursor-pointer rounded-sm transition-all duration-200 hover:scale-110'
          src={
            `https://spoonacular.com/recipeImages/${recipe.id}-636x393.jpg
          ` || `/images/no-food.png`
          }
          height={500}
          width={500}
          alt='product'
          priority
        />
      </Link>
      <button
        className='icons absolute right-3 top-4 mb-3 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-gray-100 '
        onClick={addToLiked}
      >
        <FontAwesomeIcon
          className='h-8 text-green-500 transition-all duration-200'
          size='2x'
          icon={isLiked ? solidHeart : faHeart}
        />
      </button>
    </div>
  );
}
