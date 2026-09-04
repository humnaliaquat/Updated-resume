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
    <section id="skills" className="px-52 pt-5  ">
      <div className="  flex flex-col  pb-5">
        {/* Label */}{" "}
        <div
          className={`${plexMono.className} text-sm  px-6  flex items-center gap-3.5 mb-7`}
        >
          {" "}
          <span className="text-xs text-(--text-faint)">03</span>
          <span className="text-(--text) font-bold text-xl">
            skills.json
          </span>{" "}
        </div>{" "}
        {/* Skills */}
        <div
          className="flex flex-col gap-6 mt-5 border border-(--line) rounded-lg p-6 z-20
        bg-(--surface)"
        >
          {skills.map((skill) => (
            <div key={skill.id} className="flex flex-col gap-2">
              <h3
                className={`${plexMono.className} text-sm font-medium  flex items-center gap-2 text-(--add)`}
              >
                "{skill.name}" <p>:</p>
                <p className="text-(--text)">[{skill.items.join(", ")}]</p>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
