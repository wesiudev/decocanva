import { ImageProps, ImagesArray } from "@/types";
import Image from "next/image";

export default function ImagesGrid({ images }: { images: ImageProps[] }) {
  return (
    <>
      <div className="grid grid-cols-4 w-[90vw] sm:w-3/4 gap-3 mx-auto">
        {images?.map((image: ImageProps, idx: number) => (
          <div key={image.prompt}>
            {image.prompt}
            <Image width={512} height={512} src={image.src} alt="" key={idx} />
          </div>
        ))}
      </div>
    </>
  );
}
