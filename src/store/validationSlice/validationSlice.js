import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accept: [],
  step2: [],
  step3: [],
};

export const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setStep2: (state, action) => {
      state.step2 = action.payload;
      return state;
    },
    setStep3: (state, action) => {
      state.step3 = action.payload;
      return state;
    },
    setAccept: (state, action) => {
      state.accept = action.payload;
      return state;
    },
  },
});

export const { setStep2, setStep3, setAccept } = validationSlice.actions;

export default validationSlice.reducer;
