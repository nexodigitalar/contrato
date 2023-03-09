import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ventaId: "401",
  empresaId: 3,
  cliId: "134005",
  grupo: {},
};

export const crmSlice = createSlice({
  name: "crm",
  initialState,
  reducers: {
    setGrupo: (state, action) => {
      state.grupo = action.payload;
      return state;
    },
  },
});

export const { setGrupo } = crmSlice.actions;

export default crmSlice.reducer;
