"use client";
import Link from "next/link";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";
import BackpackImageThumbnail from "./components/ImageThumbnail";
import { FakeItem } from "./components/FakeItem";
import { ImageProps } from "@/types";
import { useUserData } from "../hooks/useUserData";
import { redirect } from "next/navigation";
import Info from "../components/info";

export default function Backpack() {
  const { images, loading } = useUserData();
  if (!images.length && !loading) {
    redirect("backpack/empty");
  }
  return (
    <div className="w-[95vw] sm:w-3/4 mx-auto font-sans">
      <Link
        href="/dashboard"
        className="pt-[24px] sm:pt-[4vw] hover:underline text-white flex flex-row items-center text-2xl z-50 w-max"
      >
        <FaArrowLeft /> <span className="ml-1">Dashboard</span>
      </Link>
      <div className="mx-auto pt-12">
        <div className="text-gray-50 text-4xl flex flex-row w-full">
          <div className="ml-2">
            <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
            <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
          </div>
          <div className="ml-3 italic ">Backpack</div>
        </div>
        <Info
          destination="privacy"
          buttonText="Change it here"
          text="In order to share your images, you have to switch your profile
              settings to public."
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
        {images.length ? (
          images?.map((image: ImageProps, idx: number) => (
            <div key={idx}>
              <BackpackImageThumbnail src={image.src} />
            </div>
          ))
        ) : (
          <>
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
          </>
        )}

        <Link
          href="/backpack/generator"
          className="bg-purple-700 flex items-center justify-center hover:bg-purple-600 aspect-square rounded-md"
        >
          <FaPlus className="w-[30%] h-[30%] text-purple-950" />
        </Link>
      </div>
    </div>
  );
}
