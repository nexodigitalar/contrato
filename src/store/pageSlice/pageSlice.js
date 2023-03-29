import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  steps: [{ 1: true, 2: true, 3: true, 4: false }],
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
  },
});

export const { changePage, changePageValidations, setLastPage } =
  pageSlice.actions;

export default pageSlice.reducer;
