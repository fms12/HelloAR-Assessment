import { createSlice } from "@reduxjs/toolkit";

const addSongSlice = createSlice({
  name: "addSongs",
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      const newSong = {
        id: new Date().toISOString(),
        name: action.payload.name,
        link: action.payload.link,
        source: action.payload.source,
        image: action.payload.image,
      };
      state.push(newSong);
    },
    deleteSong: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addSong, deleteSong } = addSongSlice.actions;

export default addSongSlice.reducer;
