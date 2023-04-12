import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  steps: [{ 1: true, 2: false, 3: false, 4: false }],
  lastPage: false,
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
    setLastPage: (state) => {
      state.lastPage = true;
      return state;
    },
    blockPages: (state) => {
      state.steps[0][0] = false;
      state.steps[0][1] = false;
      state.steps[0][2] = false;
    },
  },
});

export const { changePage, changePageValidations, setLastPage, blockPages } =
  pageSlice.actions;

export default pageSlice.reducer;
