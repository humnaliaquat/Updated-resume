import React from "react";
import { plexMono } from "./HeroSection";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="contact"
      className="flex flex-col px-4 sm:px-6 md:px-10 lg:px-52 mb-10 sm:mb-14 mt-12"
    >
      {/* CTA */}
      <div
        className="
          z-20
          flex flex-col items-center justify-center
          gap-3
          rounded-xl
          border border-(--line)
          bg-(--surface)
          px-5 py-10
          sm:px-8 sm:py-12
        "
      >
        <h1
          className={`
            ${plexMono.className}
            text-center
            text-xl sm:text-2xl
            font-bold
            text-(--text)
          `}
        >
          Let's build something.
        </h1>

        <p
          className="
            max-w-2xl
            text-center
            text-xs sm:text-sm
            leading-5 sm:leading-6
            text-(--text-muted)
          "
        >
          Looking for a web development internship or a full-time position.
          Happy to talk about MERN, AI integration, or anything in between.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-4
            flex w-full
            flex-col
            items-stretch
            justify-center
            gap-3
            sm:w-auto
            sm:flex-row
            sm:items-center
          "
        >
          <Link
            href="mailto:hamnaliaqat24@gmail.com"
            className="
              flex items-center justify-center gap-2
              rounded-lg
              bg-(--add)
              px-5 py-3
              text-sm font-medium
              text-(--bg)
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            Email me
          </Link>

          <Link
            href="https://www.linkedin.com/in/hamna-liaquat-9b51a2275/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2
              rounded-lg
              border border-(--line)
              px-5 py-3
              text-sm font-medium
              text-(--text)
              transition-all duration-300
              hover:-translate-y-1
              hover:border-(--add)
              hover:text-(--add)
            "
          >
            LinkedIn
            <MoveUpRight className="h-3 w-3" />
          </Link>

          <Link
            href="https://github.com/humnaliaquat"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2
              rounded-lg
              border border-(--line)
              px-5 py-3
              text-sm font-medium
              text-(--text)
              transition-all duration-300
              hover:-translate-y-1
              hover:border-(--add)
              hover:text-(--add)
            "
          >
            GitHub
            <MoveUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`
          ${plexMono.className}
          mt-6
          text-center
          text-[10px] sm:text-xs
          text-(--text-muted)
        `}
      >
        built by Hamna · {new Date().getFullYear()}
      </div>
    </section>
  );
}
