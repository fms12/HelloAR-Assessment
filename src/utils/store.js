import { configureStore } from "@reduxjs/toolkit";
import handlePopupSlice from "./states/handlePopupSlice";

const store = configureStore({
  reducer: {
    popup: handlePopupSlice,
  },
});

export default store;