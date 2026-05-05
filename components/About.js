export default function About() {
  const expertiseAreas = [
    { 
      name: 'Frontend Development', 
      icon: '💻',
      description: 'Modern web applications with React, Next.js, and responsive design',
      technologies: ['React', 'Next.js', 'HTML5', 'CSS3', 'JavaScript']
    },
    { 
      name: 'Backend Development', 
      icon: '⚙️',
      description: 'Robust server-side solutions with Node.js, Express, Python, and ASP.NET Core MVC',
      technologies: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'ASP.NET Core MVC']
    },
    { 
      name: 'Database Management', 
      icon: '🗄️',
      description: 'Efficient data storage and retrieval with various database systems',
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL']
    },
    { 
      name: 'AI & Machine Learning', 
      icon: '🤖',
      description: 'Intelligent systems and data analysis with Python and ML frameworks',
      technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'NLP']
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="section-shell">
        <div className="mb-14 text-center">
          <p className="section-label">01. About</p>
          <h2 className="section-heading mt-4">Built with care, shipped with clarity.</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-10">
            <h3 className="text-2xl font-semibold text-slate-100">My Journey</h3>
            <div className="mt-6 space-y-5 text-slate-300/75 leading-8">
              <p>
                I’m an AI and full-stack software engineer who enjoys making complex ideas feel simple and dependable for the people using them.
              </p>
              <p>
                My work spans frontend interfaces, backend systems, and AI-enabled features, so I can shape a product from the first sketch to the final deployment.
              </p>
              <p>
                I care about structure, readability, and polish. The result should feel calm, useful, and easy to trust.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-teal-400/15 bg-teal-400/5 p-4 text-center">
                <div className="font-mono text-2xl text-teal-300">6+</div>
                <div className="mt-1 text-sm text-slate-300/70">Projects</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/4 p-4 text-center">
                <div className="font-mono text-2xl text-slate-100">10+</div>
                <div className="mt-1 text-sm text-slate-300/70">Technologies</div>
              </div>
              <div className="rounded-2xl border border-teal-400/15 bg-teal-400/5 p-4 text-center">
                <div className="font-mono text-2xl text-teal-300">Full</div>
                <div className="mt-1 text-sm text-slate-300/70">Stack</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {expertiseAreas.map((area, index) => (
              <div 
                key={index} 
                className="group h-full rounded-2xl border border-white/10 bg-[#0b1728] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400/30 hover:bg-[#0f1d33]"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex-shrink-0 text-3xl transition-transform duration-300 group-hover:scale-110">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-100">{area.name}</h3>
                  </div>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-300/70">
                    {area.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {area.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}