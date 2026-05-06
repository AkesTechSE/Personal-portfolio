"use client";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about", section: "about", number: "01" },
    { label: "Skills", href: "#skills", section: "skills", number: "02" },
    { label: "Work", href: "#projects", section: "projects", number: "03" },
    { label: "Contact", href: "#contact", section: "contact", number: "04" },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.25em] text-slate-100"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/70 text-sky-300 shadow-[0_0_0_1px_rgba(56,189,248,0.12)]">
            A
          </span>
          <span className="hidden sm:block">AKLILU ABERA</span>
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  activeSection === item.section
                    ? "text-sky-300"
                    : "text-slate-300/70 hover:text-slate-100"
                }`}
              >
                <span className="mr-2 font-mono text-sky-300/80">{item.number}.</span>
                {item.label}
              </a>
            ))}
            <a
              href="/api/resume"
              className="rounded-md border border-sky-400/60 px-4 py-2 text-sm font-medium text-sky-200 transition-colors hover:border-sky-300 hover:bg-sky-400/10"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#07111f] px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`block py-2 text-sm tracking-wide transition-colors duration-300 ${
                activeSection === item.section
                  ? "text-sky-300"
                  : "text-slate-300/70 hover:text-slate-100"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="mr-2 font-mono text-sky-300/80">{item.number}.</span>
              {item.label}
            </a>
          ))}
          <a
            href="/api/resume"
            className="mt-3 inline-flex rounded-md border border-sky-400/60 px-4 py-2 text-sm font-medium text-sky-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}