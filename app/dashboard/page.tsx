"use client";
import { auth } from "@/common/firebase";
import { FaSignOutAlt, FaUser, FaWallet } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { SettingsModal } from "./modals/settings/Settings";
import { GalleryModal } from "./modals/gallery/Gallery";
import { BackpackModal } from "./modals/backpack/Backpack";
import { useUserData } from "../hooks/useUserData";
import Loading from "./loading";
import { redirect } from "next/navigation";
import InfoHover from "../components/infohover/infohover";

export default function Dashboard() {
  const { images, user, loading } = useUserData();
  function logout() {
    signOut(auth);
  }
  if (!user && !loading) {
    redirect("/auth");
  }
  return (
    <>
      {(!images || loading) && <Loading />}
      {images && !loading && (
        <div className="mx-auto w-[90vw] pt-12">
          <div className="text-gray-50 text-4xl flex flex-row w-full">
            <div className="ml-2">
              <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
              <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="ml-3 text-2xl sm:text-3xl">Dashboard</div>
              {user && (
                <button
                  className="flex flex-row items-center text-lg sm:text-xl"
                  onClick={logout}
                >
                  <FaSignOutAlt className="mt-1 mr-1" /> Sign out
                </button>
              )}
            </div>
          </div>
          <div className="w-[90vw] mt-12">
            <div className="w-full text-lg sm:text-xl lg:text-3xl bg-purple-700 text-gray-100 p-3 sm:p-5 ">
              <div className="flex flex-row items-center justify-between w-full">
                <div className="flex flex-row items-center">
                  <FaUser className="mr-1 text-2xl" />
                  {user?.displayName ? user?.displayName : user?.email}
                </div>
              </div>
              <div className="border-t-2 border-purple-600 mt-4 mb-2" />
              <div className="min-h-[35vh] sm:min-h-[25vh] ">
                <span className="flex flex-row items-center relative w-max">
                  <FaWallet className="text-white h-6 w-6 mr-1 mt-1 z-40" />{" "}
                  {/* TODO z-index of the element based on current step of the tutorial  */}
                  <span className="text-gray-100 flex flex-row items-center z-40">
                    300RP
                  </span>{" "}
                  {/* {dashboard.tutorials.wallet === "todo" && <InfoHover
                    title="Account balance"
                    description="Each render has its own price. You can earn Render Points daily by being active user. There's also a shop where you can buy them."
                    side="L"
                  />} */}
                </span>
                <span className="font-light italic"></span>
              </div>
            </div>
            <div className={`grid grid-cols-1 gap-y-6 sm:gap-6 w-full mt-6`}>
              <BackpackModal images={images} />
              <GalleryModal />
              <SettingsModal />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
