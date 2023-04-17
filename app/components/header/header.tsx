"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { auth } from "../../../firebase/config";
import { useState } from "react";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  const [user, loading] = useAuthState(auth);
  const [isNavOpen, setNavOpen] = useState(false);
  return (
    <>
      <header className="bg-gradient-to-r from-zinc-900 via-white-900 to-purple-800 fixed left-0 top-0 w-screen z-40">
        <div className="sm:w-4/5 lg:w-3/4 mx-auto flex flex-row justify-between py-2 px-3 lg:px-0">
          <div className="flex flex-row w-max h-max">
            <Link
              href="/"
              className="flex items-center text-gray-100 lg:text-2xl text-xl py-2"
            >
              decocanva
            </Link>
          </div>
          <ul className="flex flex-row items-center text-gray-100">
            <li className="mx-3">Shop</li>
            <li className="mx-3">Blog</li>
            <li className="mx-3">About</li>
          </ul>
          <div
            onClick={() => setNavOpen(!isNavOpen)}
            className="cursor-pointer flex flex-row justify-center items-center"
          >
            {!user && (
              <Link href="/auth">
                <div className="flex flex-row items-center">
                  {" "}
                  <FaSignInAlt className="mr-2 h-7 w-7 text-gray-50" />
                  <span className="text-gray-50">Sign in</span>
                </div>
              </Link>
            )}
            {user && (
              <Link href="/dashboard">
                <div className="flex flex-row items-center  text-gray-50">
                  <FaUser className="mr-2 h-6 w-6" />
                  <span>My account</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
