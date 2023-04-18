"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/config";
import { redirect } from "next/navigation";
import { signOut } from "firebase/auth";
import Link from "next/link";
import { FaArrowAltCircleRight, FaPlus } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { useState } from "react";
export default function Backpack() {
  const [isWelcomeTextRendered, setWelcomeTextRendered] = useState(false);
  return (
    <>
      <div className="w-full from-zinc-900 to-purple-950 bg-gradient-to-br">
        <div className="w-full px-10 py-3 bg-purple-900 border-b-2">
          <div className="text-gray-100 text-2xl h-full">
            <Link href="/">Decocanva</Link>
          </div>
        </div>
        <div className="lg:w-[90vw] h-screen mx-auto flex flex-col lg:flex-row items-center">
          <div className="flex flex-col justify-evenly h-[60vh] w-4/5 lg:w-[50vw] pr-12">
            <div className="text-2xl text-gray-50 text-left">
              {!isWelcomeTextRendered && (
                <Typewriter
                  onInit={(typewriter: any) => {
                    typewriter
                      .typeString(
                        'Hello! It seems like you just joined <strong class="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent"> Decocanva</strong>.<br/>'
                      )

                      .typeString(
                        'Your <span class="text-purple-500">backpack</span> is empty...'
                      )

                      .callFunction(() => {
                        setTimeout(() => {
                          setWelcomeTextRendered(true);
                        }, 1000);
                      })
                      .start();
                  }}
                />
              )}
              {isWelcomeTextRendered && (
                <>
                  Hello! It seems like you just joined{" "}
                  <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                    {" "}
                    Decocanva
                  </strong>
                  .<br />
                  Your <span className="text-purple-500">backpack</span> is
                  empty...
                </>
              )}
            </div>
            <div className="text-left text-xl xl:text-2xl text-gray-50 w-full lg:w-2/3">
              {isWelcomeTextRendered && (
                <Typewriter
                  onInit={(typewriter: any) => {
                    typewriter
                      .typeString(
                        'Specify the scenerio for <span class="text-purple-500">AI</span> - tell it what you want to see and create your first <span class="text-purple-500">canva</span>'
                      )
                      .start();
                  }}
                />
              )}
            </div>

            {/* <button onClick={() => signOut(auth)}>logout</button> */}
          </div>
          <div className="w-4/5 lg:w-full h-[60vh] flex flex-col items-center lg:border-l-2 lg:border-pink-700 lg:pl-16">
            <div className="text-gray-50 text-3xl mx-auto w-max">
              Generate a new image
            </div>
            <div className="bg-opacity-50 w-full mt-12">
              <div className="flex flex-row justify-center w-full mx-auto">
                <FaArrowAltCircleRight className="w-5 h-5 mr-2 text-gray-50" />
                <textarea
                  placeholder="eg. A sunshine on the desert with a smiling cactus..."
                  className="w-full border border-black p-2 rounded-md xl:text-xl"
                />
              </div>
              <div className="w-full h-max">
                <div className="text-xl text-gray-50 flex flex-row items-center mt-5">
                  <FaPlus className="w-4 h-4 mr-3" />{" "}
                  <div>Add more prompts</div>
                </div>
              </div>
              <div className="w-full text-center mx-auto bg-transparent hover:bg-opacity-80 hover:bg-purple-800 border-2 border-white text-gray-50 hover:transition-transform cursor-pointer py-4 px-8 rounded-md text-2xl mt-8">
                Create canvas
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
