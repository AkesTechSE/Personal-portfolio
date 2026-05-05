"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Spam Classifier",
      description:
        "Machine learning system that accurately identifies and filters spam messages using NLP techniques and Python.",
      category: "AI/ML",
      gradient: "from-green-500 to-blue-500",
      stack: ["Python", "TensorFlow", "NLP", "Scikit-learn", "Pandas"],
      image: "/projects/spam.jpg",
      link: "https://spam-classifier-cmzr.onrender.com",
    },
    {
      title: "Library Management System",
      description:
        "Comprehensive library management solution with book tracking, user management, and analytics dashboard.",
      category: "Full Stack",
      gradient: "from-purple-500 to-pink-500",
      stack: ["Next.js", "MongoDB", "Express"],
      image: "/projects/library.jpg",
      link: "https://yourwebsite.com/library-system",
    },
    {
      title: "Audio Streaming Site",
      description:
        "Modern audio streaming platform with real-time playback, user playlists, and admin panel.",
      category: "Full Stack",
      gradient: "from-orange-500 to-red-500",
      stack: ["React", "Node.js", "MongoDB"],
      image: "/projects/audio.jpg",
      link: "https://react-audiostreamapp-1.onrender.com",
    },
    {
      title: "Simple Blog Site",
      description:
        "Clean and responsive blog platform with markdown support and authentication.",
      category: "Full Stack",
      gradient: "from-blue-500 to-teal-500",
      stack: ["Next.js", "PostgreSQL"],
      image: "/projects/blog.jpg",
      link: "https://yourwebsite.com/blog",
    },
    {
      title: "Child and Women Protection System",
      description:
        "A web-based system designed to manage cases related to child and women protection efficiently.",
      category: "Full Stack",
      gradient: "from-yellow-500 to-red-500",
      stack: ["React js","PHP Laravel", "MySQL"],
      image: "/projects/child_dashboard.jpg",
      link: "https://perpetrators.et/",
    },
  ];

  const stackIcons = {
    Python: "🐍",
    JavaScript: "⚡",
    React: "⚛️",
    "Next.js": "▲",
    "Node.js": "🟢",
    MongoDB: "🍃",
    PostgreSQL: "🐘",
    MySQL: "🐬",
    Django: "🌿",
    Laravel: "🐘",
    NLP: "🧠",
    "Machine Learning": "🤖",
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.08),transparent_28%),radial-gradient(circle_at_90%_15%,rgba(59,130,246,0.08),transparent_22%)]" />
      <div className="section-shell">
        <div className="mb-14 text-center">
          <p className="section-label">03. Work</p>
          <h2 className="section-heading mt-4">Selected projects with practical outcomes.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300/70 sm:text-base">
            A handful of projects that combine product thinking, clean interfaces, and practical delivery.
          </p>
        </div>

        {/* PROJECTS GRID */}
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1728] shadow-[0_24px_90px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/25 hover:shadow-[0_28px_100px_rgba(0,0,0,0.35)] ${
                index === 0 ? 'lg:col-span-7' : 'lg:col-span-5'
              }`}
            >
              <div className="relative overflow-hidden">
                {/* Gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

                {/* Project image */}
                  <div className={`relative ${index === 0 ? 'h-72 sm:h-80' : 'h-56 sm:h-60'}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-75" />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07111f] to-transparent opacity-90" />
                  <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-[#07111f]/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.3em] text-slate-100/80 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-100/80 backdrop-blur-md">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-100 transition-colors group-hover:text-teal-300">
                    {project.title}
                  </h3>
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-slate-300/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                  </svg>
                </div>

                <p className="mb-5 flex-1 text-sm leading-7 text-slate-300/70 sm:text-[0.98rem]">
                  {project.description}
                </p>

                <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-slate-300/45">
                  <span className="h-px flex-1 bg-white/10" />
                  <span>{index === 0 ? 'Featured case study' : 'Selected case study'}</span>
                  <span className="h-px flex-1 bg-white/10" />
                </div>

                {/* STACK */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200/80 transition-colors group-hover:border-teal-400/25 group-hover:bg-teal-400/10 group-hover:text-slate-100"
                    >
                      <span>{stackIcons[tech] || "•"}</span>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-300/45">
                    {index === 0 ? 'Featured work' : 'Selected work'}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-all hover:border-teal-400/30 hover:bg-teal-400/10 hover:text-teal-200"
                  >
                    <span>View Project</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8m9 0v9" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
