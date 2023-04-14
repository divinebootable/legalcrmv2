import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "isLoggedIn",
  initialState: {
    value: false,
  },
  reducers: {
    loggedIn: (state) => {
      state.value = !state.value;
    },
    loggedOut: (state) => {
      state.value = !state.value;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;
export default authSlice.reducer;
