"use client";
import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "next/navigation";

const initialState: any = {
  userData: {}
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userData = action.payload
    },
    logout: (state) => {
      state.userData = {}
      redirect("/auth")
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice.reducer;
