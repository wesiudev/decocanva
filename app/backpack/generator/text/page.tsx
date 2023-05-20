"use client";
import { BsBodyText } from "react-icons/bs";
import { FaArrowRight, FaInfoCircle } from "react-icons/fa";
import { Step, TutorialWindow } from "../components/TutorialWindow";
import { tutorial } from "./tutorial.json";
import { useState } from "react";
export default function RenderFromText() {
  const [isTutorialOpen, setTutorialOpen] = useState(false);
  return (
    <>
      <TutorialWindow
        steps={tutorial}
        tutorialHeadline="Render From Text"
        isTutorialOpen={isTutorialOpen}
        setTutorialOpen={setTutorialOpen}
      />
      <div className="w-3/4 mx-auto font-sans min-h-[90vh] flex items-center relative ">
        <BsBodyText className="text-gray-50 w-[80px] h-[80px] sm:h-[15vw] sm:w-[15vw] lg:w-[125px] lg:h-[125px] opacity-20 absolute -left-[20px] top-10 sm:-left-[40px] sm:top-[50px]" />
        <div className="text-white  text-3xl h-max flex flex-col">
          <span>Render an image from text</span>
          <span className="w-[70vw] sm:w-[50vw] lg:w-[30vw] mt-6 text-xl italic font-light">
            With this tool, you can bring your ideas to life by generating
            images based on your description.
          </span>
          <div className="flex flex-col-reverse sm:flex-col">
            <button className="mt-6 sm:mt-12 w-max px-7 py-4 rounded-lg z-50 bg-gradient-to-tr from-rose-500  to-purple-950 hover:from-rose-500 hover:to-purple-900 duration-75 ease-in shadow-sm shadow-purple-950">
              Start rendering
            </button>
            <button
              onClick={() => setTutorialOpen(true)}
              className="flex flex-row items-center group mt-6 sm:mt-8 w-max"
            >
              <FaInfoCircle className="text-gray-50 w-5 h-5 mr-1" />
              <div className="text-lg w-max outline-white border-white italic font-light">
                Tutorial
              </div>
              <FaArrowRight className="invisible w-3 h-3 ml-2 group-hover:scale-150 group-hover:translate-x-1 group-hover:visible ease-in duration-75" />
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-12 h-12 w-12 rounded-full bg-purple-500 bg-opacity-30 hue-rotate-30"></div>
        <div className="absolute -bottom-10 -left-6 h-[60px] w-[60px] rotate-45 bg-purple-500 bg-opacity-30 hue-rotate-60"></div>
      </div>
    </>
  );
}
