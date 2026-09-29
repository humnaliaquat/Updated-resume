import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Playfair_Display, Google_Sans } from "next/font/google";
import MouseFollower from "@/components/MouseFollower";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const googleSans = Google_Sans({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hamna Liaqat",
  description: "My portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${googleSans.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {" "}
        <Navbar />
        <MouseFollower />
        {children}
      </body>
    </html>
  );
}
