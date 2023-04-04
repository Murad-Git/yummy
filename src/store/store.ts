import { configureStore } from '@reduxjs/toolkit';

import recipesSlice from '~/store/recipesSlice';

export const store = configureStore({
  reducer: recipesSlice,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
