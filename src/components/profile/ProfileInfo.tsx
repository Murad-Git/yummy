'use client';
import Planner2 from '~/components/profile/mealPlanner/Planner2';
// import { redirect } from 'react-router-dom';
import Recipes from '~/components/recipes/Recipes';
import { useAppSelector } from '~/types/main';
interface Props {
  mealPlan: mealPlanType;
}
export default function ProfileInfo({ mealPlan }: Props) {
  const liked = useAppSelector((state) => state.likedRecipes);
  const curNav = useAppSelector((state) => state.profNav);

  switch (curNav) {
    case 'Personal Info':
      return <div>Your personal info page</div>;
    case 'Meal Plan':
      return <Planner2 mealPlan={mealPlan} />;
    // return <Planner mealPlan={mealPlan} />;
    case 'Your Favourite Recipes':
      return (
        <div>
          {liked.length > 0 ? (
            <Recipes
              recipes={liked}
              sectionTitle='Your Favourite Recipes'
              items='five'
            />
          ) : (
            <h2 className='mt-4 text-lg font-semibold'>
              You don't have liked recipes yet
            </h2>
          )}
        </div>
      );
    default:
      return <div>Your personal info page</div>;
  }
}
