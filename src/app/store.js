import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authentication/authSlice";
import messageReducer from "../features/authentication/messageSlice";

const rootReducer = {
  auth: authReducer,
  messages: messageReducer,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
