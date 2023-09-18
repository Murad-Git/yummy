'use client';
import { useAuth } from '~/components/auth/AuthProvider';
import Recipes from '~/components/recipes/Recipes';

export const Liked = () => {
  // const [liked, setLiked] = useState<Recipe[] | searchResult[]>([]);
  // const supabase = createClientComponentClient<Database>();
  const { usersRecipes } = useAuth();
  console.log('usersRecipes');
  console.log(usersRecipes);
  // if (!userId) alert('no need to login first');
  // useEffect(() => {
  //   const isLiked = async () => {
  //     // const { data, error } = await supabase
  //     //   .from('recipes2')
  //     //   .select('*')
  //     //   .eq('user_id', id)
  //     //   .select('recipe')
  //     //   .select();
  //     const unsubscribe = realtime<RecipeSupabase>(supabase)
  //       .from('recipes2')
  //       .eq('user_id', userId)
  //       .subscribe((snap) => {
  //         const recList = snap.data.map((item) => item.recipe);
  //         console.log('recList');
  //         console.log(recList);
  //         setLiked(recList);
  //       });

  //     // if (error) console.error(error.message);
  //     // else {
  //     //   const recList = data.map((item) => item.recipe);
  //     //   setLiked(recList);
  //     // }
  //   };
  //   isLiked();
  // }, []);
  return (
    <div>
      {usersRecipes.length > 0 ? (
        <Recipes
          recipes={usersRecipes}
          sectionTitle='Your Favourite Recipes'
          items='five'
          more={false}
        />
      ) : (
        <h2 className='mt-4 text-lg font-semibold'>
          You don't have liked recipes yet
        </h2>
      )}
    </div>
  );
};
