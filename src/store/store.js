import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice/pageSlice";
import dataSlice from "./dataSlice/dataSlice";

export const store = configureStore({
  reducer: {
    page: pageSlice,
    data: dataSlice,
  },
});
