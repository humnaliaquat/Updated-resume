"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { Menu, X } from "lucide-react";
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linksData = [
    { id: 1, name: "about", href: "#about" },
    { id: 2, name: "projects", href: "#projects" },
    { id: 3, name: "skills", href: "#skills" },
    { id: 4, name: "contact", href: "#contact" },
  ];
  return (
    <nav
      className={`${plexMono.className} relative py-5 px-5 sm:px-8 md:px-12 lg:px-64 flex justify-between items-center border-b border-(--line) `}
    >
      {" "}
      {/* Logo */}{" "}
      <Link href="/" className="text-[14px] flex items-center font-bold">
        {" "}
        hamna.<span className="text-(--add)">dev</span>{" "}
      </Link>{" "}
      {/* Desktop Navigation */}{" "}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center text-(--text-muted)">
        {" "}
        {linksData.map((item) => (
          <Link
            href={item.href}
            key={item.id}
            className="text-sm group relative hover:text-(--text) transition-colors"
          >
            {" "}
            {item.name}{" "}
            <span className=" absolute left-0 -bottom-1 h-px w-0 bg-(--add) transition-all duration-500 group-hover:w-full " />{" "}
          </Link>
        ))}{" "}
      </div>{" "}
      {/* Mobile Menu Button */}{" "}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-(--text) hover:text-(--add) transition-colors"
        aria-label="Toggle navigation menu"
      >
        {" "}
        {isOpen ? <X size={22} /> : <Menu size={22} />}{" "}
      </button>{" "}
      {/* Mobile Navigation */}{" "}
      {isOpen && (
        <div className=" absolute top-full left-0 w-full md:hidden bg-(--surface) border-b border-(--line) px-5 py-6 flex flex-col gap-5 z-50 ">
          {" "}
          {linksData.map((item) => (
            <Link
              href={item.href}
              key={item.id}
              onClick={() => setIsOpen(false)}
              className=" text-sm text-(--text-muted) hover:text-(--text) transition-colors "
            >
              {" "}
              {item.name}{" "}
            </Link>
          ))}{" "}
        </div>
      )}{" "}
    </nav>
  );
}
