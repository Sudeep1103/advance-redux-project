import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    // Add your slices here
    ui: uiReducer,
  },
});

export default store;
