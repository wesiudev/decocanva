"use client";
import { auth } from "@/firebase/config";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);

  if (!user) {
    redirect("/auth");
  }
  if (user)
    return (
      <>
        <div>Hello</div>
        <Link href="/dashboard/backpack">Backpack</Link>
      </>
    );
}
