export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Aklilu27/",
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.931 0-1.309.469-2.381 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.137 3 .404 2.289-1.552 3.294-1.23 3.294-1.23.655 1.653.243 2.873.12 3.176.77.841 1.235 1.913 1.235 3.222 0 4.61-2.807 5.625-5.48 5.921.43.37.823 1.102.823 2.222v3.293c0 .321.216.694.825.577C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/akliluabera/',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/channel/UCc6bl8h7fEAKHCM9oV9HjOg',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~01ef05b09a4e009492?mp_source=share',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.068.679 2.307 1.049 3.686 1.049 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
        </svg>
      )
    }
    
    
  ];

  return (
    <footer className="border-t border-white/10 bg-[#06101c]">
      <div className="section-shell py-10">
        <div className="grid md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-teal-300">
              About Me
            </h3>
            <p className="text-sm leading-relaxed text-slate-300/70">
              Passionate Full-Stack & AI Engineer with expertise in JavaScript, React, Python, and machine learning.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-teal-300">
              Contact Info
            </h3>
            <div className="space-y-2 text-sm text-slate-300/70">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:akililuabera44@gmail.com" className="hover:text-foreground transition-colors">
                  akililuabera44@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+251909630346" className="hover:text-foreground transition-colors">
                  +251 909 630346
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>ArbaMinch, Ethiopia</span>
              </div>
            </div>
          </div>
{/* Social Links */}
<div>
  <h3 className="mb-3 text-lg font-bold text-teal-300">
    Connect With Me
  </h3>
  <div className="grid grid-cols-2 gap-3">
    {socialLinks.map((social, index) => (
      <a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center space-x-2 rounded-lg border border-white/10 bg-white/5 p-2 text-sm transition-all duration-300 hover:border-teal-400/25 hover:bg-teal-400/10"
      >
        <div className="text-teal-300 transition-colors group-hover:text-teal-200">
          {social.icon}
        </div>
        <span className="text-slate-300/70 transition-colors group-hover:text-slate-100">
          {social.name}
        </span>
      </a>
    ))}
  </div>
</div>
</div>

{/* Copyright */}
<div className="mt-8 border-t border-white/10 pt-6 text-center">
  <p className="text-sm text-slate-300/60">
    © 2024 - {new Date().getFullYear()} Aklilu Abera. All rights reserved.
  </p>
</div>
</div>
</footer>
)
}
