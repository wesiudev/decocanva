"use client";
import { FaArrowAltCircleRight, FaArrowLeft, FaPlus } from "react-icons/fa";
import GenerateButton from "../../empty/GenerateButton";
import { useState } from "react";
import { CreateImageRequestSizeEnum } from "openai";
import FirstGenerationPopup from "../../empty/FirstGenerationPopup";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";
import { useUserData } from "../../../hooks/useUserData";
export const ImageGenerator = () => {
  const { images, userData } = useUserData();

  const [isGenerationPending, setIsGenerationPending] =
    useState<boolean>(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [size, setSize] = useState<CreateImageRequestSizeEnum>("1024x1024");
  const [hasImage, setHasImage] = useState(false);
  const [imageResponse, setImageResponse] = useState("");
  const [isError, setIsError] = useState<boolean | string>("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isGenerationTriggered, setIsGenerationTriggered] = useState(false);
  const displayError = (errorMessage: any) => {
    toast.error(errorMessage, {
      onClose: () => (setIsError(false), setIsGenerationTriggered(false)),
    });
  };

  return;
};
