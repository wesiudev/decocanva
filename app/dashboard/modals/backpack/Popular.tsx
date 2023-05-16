"use client";
import capitalizeString from "@/app/utils/CapitalizeString";
import { ImageProps } from "@/types";
import { DocumentData } from "firebase/firestore/lite";
import Image from "next/image";
import { FaAward, FaComment, FaHeart, FaRocket } from "react-icons/fa";

export const Popular = ({ images }: DocumentData) => {
  const cloneImages = [...images];
  const sortedByPopularity = cloneImages
    ?.filter((image: ImageProps) => image.likes !== 0 || image.comments.length)
    .sort((a, b) => b.likes - a.likes);

  return (
    <>
      <div className="flex flex-col sm:pr-3 overflow-x-hidden">
        <div className="flex flex-row items-center text-xl">
          <FaRocket className="text-blue-600" />{" "}
          <span className="ml-1 mt-2 mb-3">Popular</span>
        </div>
        {sortedByPopularity?.map((image, idx) => (
          <div
            key={idx}
            className={`${
              idx > 3 && "hidden"
            } flex hover:bg-purple-600 w-full cursor-pointer mt-1 group truncate`}
          >
            <div className={`flex items-start min-h-[60px] min-w-[60px]`}>
              <Image
                width={60}
                height={60}
                alt=""
                src={image.src}
                className="w-max h-max z-50"
              />
            </div>
            <div className="h-max flex flex-col justify-between">
              <div className="px-2 hover:-animate-translate-x-100 flex flex-row">
                {idx === 0 && (
                  <div className="w-max">
                    <FaAward className="w-4 h-4 mr-px mt-1 text-yellow-400" />
                  </div>
                )}
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
    </>
  );
};
