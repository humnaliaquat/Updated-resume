"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function About() {
  return (
    <section
      id="about"
      className="
    pt-10
        px-5
        sm:px-8
        md:px-12
        lg:px-28
      "
    >
      {/* Section heading */}
      <div className="flex items-center gap-5">
        <span className="shrink-0 text-sm text-(--muted)">About</span>

        <div className="h-px flex-1 bg-(--muted)/25" />
      </div>

      {/* Main content */}
      <div
        className="
          mt-14
          grid
          gap-14
          md:grid-cols-[1.5fr_1fr]
          md:gap-20
        "
      >
        {/* Introduction */}
        <div>
          <h2
            className={`${playfair.className} mt-5
              max-w-3xl
              font-(family-name:--font-playfair)
              text-3xl
              leading-tight
              text-(--ink)
              md:text-5xl
            `}
          >
            I build thoughtful digital experiences with a focus on clean
            interfaces and useful functionality.
          </h2>

          <div
            className="
              mt-7
              max-w-2xl
              space-y-4
              text-sm
              leading-7
              text-(--muted)
              md:text-[15px]
            "
          >
            <p>
              I'm a Full-stack Developer with a background in Computer Science.
              I enjoy turning ideas into practical, well-designed web
              applications.
            </p>

            <p>
              My main stack includes React, Next.js, Node.js, Express and
              MongoDB. I'm also exploring AI-powered applications, RAG systems
              and ways to integrate intelligent features into modern web
              experiences.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            {/* Contact */}
            <a
              href="#contact"
              className="
      inline-flex
      items-center
      gap-2
      text-sm
      text-(--ink)
      transition-colors
      duration-300
      hover:text-(--brass)
    "
            >
              Let's work together
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download
              className="
      inline-flex
      items-center
      gap-2
      border-b
      border-(--muted)/30
      pb-1
      text-sm
      text-(--muted)
      transition-all
      duration-300
      hover:border-(--brass)
      hover:text-(--brass)
    "
            >
              Download Resume
              <ArrowUpRight size={15} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        {/* Details */}
        <div className="md:pt-10">
          {/* Currently exploring */}
          <div className="border-t border-(--muted)/20 py-6">
            <span
              className="
        text-[10px]
        uppercase
        tracking-[0.2em]
        text-(--muted)/60
      "
            >
              Currently exploring
            </span>

            <ul className="mt-5 space-y-3 text-sm text-(--ink)">
              <li className="transition-colors duration-300 hover:text-(--brass)">
                AI Integration
              </li>

              <li className="transition-colors duration-300 hover:text-(--brass)">
                RAG & LLM Applications
              </li>

              <li className="transition-colors duration-300 hover:text-(--brass)">
                Full-stack Development
              </li>
            </ul>
          </div>

          {/* Core Stack */}
          <div className="border-y border-(--muted)/20 py-8">
            <div className="flex items-center justify-between">
              <span
                className="
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-(--muted)/60
        "
              >
                Core Stack
              </span>

              <span className="text-[10px] text-(--brass)">07</span>
            </div>

            {/* Main stack */}
            <div className="mt-7 flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "TypeScript",
                "Tailwind CSS",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`
            border
            px-3
            py-2
            text-xs
            transition-all
            duration-300
            ${
              index < 4
                ? `
                  border-(--brass)/30
                  text-(--ink)
                  hover:border-(--brass)
                  hover:bg-(--brass)/5
                  hover:text-(--brass)
                `
                : `
                  border-(--muted)/20
                  text-(--muted)
                  hover:border-(--brass)/50
                  hover:text-(--brass)
                `
            }
          `}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlight */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-8 bg-(--brass)" />

              <span
                className="
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-(--muted)
        "
              >
                Building with modern web technologies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
