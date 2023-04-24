"use client";
import { useState } from "react";
import BackpackEmpty from "./scenerios/BackpackEmpty";

export default function Backpack() {
  const [backpackEmpty, setBackpackEmpty] = useState(true);
  return <>{backpackEmpty && <BackpackEmpty />}</>;
}
