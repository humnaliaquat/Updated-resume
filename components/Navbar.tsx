import React from "react";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});
export default function Navbar() {
  const linksData = [
    { id: 1, name: "about", href: "#about" },
    { id: 2, name: "projects", href: "#projects" },
    { id: 3, name: "skills", href: "#skills" },
    { id: 4, name: "contact", href: "#contact" },
  ];
  return (
    <nav
      className={`${plexMono.className} py-5 px-64 flex justify-between items-center border-b border-(--line)`}
    >
      <Link href={"/"} className="text-[14px] flex items-center font-bold">
        hamna.<p className="text-(--add)">dev</p>
      </Link>
      <div className="flex gap-8 items-center text-(--text-muted)">
        {linksData.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="text-sm hover:text-(--text)"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
