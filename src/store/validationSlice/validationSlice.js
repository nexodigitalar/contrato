import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  terminos: [],
};

export const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usuarios = action.payload;
      return state;
    },
  },
});

export const { setUsers } = validationSlice.actions;

export default validationSlice.reducer;
