import Header from "../components/header/header";
import { FaPhone } from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <Header />
      <div className="overflow-hidden relative flex flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-purple-900 min-h-screen w-screen">
        <div className="opacity-80 absolute -left-[15%] -top-[15%] bg-purple-900 h-[80vh] w-[80vh] rounded-full"></div>
        <div className="flex flex-row w-3/4 mx-auto items-center">
          <div className="h-[70vh] w-full lg:w-3/4 flex flex-col justify-evenly z-30 px-10">
            <div className="text-gray-50 text-3xl flex flex-row">
              <div className="rotate-12">
                <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rounded-sm" />
                <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
              </div>
              <span className="ml-3">Contact</span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-50 text-xl">
                Email address
              </label>
              <input
                type="text"
                id="email"
                className="w-full mt-3 rounded-md outline-none border-2 focus:border-blue-900 py-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-50 text-xl">
                Message
              </label>
              <textarea
                id="message"
                className="w-full lg:w-full mt-3 rounded-md outline-none border-2 focus:border-blue-900 py-2"
              />
            </div>
            <button className="bg-purple-700 p-3 rounded-md text-gray-50 hover:bg-purple-600">
              Send it
            </button>
          </div>
          <div className="w-max">
            <div className="hidden lg:flex items-center justify-center z-20 opacity-70 bg-gradient-to-br from-purple-900 to-purple-500 h-[35vw] w-[35vw] rounded-full shadow-sm shadow-black">
              <FaPhone className="w-1/2 h-1/2 text-white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
