type Project = {
  title: string;
  date: string;
  description: string;
  tools: string[];
  link: string;
};

const projects: Project[] = [
  {
    title: "Spam Classifier",
    date: "Sat, 24 October 2025",
    description:
      "Machine learning system that accurately identifies and filters spam messages using NLP techniques.",
    tools: ["Python", "TensorFlow", "Scikit-learn", "NLP"],
    link: "https://spam-classifier-cmzr.onrender.com",
  },
  {
    title: "Audio Streaming Site",
    date: "Fri, 14 November 2025",
    description:
      "Modern audio streaming platform with real-time playback, user playlists, and an admin panel.",
    tools: ["React", "Node.js", "MongoDB"],
    link: "https://react-audiostreamapp-1.onrender.com",
  },
  {
    title: "TradinHub",
    date: "Tue, 18 March 2025",
    description:
      "Trading community platform built for market discussions, shared insights, watchlists, and collaboration between traders.",
    tools: ["Next.js", "React", "Node.js", "MongoDB"],
    link: "#contact",
  },
  {
    title: "Ticket Management System",
    date: "Mon, 09 September 2025",
    description:
      "Built a full-stack online ticket management system with authentication, role-based access control, ticket tracking, status updates, dashboard reporting, and issue categorization.",
    tools: ["ASP.NET Core MVC", "SQL Server"],
    link: "https://yourwebsite.com/ticket-management-system",
  },
  {
    title: "Nexuses International School",
    date: "Tue, 12 November 2025",
    description:
      "Built a school management platform to handle student records, class workflows, and admin operations with a clean and responsive dashboard.",
    tools: ["Next.js", "ASP.NET Core", "SQL Server", "Bootstrap"],
    link: "https://yourwebsite.com/nexuses-international-school",
  },
  {
    title: "Child and Women Protection System",
    date: "Wed, 02 July 2025",
    description:
      "Web-based system to manage cases related to child and women protection efficiently.",
    tools: ["React", "Laravel", "MySQL"],
    link: "https://perpetrators.et/",
  },
];

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function GET() {
  const projectItems = projects
    .map(
      (project) => `
        <article class="project-card">
          <h3>${escapeHtml(project.title)}</h3>
          <p class="meta">${escapeHtml(project.date)}</p>
          <p>${escapeHtml(project.description)}</p>
          <p class="meta"><strong>Tools:</strong> ${project.tools.map(escapeHtml).join(", ")}</p>
          <p class="meta"><strong>Link:</strong> ${escapeHtml(project.link)}</p>
        </article>
      `,
    )
    .join("");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Aklilu Abera Resume</title>
    <style>
      :root {
        color-scheme: dark;
        --bg: #07111f;
        --panel: #0b1728;
        --text: #e5eef9;
        --muted: #9fb0c7;
        --accent: #38bdf8;
        --border: rgba(255, 255, 255, 0.12);
      }

      * { box-sizing: border-box; }

      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: radial-gradient(circle at top, rgba(56, 189, 248, 0.14), transparent 35%), var(--bg);
        color: var(--text);
        line-height: 1.6;
      }

      .page {
        max-width: 920px;
        margin: 0 auto;
        padding: 48px 24px 64px;
      }

      .hero,
      .section {
        border: 1px solid var(--border);
        border-radius: 24px;
        background: rgba(11, 23, 40, 0.92);
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
      }

      .hero {
        padding: 28px;
      }

      .section {
        margin-top: 28px;
        padding: 24px;
        background: rgba(11, 23, 40, 0.72);
      }

      .eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.28em;
        font-size: 12px;
        color: var(--accent);
      }

      h1, h2, h3, p { margin: 0; }

      h1 {
        font-size: clamp(2rem, 4vw, 3.3rem);
        line-height: 1.05;
      }

      .lead { max-width: 72ch; color: var(--muted); }

      .section h2 { margin-bottom: 12px; font-size: 1.2rem; }

      .grid { display: grid; gap: 14px; }

      .project-card {
        padding: 18px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.03);
      }

      .project-card h3 { font-size: 1.05rem; margin-bottom: 4px; }

      .meta { color: var(--muted); font-size: 0.94rem; margin-top: 6px; }

      ul { margin: 0; padding-left: 18px; color: var(--muted); }

      li + li { margin-top: 8px; }

      .skills {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .chip {
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.04);
        color: var(--text);
        font-size: 0.92rem;
      }

      @media (max-width: 640px) {
        .page { padding: 24px 16px 48px; }
        .hero, .section { padding: 20px; }
      }
    </style>
  </head>
  <body>
    <main class="page">
      <section class="hero">
        <p class="eyebrow">Aklilu Abera</p>
        <div style="margin-top: 14px;">
          <h1>Full-stack software engineer and AI automation builder.</h1>
          <p class="lead" style="margin-top: 12px;">
            I build clear, reliable digital experiences across frontend, backend, and AI.
            This CV includes every project currently featured in my portfolio, including TradinHub.
          </p>
        </div>
      </section>

      <section class="section">
        <h2>Core Skills</h2>
        <div class="skills">
          <span class="chip">React</span>
          <span class="chip">Next.js</span>
          <span class="chip">Node.js</span>
          <span class="chip">ASP.NET Core MVC</span>
          <span class="chip">Python</span>
          <span class="chip">MongoDB</span>
          <span class="chip">MySQL</span>
          <span class="chip">SQL Server</span>
          <span class="chip">TensorFlow</span>
          <span class="chip">Scikit-learn</span>
          <span class="chip">NLP</span>
        </div>
      </section>

      <section class="section">
        <h2>Projects</h2>
        <div class="grid" style="margin-top: 12px;">${projectItems}</div>
      </section>

      <section class="section">
        <h2>Summary</h2>
        <ul>
          <li>Full-stack developer focused on practical, polished products.</li>
          <li>AI automation builder with experience in prompt engineering and NLP workflows.</li>
          <li>Portfolio now reflects the complete project set, including TradinHub and the existing production work.</li>
        </ul>
      </section>
    </main>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": 'attachment; filename="Aklilu-Abera-Resume.docx"',
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
