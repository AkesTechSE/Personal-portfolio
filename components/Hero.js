"use client";

import Image from "next/image";

export default function Hero() {
  const quickStats = [
    { number: "6+", label: "Projects shipped" },
    { number: "4+", label: "Years building" },
    { number: "10+", label: "Core tools" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-36 lg:min-h-screen lg:pt-40"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(45,212,191,0.14) 0%, transparent 34%), radial-gradient(circle at 80% 20%, rgba(96,165,250,0.08) 0%, transparent 24%)",
        }}
      />

      <div className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-4xl">
            <p className="section-label mb-5">Hi, my name is</p>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl">
              Aklilu Abera.
            </h1>
            <h2 className="mt-4 max-w-none text-3xl font-semibold tracking-tight text-slate-400 sm:text-4xl lg:text-5xl lg:whitespace-nowrap">
              I build things for the web.
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-slate-300/75 sm:text-lg">
              I'm a software engineer focused on building clear, reliable digital experiences. I work across frontend, backend, and AI to turn practical ideas into polished products.
            </p>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-teal-400/60 bg-transparent px-7 py-3 text-sm font-medium text-teal-200 transition-colors hover:border-teal-300 hover:bg-teal-400/10"
              >
                Check out my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-sm font-medium text-slate-300/70 transition-colors hover:text-slate-100"
              >
                Let's talk about your project
              </a>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              {quickStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/8 bg-white/3 px-5 py-4 backdrop-blur-sm"
                >
                  <div className="font-mono text-2xl text-teal-300">{stat.number}</div>
                  <div className="mt-1 text-sm text-slate-300/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal-400/20 via-cyan-400/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1728] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.38)]">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07111f]">
                <Image
                  src="/projects/profile.png"
                  alt="Aklilu Abera portrait"
                  fill
                  priority
                  className="object-cover object-top"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-transparent opacity-30" />
              </div>

              <div className="mt-4 flex items-center justify-between gap-4 px-1 pb-1">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-300/45">Profile</p>
                  <p className="mt-1 text-lg font-semibold text-slate-100">Aklilu Abera</p>
                </div>
                <div className="rounded-full border border-teal-400/25 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-200">
                  Available for new work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
