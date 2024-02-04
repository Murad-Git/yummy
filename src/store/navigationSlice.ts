import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

interface State {
  profNav: ProfileLinks;
  isHamburMenuOpen: boolean;
  isAuthMenuOpen: boolean;
  isImgScaled: boolean;
}

const initialState: State = {
  profNav: `Personal Info`,
  isHamburMenuOpen: false,
  isAuthMenuOpen: false,
  isImgScaled: false,
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
    setHamburMenu(state) {
      state.isHamburMenuOpen = !state.isHamburMenuOpen;
    },
    setShowAuth(state) {
      state.isAuthMenuOpen = !state.isAuthMenuOpen;
    },
    setImgScaled(state) {
      state.isImgScaled = !state.isImgScaled;
    },
  },
});
export const { setProfNav } = profileNavigation.actions;
export const { setHamburMenu } = profileNavigation.actions;
export const { setShowAuth } = profileNavigation.actions;
export const { setImgScaled } = profileNavigation.actions;
export default profileNavigation.reducer;
