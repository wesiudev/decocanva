"use client";
import { FaArchive, FaArrowRight, FaPlus } from "react-icons/fa";
import { Latest } from "./Latest";
import Link from "next/link";
import { Popular } from "./Popular";
import { DocumentData } from "firebase/firestore/lite";
import { GiLightBackpack } from "react-icons/gi";
import InfoHover from "@/app/components/infohover";
export const BackpackModal = ({ images }: DocumentData) => {
  return (
    <div className="sm:mt-0 flex flex-col bg-purple-700  text-gray-100 p-3 sm:p-5 min-h-[30vh]">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="w-max relative">
          {/* <InfoHover
            description="In your backpack you will find tools that will be useful for creating and editing images. You can also change visibility of your images here, if you want to share or hide them. Saved images will apear here."
            side="L"
            title="Image storage"
          /> */}
          <Link
            href={`${!images.length ? "/backpack/empty" : "/backpack"}`}
            className="group text-2xl sm:text-3xl flex flex-row items-center w-max relative"
          >
            <GiLightBackpack className="w-8 h-8 mr-1 text-gray-50" />
            <span>Backpack</span>
            <FaArrowRight className="invisible w-4 h-4 ml-2 mt-1 group-hover:scale-150 group-hover:translate-x-1 group-hover:visible ease-in duration-75" />
          </Link>
        </div>
        <div className="relative w-max">
          {/* <InfoHover title="Click here to create your first image." side="R" /> */}
          <Link
            href={`${
              !images.length ? "/backpack/empty" : "/backpack/generator"
            }`}
          >
            <div className="flex flex-row items-center bg-gradient-to-tr from-rose-500  to-purple-950 hover:from-rose-500 hover:to-purple-900 duration-75 ease-in py-2 px-3 rounded-md shadow-sm shadow-purple-950">
              <FaPlus className="mr-1 w-5 h-5" />
              <span className="hidden aspect-square sm:aspect-auto sm:block">
                New image
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="border-t-2 border-purple-600 mt-4 mb-2" />
      {!images.length ? (
        <div className="text-2xl text-gray-400 mt-1 mb-4 min-h-[30vh] flex items-center justify-center text-center">
          Your backpack is empty
        </div>
      ) : (
        <div className="grid grid-rows sm:grid-cols-2 lg:grid-cols-3">
          <Latest images={images} />
          <Popular images={images} />
        </div>
      )}
    </div>
  );
};
