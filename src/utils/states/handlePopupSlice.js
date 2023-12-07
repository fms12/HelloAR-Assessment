import { createSlice } from "@reduxjs/toolkit";

const handlePopupSlice = createSlice({
  name: "popup",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});

export const { toggleMenu, closeMenu, openMenu } = handlePopupSlice.actions;
export default handlePopupSlice.reducer;
