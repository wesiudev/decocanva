import { getAllImages } from "@/common/firebase";
import { NextResponse } from "next/server";

export async function GET() {
  const images = await getAllImages(50)
  return NextResponse.json(images);
}