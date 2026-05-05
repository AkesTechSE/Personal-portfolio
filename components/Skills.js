export default function Skills() {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'Python', level: 88 },
    { name: 'ASP.NET Core MVC', level: 72 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js/Express', level: 82 },
    { name: 'HTML5/CSS3', level: 95 },
    { name: 'Laravel', level: 78 },
    { name: 'Machine Learning', level: 80 },
    { name: 'Natural Language Processing', level: 75 }
  ];

  const databases = [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 }
  ];

  const frameworks = [
    'Next.js', 'React', 'Express.js', 'Django', 'ASP.NET Core MVC', 'Tailwind CSS',
    'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'
  ];

  return (
    <section id="skills" className="py-24 bg-white/2">
      <div className="section-shell">
        <div className="mb-14 text-center">
          <p className="section-label">02. Skills</p>
          <h2 className="section-heading mt-4">A steady stack for building real products.</h2>
        </div>
        
        {/* Programming Languages */}
        <div className="mx-auto mb-12 max-w-4xl">
          <h3 className="mb-8 text-center text-lg font-medium uppercase tracking-[0.25em] text-slate-300/60">Programming Languages</h3>
          <div className="grid md:grid-cols-2 gap-5">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="h-full rounded-2xl border border-white/10 bg-[#0b1728] p-5">
                <div className="flex justify-between mb-3">
                  <span className="font-medium text-slate-200/85">{skill.name}</span>
                  <span className="text-slate-300/45">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="mx-auto mb-12 max-w-4xl">
          <h3 className="mb-8 text-center text-lg font-medium uppercase tracking-[0.25em] text-slate-300/60">Databases</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {databases.map((db, index) => (
              <div key={index} className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#0b1728] p-5 text-center">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-slate-100">{db.name}</h4>
                  <div className="flex justify-center mb-3">
                    <span className="text-3xl text-teal-300">{db.level}%</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-white/8 overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-400"
                    style={{ width: `${db.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="mx-auto max-w-4xl">
          <h3 className="mb-8 text-center text-lg font-medium uppercase tracking-[0.25em] text-slate-300/60">Frameworks & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {frameworks.map((framework, index) => (
              <div 
                key={index}
                className="group flex h-16 items-center justify-center rounded-xl border border-white/10 bg-[#0b1728] p-3 text-center transition-all duration-300 hover:border-teal-400/25 hover:bg-[#0f1d33]"
              >
                <div className="text-sm font-medium text-slate-300/70 transition-colors group-hover:text-slate-100">
                  {framework}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}