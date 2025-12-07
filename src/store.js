import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./components/login/loginslice";
const store = configureStore({
  reducer: {
    // Add your reducers here
    login: loginReducer,
  },
});

export default store;
