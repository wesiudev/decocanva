"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/config";
import { redirect } from "next/navigation";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { FaArrowAltCircleRight, FaPlus } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import Header from "@/app/components/header/header";
export default function Backpack() {
  return (
    <>
      <div className="w-full from-zinc-900 to-purple-950 bg-gradient-to-br mt-[72px] lg:mt-0">
        <Header />
        <div className="lg:w-[90vw] h-screen mx-auto flex flex-col lg:flex-row items-center ">
          <div className="flex flex-col justify-evenly h-[60vh] w-4/5 lg:w-[50vw] lg:pr-12">
            <div className="text-3xl text-gray-50 text-center sm:text-center sm:text-4xl lg:text-left lg:text-2xl  mx-auto">
              <div className="mx-auto">
                Hello! It seems like you just joined{" "}
                <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                  Decocanva
                </strong>{" "}
                and your <span className="text-purple-500">backpack</span> is
                empty.
              </div>
            </div>
            <div className="text-center lg:text-left text-2xl sm:text-3xl text-gray-50 w-full">
              Specify the scenerio for{" "}
              <span className="text-purple-500">AI</span> - tell it what you
              want to see on your first{" "}
              <span className="text-purple-500">canva</span>.
            </div>

            {/* <button onClick={() => signOut(auth)}>logout</button> */}
          </div>
          <div className="w-4/5 lg:w-full h-[60vh] flex flex-col items-center lg:border-l lg:border-purple-400 lg:pl-16">
            <div className="text-gray-50 text-3xl w-full text-left ">
              Generate a new image
            </div>
            <div className="bg-opacity-50 w-full mt-12">
              <div className="flex flex-row justify-center w-full mx-auto">
                <FaArrowAltCircleRight className="w-5 h-5 mr-2 text-gray-50" />
                <textarea
                  placeholder="A sunshine on the desert with a smiling cactus, ultrarealistic, high resolution"
                  className="w-full border border-black p-2 rounded-md xl:text-xl"
                />
              </div>
              <div className="w-full h-max">
                <div className="text-xl text-gray-50 flex flex-row items-center mt-5">
                  <FaPlus className="w-4 h-4 mr-3" />{" "}
                  <div>Add more prompts</div>
                </div>
              </div>
              <div className="w-full text-center mx-auto bg-purple-800 hover:bg-purple-700 text-gray-50 hover:transition-transform cursor-pointer py-4 px-8 rounded-md text-2xl mt-8">
                Create canvas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
