import { configureStore } from "@reduxjs/toolkit";
import handlePopupSlice from "./states/handlePopupSlice";
import addSongSlice from "./states/addSongSlice";
import playerSlice from "./states/playerSlice";

const store = configureStore({
  reducer: {
    popup: handlePopupSlice,
    addSongs: addSongSlice,
    player: playerSlice,
  },
});

export default store;
