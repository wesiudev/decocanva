"use client";
import { useEffect, useState } from "react";
import BackpackEmpty from "./scenerios/BackpackEmpty";
import { getAllImages } from "@/firebase";
export default function Backpack() {
  const [backpackEmpty, setBackpackEmpty] = useState(false);

  useEffect(() => {
    getAllImages();
  }, []);

  return (
    <>
      {backpackEmpty && <BackpackEmpty />}
      {!backpackEmpty && <div></div>}
    </>
  );
}
