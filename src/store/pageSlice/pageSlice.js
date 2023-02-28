import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  steps: [{ 1: true, 2: false, 3: false, 4: false }],
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.value = action.payload;
      state.steps[0][action.payload] = true;
    },
    changePageValidations: (state, action) => {
      if (state.steps[0][action.payload]) {
        state.value = action.payload;
      }
    },
  },
});

export const { changePage, changePageValidations } = pageSlice.actions;

export default pageSlice.reducer;
