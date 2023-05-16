import Image from "next/image";

interface BackpackThumbnail {
  src: string;
}

export default function BackpackImageThumbnail(props: BackpackThumbnail) {
  const { src } = props;
  return (
    <Image
      priority={true}
      className="w-full"
      width={512}
      height={512}
      src={src}
      alt=""
    />
  );
}
