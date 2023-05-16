"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  images: [],
  loadingImages: false
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.loadingImages = true
      state.images = [...state.images, ...action.payload]
      state.loadingImages = false
    },
    clearImages: (state, action) => {
      state.images = []
    },
  },
});

export const { setImages, clearImages } = imagesSlice.actions;

export default imagesSlice.reducer;