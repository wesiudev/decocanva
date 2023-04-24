import React from "react";
import "./ImageContainer.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function ImageContainer({
  isLoading,
  hasImage,
  imageUrl,
  userPrompt,
  imageLoaded,
  setImageLoaded,
}) {
  return (
    <>
      {hasImage && (
        <div className="z-50 fixed h-screen w-screen top-0 left-0  flex items-center justify-center bg-black bg-opacity-80 ">
          <div className="h-[90%] w-[95vw] bg-purple-950  rounded-xl px-6 lg:px-24 flex flex-col justify-evenly">
            <div className="w-full flex justify-center">
              <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent text-3xl sm:text-4xl py-2">
                Congratulations!
              </strong>
            </div>
            <div className="text-2xl sm:text-2xl mx-auto text-gray-100 text-center py-2">
              You just generated your first{" "}
              <strong className="text-purple-600"> canva</strong>!
            </div>

            <div className="w-3/4 flex items-center justify-center mx-auto">
              {!isLoading && (
                <motion.img
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={imageUrl}
                  alt={userPrompt}
                  className="lg:w-[450px] lg:h-[450px] py-5 "
                  onLoad={() => setImageLoaded(true)}
                  style={{ display: imageLoaded ? "block" : "none" }}
                />
              )}
              {!imageLoaded && (
                <div className="bg-purple-800 h-full w-full text-2xl text-gray-50 flex justify-center items-center text-center mx-auto">
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          `We are <span class="text-purple-500">working</span> on it...`
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          'Your <span class="text-purple-500">image</span> is almost done...'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Just a second...")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </div>
              )}
            </div>
            <div className="w-full flex justify-center ">
              <button className="w-max bg-green-800 hover:bg-green-700 px-5 py-6 sm:py-3 rounded-md text-gray-100 text-xl sm:text-3xl ">
                Okay!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
