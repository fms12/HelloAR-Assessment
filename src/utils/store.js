import { configureStore } from "@reduxjs/toolkit";
import handlePopupSlice from "./states/handlePopupSlice";
import addSongSlice from "./states/addSongSlice";

const store = configureStore({
  reducer: {
    popup: handlePopupSlice,
    addSongs: addSongSlice,
  },
});

export default store;
