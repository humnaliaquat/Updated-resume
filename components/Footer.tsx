"use client";

import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export default function Footer() {
  return (
    <section
      id="contact"
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
        <span className="shrink-0 text-sm text-(--muted)">Contact</span>

        <div className="h-px flex-1 bg-(--muted)/25" />
      </div>

      {/* Main content */}
      <div className="relative mt-20 overflow-hidden">
        {/* Background number */}
        <span
          className="
            pointer-events-none
            absolute
            -right-2
            -top-12
            font-(family-name:--font-playfair)
            text-[180px]
            leading-none
            text-(--muted)/5
            md:text-[260px]
          "
        >
          03
        </span>

        <div className="relative">
          {/* Small label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-(--brass)" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-(--brass)
              "
            >
              Let's connect
            </span>
          </div>

          {/* Heading */}
          <h2
            className={` ${playfair.className} mt-7
              max-w-4xl
              font-(family-name:--font-playfair)
              text-4xl
              leading-[1.08]
              text-(--ink)
              sm:text-5xl
              md:text-7xl`}
          >
            Have a project in mind?
            <br />
            <span className="text-(--muted)">
              Let's build something useful.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-8
              max-w-lg
              text-sm
              leading-7
              text-(--muted)
              md:text-[15px]
            "
          >
            I'm currently open to web development internships and opportunities
            to work on thoughtful digital products. If you'd like to work
            together, I'd love to hear from you.
          </p>

          {/* Email CTA */}
          <a
            href="mailto:hamnaliaqat24@gmail.com"
            className="
              group
              mt-12
              flex
              w-fit
              items-center
              gap-4
              border-b
              border-(--ink)/25
              pb-3
              text-base
              text-(--ink)
              transition-all
              duration-300
              hover:border-(--brass)
              hover:text-(--brass)
              md:text-lg
            "
          >
            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-(--muted)/20
                transition-all
                duration-300
                group-hover:border-(--brass)
                group-hover:bg-(--brass)
                group-hover:text-(--panel)
              "
            >
              <Mail size={16} strokeWidth={1.4} />
            </span>

            <span>hamnaliaqat24@gmail.com</span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.4}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div
        className="
          mt-28
          border-t
          border-(--muted)/20
          pt-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-(--brass)" />

            <span className="text-xs text-(--muted)">
              © {new Date().getFullYear()} Hamna Liaquat
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-7">
            <a
              href="https://github.com/humnaliaquat"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                text-xs
                text-(--muted)
                transition-colors
                duration-300
                hover:text-(--brass)
              "
            >
              <FaGithub size={14} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/hamna-liaquat"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2
                text-xs
                text-(--muted)
                transition-colors
                duration-300
                hover:text-(--brass)
              "
            >
              <FaLinkedinIn size={14} />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Tiny closing line */}
        <div className="mt-10 flex items-center justify-between">
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-(--muted)/40
            "
          >
            Designed & built with intention
          </span>

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-(--muted)/40
            "
          >
            Lahore · Pakistan
          </span>
        </div>
      </div>
    </section>
  );
}
