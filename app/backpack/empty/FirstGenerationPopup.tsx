import React from "react";
import Typewriter from "typewriter-effect";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { addImage, auth, getUserImages, storage } from "@/common/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import { toast } from "react-toastify";
import { Msg } from "./MsgSuccess";
import { FaImage } from "react-icons/fa";
import { redirect } from "next/navigation";
import { setImages } from "@/common/redux/slices/imagesSlice";
import { useDispatch } from "react-redux";

export default function FirstGenerationPopup(props: any) {
  const {
    isGenerationTriggered,
    setIsGenerationTriggered,
    isLoading,
    hasImage,
    imageResponse,
    userPrompt,
    imageLoaded,
    setImageLoaded,
    displayError,
    setHasImage,
    isError,
  } = props;
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();

  const saveImage = async () => {
    if (hasImage)
      try {
        const id = toast.loading(
          <span className="font-sans">Saving an image...</span>
        );
        //in pseudo randomness we trust 🙏
        const pseudoRandomName = Math.floor(
          Math.random() * 9999 * 100
        ).toString();
        const imageRef = ref(storage, `image-${pseudoRandomName}`);
        uploadString(imageRef, imageResponse, "base64", {
          contentType: "text/plain",
        }).then(
          () =>
            getDownloadURL(imageRef).then((url) => {
              addImage({
                author: user?.email,
                comments: [],
                creationTime: Date.now(),
                isPublic: true,
                likes: 0,
                prompt: userPrompt,
                src: url,
              }),
                setHasImage(false);
              toast.update(id, {
                render: Msg,
                type: "success",
                isLoading: false,
                closeOnClick: true,
                autoClose: 5000,
                onClose: () => (
                  getUserImages(user).then((res) => dispatch(setImages(res))),
                  setHasImage(false),
                  setIsGenerationTriggered(false),
                  redirect("/backpack")
                ),
              });
            }),
          setIsGenerationTriggered(false)
        );
      } catch (err: any) {
        displayError(err.message);
      }
  };
  function closePopup() {
    setIsGenerationTriggered(false);
    setHasImage(false);
  }
  return (
    <>
      {isGenerationTriggered && userPrompt.length && (
        <div className="z-50 fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-black bg-opacity-80 ">
          <div className="h-max sm:w-max w-[90vw] bg-purple-950 rounded-xl px-3 sm:px-12 flex flex-col justify-evenly">
            {hasImage && (
              <div className="w-full flex justify-center flex-col text-center">
                <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent text-3xl sm:text-4xl pb-2 pt-1">
                  <FaImage className="mr-3 text-3xl" />
                  Congratulations!
                </strong>
                <span className="text-2xl sm:text-2xl mx-auto text-gray-100 text-center py-2">
                  You just generated your first{" "}
                  <strong className="text-purple-600"> canva</strong>!
                </span>
              </div>
            )}
            {!hasImage && (
              <div className="w-full flex justify-center flex-col text-center">
                <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent text-3xl sm:text-4xl pb-2 pt-1">
                  <FaImage className="mr-3 text-3xl" />
                  Rendering ...
                </strong>
                <span className="text-2xl sm:text-2xl mx-auto text-gray-100 text-center py-2">
                  Your image is almost ready.
                </span>
              </div>
            )}

            <div className="w-[90%] sm:w-3/4 flex items-center justify-center mx-auto">
              {!isLoading && (
                <Image
                  width={512}
                  height={512}
                  src={`data:image/png;base64,${imageResponse}`}
                  alt={userPrompt}
                  className="w-[80%] sm:max-w-[350px] sm:max-h-[350px] lg:w-[650px] lg:h-[650px] my-5"
                  style={{ display: imageLoaded ? "block" : "none" }}
                  onLoad={() => setImageLoaded(true)}
                />
              )}
              {!imageLoaded && (
                <div className="bg-purple-800 rounded-md h-[33vh] w-[350px] text-2xl text-gray-50 flex justify-center items-center text-center mx-auto mt-5 mb-10">
                  <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          `We are <span class="text-purple-500">working</span> on it...`
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString(
                          'Your <span class="text-purple-500">image</span> is almost done...'
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Just a second...")
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                </div>
              )}
            </div>
            <div className="w-[90%] flex justify-evenly sm:justify-between mx-auto">
              {hasImage && (
                <>
                  <button
                    onClick={closePopup}
                    className="w-max bg-red-800 hover:bg-red-700 py-3 rounded-md text-gray-100 text-xl lg:text-2xl px-6 sm:px-12 my-5"
                  >
                    Decline.
                  </button>
                  <button
                    onClick={saveImage}
                    className="w-max bg-green-800 hover:bg-green-700 py-3 rounded-md text-gray-100 text-xl lg:text-2xl px-6 sm:px-12 my-5"
                  >
                    Save!
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
