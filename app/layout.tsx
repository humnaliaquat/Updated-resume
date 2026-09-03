import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});

export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hamna Liaqat",
  description: "My portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {" "}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
