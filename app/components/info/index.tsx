import { BsInfoCircleFill } from "react-icons/bs";

export default function Info() {
  return (
    <div className="flex flex-row items-center">
      <BsInfoCircleFill className="h-5 w-5 mr-2" />
      In order to share your images, you have to switch your profile settings to
      public.
    </div>
  );
}
