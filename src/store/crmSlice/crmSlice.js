import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: {},
  grupo: {},
  idConfirmation: "",
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
    setIdConfirmation: (state, action) => {
      state.idConfirmation = action.payload;
      return state;
    },
  },
});

export const { setGrupo, setId, setIdConfirmation } = crmSlice.actions;

export default crmSlice.reducer;
