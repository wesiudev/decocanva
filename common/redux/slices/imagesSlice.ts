"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  images: [],
  loadingImages: true,
  limit:12,
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload
    },
    setImages: (state, action) => {
      state.images = action.payload
      state.loadingImages = false
    },
    pushToImages: (state, action) => {
      state.images.push(action.payload)
    },

    clearImages: (state, action) => {
      state.images = []
    },
  },
});

export const { setImages, clearImages, pushToImages, setLimit } = imagesSlice.actions;

export default imagesSlice.reducer;