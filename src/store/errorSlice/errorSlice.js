import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.title = action.payload;
      return state;
    },
  },
});

export const { setError } = errorSlice.actions;

export default errorSlice.reducer;
