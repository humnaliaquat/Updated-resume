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

export default function Projects() {
  const projectsData = [
    {
      id: "01",
      name: "NoteWise",
      description:
        "An AI-powered note-taking app that helps users organize, summarize, and interact with their notes through intelligent document-based assistance.",
      type: "AI / Full Stack",
    },
    {
      id: "02",
      name: "SCM Forecaster",
      description:
        "A machine learning application that analyzes food supply data and forecasts future demand to help restaurants and small canteens plan inventory.",
      type: "Machine Learning",
    },
    {
      id: "03",
      name: "PlanOra",
      description:
        "A full-stack productivity platform for creating, managing, and tracking tasks and projects, helping users stay organized and on schedule.",
      type: "MERN Stack",
    },
  ];

  return (
    <section
      className="
       pt-10
        px-5
        sm:px-8
        md:px-12
        lg:px-28
      "
      id="projects"
    >
      {/* Section heading */}
      <div className="flex items-center gap-5">
        <span className="shrink-0 text-sm text-(--muted)">Selected Work</span>

        <div className="h-px flex-1 bg-(--muted)/25" />
      </div>

      {/* Projects */}
      <div className="mt-16">
        {projectsData.map((project) => (
          <article
            key={project.id}
            className="
              group
              border-b border-(--muted)/15
              pb-14
              mb-14
              last:mb-0 last:border-none
            "
          >
            {/* Project header */}
            <div
              className="
                flex flex-col
                gap-5
                md:flex-row
                md:items-end
                md:justify-between
              "
            >
              {/* Left */}
              <div className="flex items-start gap-5">
                {/* Number */}
                <span
                  className="
                    mt-2
                    text-[10px]
                    tracking-[0.25em]
                    text-(--brass)
                  "
                >
                  {project.id}
                </span>

                {/* Name + description */}
                <div>
                  <div className="flex items-center gap-2">
                    <h2
                      className={`${playfair.className}
                        font-(family-name:--font-playfair)
                        text-3xl
                        leading-none
                        text-(--ink)
                        transition-transform
                        duration-300
                        md:text-4xl
                        group-hover:translate-x-1
                      `}
                    >
                      {project.name}
                    </h2>

                    <ArrowUpRight
                      size={19}
                      strokeWidth={1.4}
                      className="
                        text-(--brass)
                        opacity-0
                        -translate-x-2
                        translate-y-1
                        transition-all
                        duration-300
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-4
                      max-w-2xl
                      text-sm
                      leading-7
                      text-(--muted)
                      md:text-[15px]
                    "
                  >
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Type */}
              <span
                className="
                  ml-9
                  w-fit
                  shrink-0
                  border-b
                  border-(--muted)/30
                  pb-1
                  text-[10px]
                  uppercase
                  tracking-[0.15em]
                  text-(--muted)
                  transition-colors
                  duration-300
                  group-hover:border-(--brass)
                  group-hover:text-(--brass)
                  md:ml-0
                "
              >
                {project.type}
              </span>
            </div>

            {/* Preview */}
            <div
              className="
            relative
            mt-10
            h-72
            overflow-hidden
            border
            border-(--muted)/15
            bg-(--muted)/5
            transition-all
            duration-500
            group-hover:border-(--brass)/40
            md:h-96
"
            >
              {/* Background grid */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.12]
                  [background-image:linear-gradient(to_right,var(--muted)_1px,transparent_1px),linear-gradient(to_bottom,var(--muted)_1px,transparent_1px)]
                  [background-size:60px_60px]
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-(--muted)/40
                    transition-colors
                    duration-300
                    group-hover:text-(--brass)/70
                  "
                >
                  <span className="h-px w-8 bg-current" />

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.3em]
                    "
                  >
                    View Project
                  </span>

                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </div>
              </div>

              {/* Project number */}
              <span
                className="
                  absolute
                  bottom-4
                  right-5
                  font-(family-name:--font-playfair)
                  text-4xl
                  text-(--muted)/10
                "
              >
                {project.id}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
