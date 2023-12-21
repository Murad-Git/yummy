'use client';
import { UpdatePass } from '~/components/auth/UpdatePass';
import { RecipesLiked } from '~/components/recipes/RecipesLiked';
// import { redirect } from 'react-router-dom';
import { useAppSelector } from '~/types/main';

export default function ProfileNav() {
  const curNav = useAppSelector((state) => state.profNav);

  switch (curNav) {
    case `Personal Info`:
      return <UpdatePass />;
    case `Your Favourite Recipes`:
      return <RecipesLiked />;
    default:
      return <div>Your personal info page</div>;
  }
}
