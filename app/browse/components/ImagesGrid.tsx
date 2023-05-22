"use client";
import capitalizeString from "@/app/utils/CapitalizeString";
import truncate from "@/app/utils/CutString";
import { ImageProps, ImagesArray } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Canvas3D from "./Canvas3D";
import React from "react";
import { Layout } from "../components/dom/Layout";
export default function ImagesGrid({ images }: { images: ImageProps[] }) {
  const [currentImage, setCurrentImage] = useState<ImageProps>();
  return (
    <div className="relative">
      {currentImage ? (
        <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[80vh] rounded-lg z-50">
          <div className="w-[90vw] lg:w-[80vw] h-[50vh] overflow-y-scroll scrollbar">
            <Layout>
              <Canvas3D
                image={currentImage}
                setCurrentImage={setCurrentImage}
              />
            </Layout>
          </div>
        </div>
      ) : null}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full gap-3 mx-auto mt-3">
        {images?.map((image: ImageProps, idx: number) => (
          <div key={idx} className="relative">
            <div className="relative group">
              <Image
                priority
                width={512}
                height={512}
                src={image.src}
                alt=""
                key={idx}
                onClick={() => setCurrentImage(image)}
              />
              <div className="absolute bottom-0 left-0 p-2 bg-black text-white w-full opacity-0 group-hover:opacity-100 ease-in duration-200">
                {truncate(capitalizeString(image.prompt)!, 38)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
