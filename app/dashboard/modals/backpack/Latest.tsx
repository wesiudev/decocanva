"use client";
import capitalizeString from "@/app/utils/CapitalizeString";
import { DocumentData } from "firebase/firestore/lite";
import Image from "next/image";
import { FaComment, FaFire, FaHeart } from "react-icons/fa";

export const Latest = ({ images }: DocumentData) => {
  const cloneImages = [...images];
  cloneImages?.sort((a, b) => b.creationTime - a.creationTime);
  return (
    <div className="flex flex-col sm:pr-3 overflow-x-hidden ">
      <div className="flex flex-row items-center text-xl mb-2">
        <FaFire className="text-red-500" />{" "}
        <span className="ml-1"> Latest </span>
      </div>
      <div className="bg-purple-800 p-2 rounded-md">
        {cloneImages?.map((image, idx) => (
          <div
            key={idx}
            className={`${
              idx > 3 && "hidden"
            } flex hover:bg-purple-600 w-full cursor-pointer mt-1 group truncate rounded-md`}
          >
            <div className={`flex items-start min-h-[60px] min-w-[60px]`}>
              <Image
                width={60}
                height={60}
                alt=""
                src={image.src}
                className="w-max h-max z-50 rounded-md"
              />
            </div>
            <div className="h-max flex flex-col justify-between">
              <div className="px-2 hover:-animate-translate-x-100 flex flex-row">
                <span className="w-3/4 ">{capitalizeString(image.prompt)}</span>
              </div>
              <div className="flex flex-row w-full mt-2 ml-2">
                <span className="flex flex-row items-center">
                  <FaHeart className="mr-1" />
                  {image.likes}
                </span>
                <span className="flex flex-row items-center ml-2">
                  <FaComment className="mr-1" /> {image.comments?.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
