import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

interface State {
  profNav: ProfileLinks;
}

const initialState: State = {
  profNav: `Personal Info`,
};

export const profileNavigation = createSlice({
  name: `recipes`,
  initialState,
  reducers: {
    setProfNav(state, { payload }: PayloadAction<string>) {
      if (payload as ProfileLinks) {
        state.profNav = payload;
      }
    },
  },
});
export const { setProfNav } = profileNavigation.actions;
export default profileNavigation.reducer;
