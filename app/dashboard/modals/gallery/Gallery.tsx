"use client";
import Link from "next/link";
import { FaImages, FaPlus } from "react-icons/fa";

export const GalleryModal = () => {
  return (
    <div className="sm:mt-0 flex flex-col bg-purple-700  text-gray-100 p-6">
      <div className="text-2xl sm:text-3xl flex flex-row items-center">
        <FaImages className=" mr-1 mt-1" /> Gallery
      </div>
      <div className="border-t-2 border-purple-600 mt-4 mb-2" />
      <div className="text-2xl text-gray-400 mt-1 mb-4 min-h-[30vh] flex items-center justify-center">
        Your gallery is empty
      </div>
    </div>
  );
};
