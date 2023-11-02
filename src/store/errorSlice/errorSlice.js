import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    addError: (state, action) => {
      state.message = action.payload;
      return state;
    },
  },
});

export const { addError } = errorSlice.actions;

export default errorSlice.reducer;
