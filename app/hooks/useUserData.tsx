"use client";
import { auth, getUser, getUserImages } from "@/common/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState, store } from "@/common/redux/store";
import { setImages } from "@/common/redux/slices/imagesSlice";
import { setUser } from "@/common/redux/slices/userSlice";
import { redirect } from "next/navigation";
export function useUserData() {
  const dispatch = useDispatch();
  const { images } = useSelector((state: RootState) => state.images);
  const { userData } = useSelector((state: RootState) => state.user);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user && !images.length) {
      getUserImages(user?.email).then((res) => dispatch(setImages(res)));
      getUser(user).then((res) => dispatch(setUser(res)));
      console.log(userData);
    } else if (!user && !loading) {
      redirect("/auth");
    }
  }, [loading]);
  return { userData, loading, images };
}
