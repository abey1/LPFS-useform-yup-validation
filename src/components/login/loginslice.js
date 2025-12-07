import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { userName: "", email: "", password: "" },
  reducers: {
    setLoginDetails: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const getLoginDetails = (state) => state.login;
export const { setLoginDetails } = loginSlice.actions;
export default loginSlice.reducer;
