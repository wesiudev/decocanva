"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  user: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = state.user = action.payload
    },
    logout: (state) => {
      state.user = [state.user, {}]
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
