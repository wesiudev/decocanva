"use client";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900", "300", "400", "700", "900"],
  variable: "--font-merriweather",
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`font-sans ${merriweather.variable} font-normal w-full min-h-full from-zinc-900 to-purple-950 bg-gradient-to-br`}
    >
      {children}
    </div>
  );
}
