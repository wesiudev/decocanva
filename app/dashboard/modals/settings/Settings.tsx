import { FaCog } from "react-icons/fa";

export const SettingsModal = () => {
  return (
    <div className="sm:mt-0 flex flex-col bg-purple-700  text-gray-100 p-6">
      <div className="text-2xl sm:text-3xl flex flex-row items-center">
        <FaCog className="mr-1" /> Account
      </div>
      <div className="border-t-2 border-purple-600 mt-4 mb-2" />
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
  );
};
