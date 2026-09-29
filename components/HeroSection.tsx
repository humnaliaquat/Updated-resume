import React from "react";
import { ArrowDown } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function HeroSection() {
  return (
    <section
      className="
        mt-28
       
        flex
        flex-col
        items-center
        px-5
        text-center

        sm:mt-32
        sm:mb-28
        sm:px-8

        md:mt-40
        md:mb-32
        md:px-12

        lg:px-28
      "
    >
      {/* Intro label */}
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="h-px w-5 bg-(--brass) sm:w-8" />

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-(--brass)

            sm:text-[10px]
            sm:tracking-[0.3em]
          "
        >
          Full-stack Developer
        </span>

        <span className="h-px w-5 bg-(--brass) sm:w-8" />
      </div>

      {/* Main heading */}
      <h1
        className={`
          ${playfair.className}
          mt-7
          max-w-5xl
          text-4xl
          font-medium
          leading-[1.08]
          tracking-tight
          text-(--ink)

          sm:mt-8
          sm:text-5xl

          md:text-6xl

          lg:text-7xl
        `}
      >
        Building digital
        <br />
        experiences that matter.
      </h1>

      {/* Description */}
      <p
        className="
          mt-6
          max-w-xl
          text-sm
          leading-6
          text-(--muted)

          sm:mt-8
          sm:max-w-2xl
          sm:text-base
          sm:leading-7

          md:text-lg

          lg:text-xl
        "
      >
        I build <span className="text-(--brass)">full-stack</span> web
        applications and <span className="text-(--brass)">AI-powered</span>{" "}
        solutions with a focus on clean interfaces and useful functionality.
      </p>

      {/* Scroll indicator */}
      <div
        className="
          mt-12
          flex
          flex-col
          items-center
          gap-3
          text-(--muted)/60

          sm:mt-14
          md:mt-16
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.25em]

            sm:text-[9px]
            sm:tracking-[0.3em]
          "
        >
          Scroll to explore
        </span>

        <ArrowDown
          size={14}
          strokeWidth={1.2}
          className="animate-bounce sm:h-3.5 sm:w-3.5"
        />
      </div>
    </section>
  );
}
