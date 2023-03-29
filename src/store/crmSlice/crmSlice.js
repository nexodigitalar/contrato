import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: {},
  grupo: {},
};

export const crmSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.ids = action.payload;
      return state;
    },
    setGrupo: (state, action) => {
      state.grupo = action.payload;
      return state;
    },
  },
});

export const { setGrupo, setId } = crmSlice.actions;

export default crmSlice.reducer;
