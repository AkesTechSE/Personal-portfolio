"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function Projects() {
  const [startIndex, setStartIndex] = useState(0);

  const projects = [
    {
      title: "Spam Classifier",
      date: "Sat, 24 October 2025",
      description:
        "Machine learning system that accurately identifies and filters spam messages using NLP techniques.",
      tools: ["Python", "TensorFlow", "Scikit-learn", "NLP"],
      image: "/projects/spam.jpg",
      link: "https://spam-classifier-cmzr.onrender.com",
    },
    {
      title: "Library Management System",
      date: "Sat, 20 May 2025",
      description:
        "Comprehensive library management solution with book tracking, user management, and analytics dashboard.",
      tools: ["Next.js", "MongoDB", "Express"],
      image: "/projects/library.jpg",
      link: "https://yourwebsite.com/library-system",
    },
    {
      title: "Audio Streaming Site",
      date: "Fri, 14 November 2025",
      description:
        "Modern audio streaming platform with real-time playback, user playlists, and an admin panel.",
      tools: ["React", "Node.js", "MongoDB"],
      image: "/projects/audio.jpg",
      link: "https://react-audiostreamapp-1.onrender.com",
    },
    {
      title: "Simple Blog Site",
      date: "Mon, 09 September 2025",
      description:
        "Clean and responsive blog platform with markdown support and user authentication.",
      tools: ["Next.js", "PostgreSQL"],
      image: "/projects/blog.jpg",
      link: "https://yourwebsite.com/blog",
    },
    {
      title: "Child and Women Protection System",
      date: "Wed, 02 July 2025",
      description:
        "Web-based system to manage cases related to child and women protection efficiently.",
      tools: ["React", "Laravel", "MySQL"],
      image: "/projects/child_dashboard.jpg",
      link: "https://perpetrators.et/",
    },
  ];

  const visibleProjects = useMemo(() => {
    const items = [];
    for (let i = 0; i < 3; i += 1) {
      items.push(projects[(startIndex + i) % projects.length]);
    }
    return items;
  }, [projects, startIndex]);

  const goPrev = () => {
    setStartIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goNext = () => {
    setStartIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="projects" className="relative overflow-hidden bg-[#07111f] py-24">
      <div className="section-shell">
        <div className="mb-10 text-center">
          <p className="section-label">03. Work</p>
          <h4 className="section-heading mt-4">Selected projects with practical outcomes.</h4>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <button
            type="button"
            aria-label="Previous projects"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-20 -translate-x-12 -translate-y-1/2 text-slate-300/70 transition-colors hover:text-slate-100"
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid gap-6 md:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.title}
                className="group flex min-h-[500px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1728] shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-1"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block h-52 bg-slate-900/20"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-2"
                    unoptimized
                  />
                </a>
                <div className="flex flex-1 flex-col border-t border-white/10 px-5 py-5 text-center">
                  <h4 className="text-lg font-medium leading-tight text-slate-100">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300/70">{project.date}</p>

                  <p className="mt-3 text-xs leading-5 text-slate-200/85">{project.description}</p>

                  <div className="mt-3 flex flex-wrap justify-center gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={`${project.title}-${tool}`}
                        className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-medium text-slate-100"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-orange-600"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next projects"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-20 translate-x-12 -translate-y-1/2 text-slate-300/70 transition-colors hover:text-slate-100"
          >
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
