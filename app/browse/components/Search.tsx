import { BsSearch } from "react-icons/bs";
export const Search = () => {
  return (
    <div className="w-full mx-auto h-12 mb-6">
      <div className="flex flex-row h-full items-center">
        <input
          type="text"
          className="cursor-pointer hover:bg-purple-500 h-full sm:w-2/4 lg:w-1/4 focus:w-1/2 ease-in duration-150 text-white bg-purple-600 p-3 outline-none rounded-l-md placeholder:text-white"
          placeholder="Search for images"
        />
        <button className="h-full bg-purple-600 flex items-center px-4 rounded-r-md relative hover:bg-purple-700">
          <BsSearch className="h-2/4 w-max text-white px-2" />
        </button>
      </div>
    </div>
  );
};
