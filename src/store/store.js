import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./pageSlice/pageSlice";
import dataSlice from "./dataSlice/dataSlice";
import userSlice from "./userSlice/userSlice";
import validationSlice from "./validationSlice/validationSlice";
import crmSlice from "./crmSlice/crmSlice";

export const store = configureStore({
  reducer: {
    page: pageSlice,
    data: dataSlice,
    user: userSlice,
    validation: validationSlice,
    crm: crmSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
