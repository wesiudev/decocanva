"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  images: []
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.images = [...state.images, ...action.payload]
    },
    clearImages: (state, action) => {
      state.images = []
    },
  },
});

export const { setImages, clearImages } = imagesSlice.actions;

export default imagesSlice.reducer;