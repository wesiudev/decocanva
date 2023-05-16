import { Providers } from "@/common/redux/Provider";
import "../styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`font-sans ${montserrat.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
