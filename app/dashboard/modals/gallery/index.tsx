"use client";
import { FaImages } from "react-icons/fa";

export const GalleryModal = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col bg-purple-900 text-gray-100 p-5 rounded-md">
        <div className="text-2xl sm:text-3xl flex flex-row items-center">
          <FaImages className=" mr-1 mt-1" /> Gallery
        </div>
      </div>
      <div className="mt-2 flex flex-col bg-purple-900 text-gray-100 p-5 rounded-md">
        <div className="text-center text-2xl text-gray-400 mt-1 mb-4 h-full flex items-center justify-center sm:px-5">
          Render at least 20 pictures to create your first tematic gallery.
        </div>
      </div>
    </div>
  );
};
