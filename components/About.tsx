import React from "react";
import { IBM_Plex_Mono } from "next/font/google";
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});
export default function About() {
  return (
    <section
      id="about"
      className=" px-5
          sm:px-8 py-5 "
    >
      {" "}
      <div className=" border-t border-b border-(--line) py-5 px-0 sm:px-4 md:px-6 flex flex-col ">
        {" "}
        {/* Label */}{" "}
        <div
          className={`${plexMono.className} text-sm flex items-center gap-3 mb-8 sm:mb-10 `}
        >
          {" "}
          <span className="text-xs text-(--text-faint)"> 01 </span>{" "}
          <span className="text-(--text) font-bold text-lg sm:text-xl">
            {" "}
            about.md{" "}
          </span>{" "}
        </div>{" "}
        {/* About Content */}{" "}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start ">
          {" "}
          {/* About */}{" "}
          <div className=" text-(--text-muted) flex flex-col gap-4 leading-relaxed text-sm sm:text-base ">
            {" "}
            <p>
              {" "}
              I recently completed my{" "}
              <span className="text-(--text) font-semibold">
                {" "}
                BSCS at Virtual University of Pakistan{" "}
              </span>{" "}
              , and I learn best by building. Most of what I know about
              full-stack development and AI integration has come from shipping
              real, if small, projects rather than just taking courses.{" "}
            </p>{" "}
            <p>
              {" "}
              I like the{" "}
              <span className="text-(--text) font-semibold">
                {" "}
                MERN stack{" "}
              </span>{" "}
              for how quickly I can go from an idea to a working product. I've
              been especially drawn to the AI layer on top of it — turning
              documents into searchable knowledge and using LLMs to automate
              things developers usually do by hand, like reviewing pull
              requests.{" "}
            </p>{" "}
            <p>
              {" "}
              At this stage of my career, I'm a{" "}
              <span className="text-(--text) font-semibold">
                {" "}
                fresh graduate{" "}
              </span>{" "}
              . What I can bring to the table is an open mind, the ability to
              iterate quickly, and a genuine focus on UX/UI even while I'm still
              growing as a developer.{" "}
            </p>{" "}
          </div>{" "}
          {/* Status Card */}{" "}
          <div
            className={`${plexMono.className} self-start w-full text-(--text-muted) flex flex-col gap-3 border border-(--line) text-xs sm:text-sm bg-(--surface) rounded-xl p-4 sm:p-5 md:p-6 overflow-hidden `}
          >
            {" "}
            <p className="break-words">
              {" "}
              // <span className="text-(--add)">status</span>: open to
              internships{" "}
            </p>{" "}
            <p className="break-words">
              {" "}
              // <span className="text-(--add)">education</span>: BSCS, Virtual
              University of Pakistan (completed){" "}
            </p>{" "}
            <p className="break-words">
              {" "}
              // <span className="text-(--add)">strengths</span>: MERN,
              TypeScript, AI integration{" "}
            </p>{" "}
            <p className="break-words">
              {" "}
              // <span className="text-(--add)">interests</span>: RAG pipelines,
              vector search, dev tooling{" "}
            </p>{" "}
            <p className="break-words">
              {" "}
              // <span className="text-(--add)">approach</span>: learn by
              shipping{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
