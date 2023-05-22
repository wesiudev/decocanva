import { setBrowseImages } from "@/common/redux/slices/imagesSlice";
import { store } from "@/common/redux/store";
import SSRImageGrid from "./components/SSRImagesGrid";
import Link from "next/link";

export default async function BrowseImages() {
  const req = await fetch("http://localhost:3000/api/images");
  const data = await req.json();
  store.dispatch(setBrowseImages(data));
  return (
    <div className="flex flex-col font-sans items-center align-middle">
      <header className="flex flex-row w-[90vw] sm:w-3/4 items-center">
        <div className="grid grid-cols-2 gap-3 text-white">
          <Link
            href="/"
            className="bg-purple-600 px-2 py-3 flex items-center justify-center"
          >
            Homepage
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100092608192165"
            className="bg-purple-600 px-2 py-3 flex items-center justify-center"
          >
            Facebook
          </Link>
          <Link
            href=""
            className="bg-purple-600 px-2 py-3 flex items-center justify-center"
          >
            Instagram
          </Link>
          <Link
            href=""
            className="bg-purple-600 px-2 py-3 flex items-center justify-center"
          >
            Twitter
          </Link>
        </div>
        <span className="text-9xl font-bold">Decocanva</span>
      </header>
      <SSRImageGrid />
    </div>
  );
}
