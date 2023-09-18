'use client';
import { Info } from '~/components/profile/Info';
import { Liked } from '~/components/recipes/Liked';
// import { redirect } from 'react-router-dom';
import { useAppSelector } from '~/types/main';
interface Props {
  mealPlan?: mealPlanType;
}
export default function NavProf({ mealPlan }: Props) {
  const liked = useAppSelector((state) => state.likedRecipes);
  const curNav = useAppSelector((state) => state.profNav);

  switch (curNav) {
    case 'Personal Info':
      return <Info />;
    // case 'Meal Plan':
    // return <Planner2 mealPlan={mealPlan} />;
    // return <Planner mealPlan={mealPlan} />;
    case 'Your Favourite Recipes':
      return (
        <Liked />
        // <div>
        //   {liked.length > 0 ? (
        //     <Recipes
        //       recipes={liked}
        //       sectionTitle='Your Favourite Recipes'
        //       items='five'
        //     />
        //   ) : (
        //     <h2 className='mt-4 text-lg font-semibold'>
        //       You don't have liked recipes yet
        //     </h2>
        //   )}
        // </div>
      );
    default:
      return <div>Your personal info page</div>;
  }
}
