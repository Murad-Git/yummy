import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

import { RootState } from '~/store/store';

interface State {
  likedRecipes: Recipe[];
}

const initialState: State = {
  likedRecipes: [],
};

export const recipesSlice = createSlice({
  name: `recipes`,
  initialState,
  reducers: {
    likedList(state, { payload }: PayloadAction<Recipe>) {
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
  },
});
export const { likedList } = recipesSlice.actions;
export const likedValues = (state: RootState) => state.likedRecipes;
export default recipesSlice.reducer;
