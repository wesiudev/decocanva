"use client";
import { useUserData } from "@/app/hooks/useUserData";
import { useEffect, useRef } from "react";
export default function RenderFromText() {
  const myCanvas = useRef();
  const { images, loading } = useUserData();
  function drawCanvas() {
    const context = myCanvas?.current?.getContext("2d");
    const image = new Image();
    image.src = images[0].src;
    image.onload = () => {
      context.drawImage(image, 0, 0, 500, 500);
    };
    const blob = myCanvas?.toBlob((blob) => {
      window.URL.createObjectUrl(blob);
    });
    console.log(blob);
  }
  return (
    <>
      <canvas ref={myCanvas} width={500} height={500} />
      <button onClick={drawCanvas}>merge</button>
    </>
  );
}
