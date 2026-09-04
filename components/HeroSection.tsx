import React from "react";
import { IBM_Plex_Mono } from "next/font/google";
import { Plus, Minus, MoveRight } from "lucide-react";
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
});
export default function HeroSection() {
  const data = [
    { id: 1, name: "STACK", skills: "MongoDB · Express · React · Node.js" },
    { id: 2, name: "FOCUS", skills: "TypeScript, Next.js" },
    {
      id: 3,
      name: "ALSO BUILDING WITH",
      skills: "RAG · vector search · LLM APIs",
    },
  ];
  return (
    <section className="px-52 py-5 mt-20  flex flex-col">
      {" "}
      {/* Label */}{" "}
      <div
        className={`${plexMono.className} text-sm text-(--text-muted) flex items-center gap-1.5 mb-5`}
      >
        {" "}
        <div className="w-3 h-3 rounded-full bg-(--line) flex items-center justify-center shrink-0">
          {" "}
          <div className="w-1.5 h-1.5 rounded-full bg-(--add)" />{" "}
        </div>{" "}
        <span>portfolio.diff</span>{" "}
      </div>{" "}
      {/* Diff Card */}{" "}
      <div className="flex flex-col border border-(--line) rounded-xl overflow-hidden mt-3">
        {" "}
        {/* Removed */}{" "}
        <div
          className={`${plexMono.className} bg-(--del-dim) border-l-2 border-(--del) px-6 py-4 flex gap-2 items-center text-xl text-[#9e8e8b]`}
        >
          {" "}
          <span className="text-(--del) shrink-0">
            {" "}
            <Minus className="w-4 h-4" />{" "}
          </span>{" "}
          <span className="line-through decoration-[#a05e51] font-medium">
            Computer Science student, still figuring it out
          </span>{" "}
        </div>{" "}
        {/* Added */}{" "}
        <div
          className={`${plexMono.className} bg-(--add-dim) border-l-2 border-(--add) px-6 py-4 flex gap-2 items-center text-xl`}
        >
          {" "}
          <span className="text-(--add) shrink-0">
            {" "}
            <Plus className="w-4 h-4" />{" "}
          </span>{" "}
          <span>
            Full-stack MERN developer building AI-integrated products
          </span>{" "}
        </div>{" "}
      </div>{" "}
      {/* Introduction */}{" "}
      <div className="mt-8 max-w-lg text-(--text-muted) leading-relaxed">
        {" "}
        <p>
          {" "}
          I'm Hamna, a BSCS graduate who builds with the{" "}
          <span className="text-(--text) font-semibold">
            {" "}
            MERN stack and TypeScript{" "}
          </span>{" "}
          and spends most of my free time wiring up{" "}
          <span className="text-(--text) font-semibold">AI features</span>: RAG
          pipelines, vector search, and predictive models. Currently looking for
          a web development internship where I can keep shipping things like the
          projects below.{" "}
        </p>{" "}
      </div>{" "}
      {/* Buttons */}{" "}
      <div className={`${plexMono.className} flex gap-4 mt-8`}>
        {" "}
        <button
          type="button"
          className="bg-(--add) text-(--bg) font-medium px-5 py-3 rounded-lg text-sm hover:shadow-white transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 cursor-pointer"
        >
          {" "}
          <span>View Projects</span> <MoveRight className="w-4 h-4" />{" "}
        </button>{" "}
        <button
          type="button"
          className="border border-(--line) font-medium text-(--text) text-sm px-5 py-3 rounded-lg hover:border-(--add) hover:text-(--add) cursor-pointer transition-all duration-300 hover:-translate-y-1"
        >
          {" "}
          Get in touch{" "}
        </button>{" "}
      </div>{" "}
      <div className="mt-12 text-sm grid grid-cols-3 border border-(--line) rounded-lg overflow-hidden">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2  border-r border-(--line)  p-6 last:border-r-0"
          >
            <p className="text-(--text-muted) text-xs">{item.name}</p>
            <p className={`${plexMono.className} text-(--text) font-medium`}>
              {item.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
