"use client";
import { useUserData } from "@/app/hooks/useUserData";
import { updateUserHistory } from "@/common/firebase";
import { openai } from "@/common/openai/config";
import { useState } from "react";
import { FaImage } from "react-icons/fa";
import FirstGenerationPopup from "../../empty/FirstGenerationPopup";
export default function GenerateButton(props: any) {
  const {
    setIsGenerationPending,
    setImageLoaded,
    setImageResponse,
    setHasImage,
    hasImage,
    imageResponse,
    userPrompt,
    size,
    isGenerationPending,
    setIsGenerationTriggered,
    setIsError,
    isError,
    displayError,
  } = props;
  const { userData } = useUserData();

  const generateImage = async () => {
    let accountHistory;
    try {
      setIsError(false);
      setIsGenerationPending(true);
      setImageLoaded(false);
      const imageParameters: any = {
        prompt: userPrompt,
        //n: parseInt(number),
        n: 1,
        size: size,
        response_format: "b64_json",
      };
      const response = await openai.createImage(imageParameters);
      const image = response.data.data[0].b64_json;
      setImageResponse(image);
      if (response)
        accountHistory = {
          creationTime: Date.now(),
          action: "Rendered image",
        };
      updateUserHistory({
        email: userData.email,
        accountHistory: accountHistory,
      });
      setIsGenerationPending(false);
      setHasImage(true);
    } catch (error: any) {
      if (error.response)
        accountHistory = { creationTime: Date.now(), action: "Render failed" };
      updateUserHistory({
        email: userData.email,
        accountHistory: accountHistory,
      });
      setIsGenerationPending(false);
      setIsError(true);
      displayError(error.response.data.error.message);
    }
  };
  const handleImageGeneration = async () => {
    generateImage();
    setIsGenerationTriggered(true);
  };
  const [prompt, setUserPrompt] = useState<string>("");

  return (
    <>
      <textarea
        onChange={(e) => setUserPrompt(e.target.value)}
        value={prompt}
        placeholder="A sunshine on the desert with a smiling cactus, ultrarealistic, high resolution"
        className="text-gray-100 z-20 w-full p-2 rounded-md text-xl lg:text-xl min-h-[25vh] bg-purple-700 bg-opacity-80 placeholder:text-zinc-900 outline-none"
      />
      <GenerateButton
        handleImageGeneration={handleImageGeneration}
        setIsGenerationPending={setIsGenerationPending}
        setImageLoaded={setImageLoaded}
        setImageResponse={setImageResponse}
        setHasImage={setHasImage}
        setIsError={setIsError}
        userPrompt={userPrompt}
        size={size}
        hasImage={hasImage}
        isGenerationPending={isGenerationPending}
        imageResponse={imageResponse}
        setIsGenerationTriggered={setIsGenerationTriggered}
        displayError={displayError}
        isError={isError}
      />
    </>
  );
}
