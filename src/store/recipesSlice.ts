import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { RootState } from '~/store/store';

interface State {
  likedRecipes: Recipe[] | searchResult[];
  profNav: ProfileLinks;
}

const initialState: State = {
  likedRecipes: [],
  profNav: `Personal Info`,
};

export const recipesSlice = createSlice({
  name: `recipes`,
  initialState,
  reducers: {
    likedList(state, { payload }: PayloadAction<Recipe | searchResult>) {
      const existingRecipe =
        state.likedRecipes.find((recipe) => recipe.id === payload.id) || false;
      if (existingRecipe) {
        state.likedRecipes = state.likedRecipes.filter(
          (recipe) => recipe.id !== payload.id
        );
        return;
      }
      state.likedRecipes = [...state.likedRecipes, payload];
    },
    setProfNav(state, { payload }: PayloadAction<string>) {
      console.log('action in changeProfNav');
      console.log(payload);
      if (payload as ProfileLinks) {
        state.profNav = payload;
      }
    },
  },
});
export const { likedList, setProfNav } = recipesSlice.actions;
export const likedValues = (state: RootState) => state.likedRecipes;
export default recipesSlice.reducer;
