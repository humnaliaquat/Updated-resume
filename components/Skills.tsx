import React from "react";
import { plexMono } from "./HeroSection";
export default function Skills() {
  const skills = [
    { id: 1, name: "languages", items: ["JavaScript", "TypeScript", "C++"] },
    {
      id: 2,
      name: "frontend",
      items: ["Next.js", "React", "HTML/CSS", "Tailwind CSS"],
    },
    {
      id: 3,
      name: "backend",
      items: ["Node.js", "Express", "MongoDB", "JWT Auth"],
    },
    {
      id: 4,
      name: "ai_integrations",
      items: ["RAG pipeline", "Vector search", "LLM APIs"],
    },
    { id: 5, name: "data_and_ml", items: ["Python", "Pandas", "Scikit-learn"] },
  ];
  return (
    <section id="skills" className=" px-5 sm:px-8  pt-5 ">
      {" "}
      <div className="flex flex-col pb-5">
        {" "}
        {/* Label */}{" "}
        <div
          className={`${plexMono.className} text-sm   flex items-center gap-3 mb-6 sm:mb-7 `}
        >
          {" "}
          <span className="text-xs text-(--text-faint)"> 03 </span>{" "}
          <span className="text-(--text) font-bold text-lg sm:text-xl">
            {" "}
            skills.json{" "}
          </span>{" "}
        </div>{" "}
        {/* Skills */}{" "}
        <div className=" flex flex-col gap-4 sm:gap-5 md:gap-6 mt-3 sm:mt-5 border border-(--line) rounded-lg p-4 sm:p-5 md:p-6 bg-(--surface) ">
          {" "}
          {skills.map((skill) => (
            <div
              key={skill.id}
              className=" flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2 min-w-0 "
            >
              {" "}
              {/* Skill name */}{" "}
              <h3
                className={`${plexMono.className} text-xs sm:text-sm font-medium flex items-center gap-1.5 text-(--add) shrink-0 `}
              >
                {" "}
                <span>"{skill.name}"</span> <span>:</span>{" "}
              </h3>{" "}
              {/* Skill values */}{" "}
              <p
                className={`${plexMono.className} text-xs sm:text-sm text-(--text) leading-relaxed break-words min-w-0 `}
              >
                {" "}
                [{skill.items.join(", ")}]{" "}
              </p>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
