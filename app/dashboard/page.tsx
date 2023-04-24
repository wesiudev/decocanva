"use client";
import { auth } from "@/firebase/config";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/header/header";
import {
  FaArchive,
  FaPlus,
  FaSignOutAlt,
  FaUser,
  FaCog,
  FaImages,
} from "react-icons/fa";
import { signOut } from "firebase/auth";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);
  if (!user) {
    redirect("/auth");
  }
  if (user)
    return (
      <>
        <Header />
        <div className="overflow-hidden relative bg-gradient-to-br from-zinc-900 to-purple-900 min-h-screen w-full pb-24">
          <div className="mx-auto w-[90vw] mt-28 ">
            <div className="text-gray-50 text-4xl flex flex-row w-full">
              <div className="ml-2">
                <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
                <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
              </div>
              <div className="flex flex-col">
                <div className="ml-3">Dashboard</div>
                <div className="h-[2px] w-12 bg-purple-600 mt-12 bg-opacity-60"></div>
              </div>
            </div>
            <div className="w-[90vw] mt-12">
              <div className="w-full text-xl sm:text-2xl lg:text-3xl bg-purple-700 text-gray-100 p-6 ">
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-row items-center">
                    <FaUser className="mr-1" />
                    {user.displayName ? user.displayName : user.email}
                  </div>
                  <div>
                    <button
                      className="flex flex-row items-center"
                      onClick={() => signOut(auth)}
                    >
                      <FaSignOutAlt className="mt-1 mr-1" /> Sign out
                    </button>
                  </div>
                </div>
                <div className="border-t-2 border-purple-600 mt-2 mb-2" />
                <div className="min-h-[35vh] sm:min-h-[25vh] ">
                  <strong className="bg-gradient-to-r from-purple-300 to-rose-400 bg-clip-text text-transparent font-medium">
                    Balance
                  </strong>
                  : 1$
                </div>
              </div>
              <div className="grid grid-rows gap-y-6 sm:grid-cols-2 sm:grid-rows-1 sm:gap-6 lg:grid-cols-3  w-full mt-6">
                <div className="sm:mt-0 flex flex-col bg-purple-700  text-gray-100 p-6">
                  <div className="text-2xl sm:text-3xl flex flex-row items-center">
                    <FaArchive className="w-7 h-7 mr-1 mt-1" /> Backpack
                  </div>
                  <div className="border-t-2 border-purple-600 mt-2 mb-2" />
                  <div className="text-xl text-gray-400 mt-1 min-h-[20vh]">
                    Your backpack is empty
                  </div>
                  <div className="mt-20 h-full w-full flex items-end">
                    <Link
                      href="/dashboard/backpack"
                      className="w-full h-12 bg-purple-950 hover:bg-opacity-90 flex items-center justify-center font-light"
                    >
                      <FaPlus className="mr-1" /> Add items
                    </Link>
                  </div>
                </div>
                <div className="sm:mt-0 flex flex-col bg-purple-700  text-gray-100 p-6">
                  <div className="text-2xl sm:text-3xl flex flex-row items-center">
                    <FaImages className=" mr-1 mt-1" /> Gallery
                  </div>
                  <div className="border-t-2 border-purple-600 mt-2 mb-2" />
                  <div className="text-xl text-gray-400 mt-1">
                    Your gallery is empty
                  </div>
                  <div className="mt-20 h-full w-full flex items-end">
                    <Link
                      href="/dashboard/backpack"
                      className="w-full h-12 bg-purple-950 hover:bg-opacity-90 flex items-center justify-center font-light"
                    >
                      <FaPlus className="mr-1" /> Add items
                    </Link>
                  </div>
                </div>
                <div className="sm:mt-0 flex flex-col bg-purple-700  text-gray-100 p-6">
                  <div className="text-2xl sm:text-3xl flex flex-row items-center">
                    <FaCog className="mr-1" /> Account
                  </div>
                  <div className="border-t-2 border-purple-600 mt-2 mb-2" />
                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="text-gray-100 bg-purple-950 hover:bg-purple-900 p-3 cursor-pointer">
                      Email
                    </div>
                    <div className="text-gray-100 bg-purple-950 hover:bg-purple-900 p-3 cursor-pointer">
                      Password
                    </div>
                    <div className="text-gray-100 bg-purple-950 hover:bg-purple-900 p-3 cursor-pointer">
                      Privacy
                    </div>
                  </div>
                  <div className="mt-20 h-full w-full flex items-end">
                    <button className="w-full h-12 bg-red-500 hover:bg-red-400 flex items-center justify-center font-light">
                      Delete account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <Link href="/dashboard/backpack">Backpack</Link> */}
      </>
    );
}
