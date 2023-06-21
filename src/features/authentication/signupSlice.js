import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
  name: "SignUp",
  initialState: {
    loading: false,
    userinfo: {},
    userToken: null,
    error: null,
    success: false,
  },
  reducers: {},
});

//export const { loggedIn, loggedOut } = authSlice.actions;
export default signupSlice.reducer;
