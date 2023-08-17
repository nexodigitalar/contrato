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
    blockPages: (state) => {
      state.steps = [{ 1: false, 2: false, 3: false, 4: true }];
      return state;
    },
  },
});

export const { changePage, changePageValidations, blockPages } =
  pageSlice.actions;

export default pageSlice.reducer;
