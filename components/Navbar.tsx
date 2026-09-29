"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      } else {
        // Scrolling down
        setShowNavbar(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        flex
        items-center
        justify-between

        pt-10

        px-5
        py-5

        sm:px-8
        md:px-12
        lg:px-28
        xl:px-36

        transition-transform
        duration-500
        ease-out

        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* Logo */}
      <Link
        href="/"
        className={`
          ${playfair.className}
          text-lg
          font-medium
          tracking-tight
          text-(--ink)

          sm:text-xl
          md:text-2xl
        `}
      >
        Hamna Liaquat
      </Link>

      {/* Navigation */}
      <div
        className="
    hidden
    sm:flex
    items-center
    gap-6
    md:gap-8
  "
      >
        <Link
          href="#about"
          className="
            text-xs
            text-(--muted)
            transition-colors
            duration-300
            hover:text-(--brass)

            sm:text-sm
          "
        >
          About
        </Link>

        <Link
          href="#projects"
          className="
            text-xs
            text-(--muted)
            transition-colors
            duration-300
            hover:text-(--brass)

            sm:text-sm
          "
        >
          Projects
        </Link>

        <Link
          href="#contact"
          className="
            text-xs
            text-(--muted)
            transition-colors
            duration-300
            hover:text-(--brass)

            sm:text-sm
          "
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
