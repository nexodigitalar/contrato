import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usuarios: [],
  cantidadUsuarios: 1,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usuarios = action.payload;
      return state;
    },
    updateUsers: (state, action) => {
      const { name, index, value } = action.payload;
      state.usuarios[index][name] = value;
      return state;
    },
    setAmountUser: (state, action) => {
      state.cantidadUsuarios = action.payload;
      return state;
    },
  },
});

export const { setUsers, updateUsers, setAmountUser } = userSlice.actions;

export default userSlice.reducer;
