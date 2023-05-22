import { getAllImages } from "@/common/firebase";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const apiKey = process.env.API_KEY;
  if (req.headers.authorization === apiKey) {
    const images = await getAllImages(50)
    return NextResponse.json(images);
  }else{
    return NextResponse.json({error: "Auth failed"})
  }

    

}