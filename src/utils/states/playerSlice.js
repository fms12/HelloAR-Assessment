import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentPlayer: null,
  },
  reducers: {
    playSong: (state, action) => {
      state.currentPlayer = action.payload;
    },
  },
});

export const { playSong } = playerSlice.actions;

export default playerSlice.reducer;
