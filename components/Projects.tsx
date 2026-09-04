import React from "react";
import { plexMono } from "./HeroSection";
import { MoveUpRight, Plus } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      num: "i",
      isFyp: false,
      name: "NoteWise",
      href: "https://github.com/humnaliaquat/NoteWise",
      description:
        "A RAG-based knowledge assistant that lets users upload their documents and ask questions about them in natural language. It searches the most relevant information from the documents and uses an LLM to generate clear, context-aware answers.",
      info: [
        {
          name: "search_service.py",
          description: "Pinecone vector database for semantic retrieval",
        },
        {
          name: "chunking_service.py",
          description:
            "Splits documents into smaller chunks for embedding and retrieval",
        },
        {
          name: "chat_service.py",
          description:
            "Processes user questions and generates answers using an LLM",
        },
      ],
      skills: [
        "Python",
        "Pinecone",
        "OpenAI API",
        "TypeScript",
        "Next.js",
        "MongoDB",
        "RAG",
      ],
    },

    {
      id: 2,
      num: "ii",
      isFyp: true,
      name: "Food Demand Forecasting",
      href: "https://github.com/humnaliaquat/SCM-Forcaster-FYP",
      description:
        "An AI-powered forecasting system that helps restaurants predict future customer demand based on historical sales data. It provides daily and weekly demand forecasts to help reduce food waste, avoid overstocking, and make better inventory planning decisions.",
      info: [
        {
          name: "data_pipeline.py",
          description:
            "Cleans, normalizes, and transforms historical sales data for modeling",
        },
        {
          name: "forecast_models.py",
          description:
            "Uses Linear Regression, ARIMA, and LSTM models to forecast future demand",
        },
        {
          name: "app.py",
          description:
            "Streamlit application with authentication, interactive dashboards, and predictions",
        },
      ],
      skills: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Time Series Forecasting",
        "Streamlit",
        "TensorFlow",
        "SQLite",
      ],
    },

    {
      id: 3,
      num: "iii",
      isFyp: false,
      name: "TaskBoard",
      href: "https://github.com/humnaliaquat/task-project-manager",
      description:
        "A full-stack task and project management application that helps users organize projects, create and track tasks, and monitor their progress from one dashboard. It includes secure authentication, task statistics, and a responsive interface with dark and light themes.",
      info: [
        {
          name: "controllers/",
          description:
            "Express route handlers for tasks, projects, and user authentication",
        },
        {
          name: "models/",
          description:
            "Mongoose models for users, projects, and tasks stored in MongoDB",
        },
        {
          name: "Dashboard.tsx",
          description:
            "Displays task statistics, project progress, charts, and theme controls",
        },
      ],
      skills: [
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Auth",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section id="projects" className="px-52  ">
      <div className=" border-b border-(--line)  flex flex-col  pb-7">
        {/* Label */}{" "}
        <div
          className={`${plexMono.className} text-sm  px-6  flex items-center gap-3.5 mb-7`}
        >
          {" "}
          <span className="text-xs text-(--text-faint)">02</span>
          <span className="text-(--text) font-bold text-xl">
            projects/
          </span>{" "}
        </div>{" "}
        {/* Projects */}
        <div className="flex flex-col gap-6 mt-5">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="
        group relative overflow-hidden
        rounded-2xl
        border border-(--line)
        bg-(--surface)
        transition-all duration-300
        hover:border-(--add)
        
      "
            >
              {/* subtle top accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-(--add) transition-all duration-500 group-hover:w-full" />

              {/* Header */}
              <div className="flex items-start justify-between gap-6 px-6 py-6">
                <div className="flex items-start gap-4">
                  <span
                    className={`${plexMono.className} mt-1 text-xs text-(--add)`}
                  >
                    {project.num}.
                  </span>

                  <div className="flex flex-col gap-1">
                    <h2
                      className={`${plexMono.className} text-lg font-medium text-(--text) flex items-center gap-5`}
                    >
                      {project.name}
                      {project.isFyp && (
                        <span
                          className={`
          ${plexMono.className}
          inline-flex items-center
          rounded-full
          border border-(--add)/30
          bg-(--add-dim)
          px-2.5 py-1
          text-[10px] font-medium
          tracking-wider
          text-(--add)
        `}
                        >
                          FINAL YEAR PROJECT
                        </span>
                      )}
                    </h2>
                  </div>
                </div>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
            group/link
            flex shrink-0 items-center gap-2
            rounded-lg
            border border-(--line)
            px-4 py-2
            text-sm text-(--text-muted)
            transition-all duration-200
            hover:border-(--add)
            hover:bg-(--add-dim)
            hover:text-(--add)
          "
                >
                  View project
                  <MoveUpRight
                    className="
              h-3 w-3
              transition-transform duration-200
              group-hover/link:translate-x-0.5
              group-hover/link:-translate-y-0.5
            "
                  />
                </Link>
              </div>

              {/* Description */}
              <div className="px-6 pb-6">
                <p className="max-w-2xl text-sm leading-6 text-(--text-muted)">
                  {project.description}
                </p>
              </div>

              {/* Project details */}
              <div className="border-y border-(--line) bg-(--add-dim)">
                {project.info.map((info, index) => (
                  <div
                    key={index}
                    className="
              flex flex-col gap-2
              border-b border-(--line)
              px-6 py-4
              last:border-b-0
              sm:flex-row sm:items-center
            "
                  >
                    <div
                      className={`${plexMono.className} flex min-w-40 items-center gap-3 text-sm text-(--text)`}
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded border border-(--add)/30 text-(--add)">
                        <Plus className="h-3 w-3" />
                      </span>

                      {info.name}
                    </div>

                    <span className="text-sm leading-5 text-(--text-muted)">
                      {info.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 px-6 py-5">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="
              rounded-md
              border border-(--line)
              px-3 py-1.5
              text-xs text-(--text-muted)
              transition-colors duration-200
              
            "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
