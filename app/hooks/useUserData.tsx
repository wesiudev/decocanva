"use client";
import { auth, getUserImages } from "@/common/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, store } from "@/common/redux/store";
import { setImages } from "@/common/redux/slices/imagesSlice";
export function useUserData() {
  const dispatch = useDispatch();
  const { images } = useSelector((state: RootState) => state.images);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user && !images.length) {
      getUserImages(user?.email).then((res) => dispatch(setImages(res)));
    }
  }, [loading]);
  return { user, loading, images };
}
