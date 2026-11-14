import { useEffect, useState } from "react";
import portrait from "./assets/mallikarjuna-portrait.png";

const profile = {
  name: "Mallikarjuna Gangula",
  role: "Frontend Developer",
  company: "Static Val Company",
  email: "mallikarjunagangula48@gmail.com",
  linkedin: "https://www.linkedin.com/in/mallikarjunagangula",
  github: "https://github.com/mallikarjunagangula15",
  resume: "/Mallikarjuna_Gangula_Resume.pdf",
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Responsive UI",
  "Git & GitHub",
  "REST APIs",
  "Bootstrap",
  "Node.js",
  "MongoDB",
];

const technologies = [
  { name: "HTML5", mark: "5", color: "text-orange-400" },
  { name: "CSS3", mark: "3", color: "text-sky-400" },
  { name: "JavaScript", mark: "JS", color: "text-amber-300" },
  { name: "React", mark: "R", color: "text-cyan-300" },
  { name: "Bootstrap", mark: "B", color: "text-violet-400" },
  { name: "Git", mark: "G", color: "text-orange-500" },
  { name: "VS Code", mark: "</>", color: "text-sky-500" },
];

const projects = [
  {
    title: "fee_payments",
    category: "Java application",
    description:
      "A payment-focused project for managing fee payment workflows.",
    focus: "Fee payment processing",
    technologies: ["Java"],
    number: "01",
    url: "https://github.com/mallikarjunagangula15/fee_payments",
  },
  {
    title: "blockchain-ai",
    category: "Python application",
    description:
      "A project exploring the use of blockchain and AI in an application.",
    focus: "Blockchain and AI",
    technologies: ["Python"],
    number: "02",
    url: "https://github.com/mallikarjunagangula15/blockchain-ai",
  },
  {
    title: "GENAI-Resume-Analyzer",
    category: "AI application",
    description:
      "An AI-powered tool for analyzing resumes.",
    focus: "Resume analysis with generative AI",
    technologies: ["Python", "Generative AI"],
    number: "03",
    url: "https://github.com/mallikarjunagangula15/GENAI-Resume-Analyzer",
  },
  {
    title: "student_management_system",
    category: "Python application",
    description:
      "A system for organizing and managing student information.",
    focus: "Student record management",
    technologies: ["Python"],
    number: "04",
    url: "https://github.com/mallikarjunagangula15/student_management_system",
  },
];

const experience = [
  {
    company: profile.company,
    period: "Present",
    role: "Frontend Developer",
    type: "Current role",
    description:
      "Developing responsive product interfaces and reusable UI components, with attention to visual consistency, usability, and maintainable implementation.",
  },
  {
    company: "Cognifyz Technologies",
    period: "Nov-Dec 2025",
    role: "Frontend Development Intern",
    type: "Internship",
    description:
      "Worked on responsive web interfaces using HTML, CSS, JavaScript, and React, translating requirements into reusable components and consistent layouts.",
  },
];

const certifications = [
  { title: "ICRCSET 2025", detail: "Technical learning and achievement" },
  { title: "AWS Cloud Virtual Internship", detail: "Cloud learning experience" },
  { title: "Digital Productivity", detail: "Professional development" },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className="h-4 w-4"
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

function ExternalLink({ href, children, className = "" }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="flex items-start justify-between gap-4">
        <span className="project-number">{project.number}</span>
        <span className="text-right text-sm text-slate-400">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
      <p className="project-focus">Focus: {project.focus}</p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
        {project.technologies.map((technology) => (
          <li key={technology} className="technology-tag">
            {technology}
          </li>
        ))}
      </ul>
      <ExternalLink
        href={project.url}
        className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-bold text-sky-200 transition hover:text-white"
      >
        View repository <ArrowIcon />
      </ExternalLink>
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content =
      "Portfolio of Mallikarjuna Gangula, Frontend Developer building responsive web experiences with React and modern web technologies.";
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="main-content" className="min-h-screen overflow-x-hidden text-slate-100">
      <div className="site-background" aria-hidden="true" />

      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu} aria-label={`${profile.name}, home`}>
          <span className="brand-mark">MG</span>
          <span>
            Mallikarjuna <span className="text-sky-300">Gangula</span>
          </span>
        </a>

        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="header-cta">
          Let&apos;s talk
        </a>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>
      )}

      <section id="home" className="hero-section page-container">
        <div className="hero-copy">
          <p className="availability-label">
            <span aria-hidden="true" /> {profile.role} at {profile.company}
          </p>
          <h1>
            React Frontend Developer <span>building toward Python full-stack.</span>
          </h1>
          <p className="hero-description">
            Hi, I&apos;m <strong>{profile.name}</strong>. I build responsive interfaces and reusable UI
            components, with a focus on clear user experiences and maintainable frontend code.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              Explore projects <ArrowIcon />
            </a>
            <a href={profile.resume} download className="secondary-button">
              Download resume <ArrowIcon />
            </a>
          </div>
          <div className="hero-stats" aria-label="Portfolio overview">
            <div>
              <strong>04</strong>
              <span>Featured projects</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Listed skills</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Listed certificates</span>
            </div>
          </div>
        </div>

        <div className="hero-profile">
          <div className="portrait-frame">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              className="portrait-image"
              fetchPriority="high"
            />
          </div>
          <div className="current-role">
            <p>Currently</p>
            <strong>{profile.role} {profile.company}</strong>
          </div>
        </div>

        <aside className="technology-panel" aria-label="Core technologies">
          <div className="technology-intro">
            <p className="eyebrow">Core technologies</p>
            <p>Tools used to build modern web experiences.</p>
          </div>
          <ul className="technology-list">
            {technologies.map((technology) => (
              <li key={technology.name} title={technology.name}>
                <span className={`technology-mark ${technology.color}`}>{technology.mark}</span>
                <span>{technology.name}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="about" className="section-band">
        <div className="page-container about-layout">
          <SectionHeading eyebrow="01 / About me" title="About Me" />
          <p className="body-copy about-copy">
            Hi, I&apos;m {profile.name}, a {profile.role} specializing in React.js and modern web
            technologies. I build responsive, accessible, and high-performance web applications
            with a focus on clean code, reusable components, and exceptional user experiences.
          </p>
        </div>
      </section>

      <section id="skills" className="page-container content-section">
        <SectionHeading eyebrow="02 / Toolkit" title="Tools I work with." />
        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <li key={skill} className="skill-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{skill}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section id="experience" className="section-band dark-band">
        <div className="page-container content-section">
          <SectionHeading eyebrow="03 / Experience" title="Where I&apos;ve contributed." />
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.role}`}>
                <div>
                  <p className="experience-meta">{item.company}</p>
                  <h3>{item.role}</h3>
                  <p className="body-copy mt-4">{item.description}</p>
                </div>
                <span className="experience-type">{item.type}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="page-container content-section">
        <SectionHeading
          eyebrow="04 / Selected work"
          title="Projects that show how I build."
          description="A selection of projects and the technologies used to explore their functionality and user experience."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="contact" className="page-container contact-section">
        <div className="contact-panel">
          <p className="eyebrow">05 / Get in touch</p>
          <div className="contact-content">
            <div>
              <h2>Let&apos;s build something people enjoy using.</h2>
              <p>Have an opportunity, project, or collaboration in mind? I&apos;d love to hear from you. Let&apos;s discuss how we can create a thoughtful digital experience.</p>
              <a className="contact-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <a
              className="contact-button"
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Portfolio enquiry")}`}
            >
              Send an email <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="education" className="page-container content-section">
        <SectionHeading eyebrow="06 / Education" title="My academic background." />
        <div className="two-column-grid">
          <article className="info-card education-card">
            <p className="card-kicker">Bachelor of Technology</p>
            <h3>Computer Engineering</h3>
            <p className="education-school">JNTU Kakinada</p>
            <div className="education-meta">
              <span>July 2022 - March 2025</span>
              <span className="gpa-badge">7.3 CGPA</span>
            </div>
          </article>
          <article className="info-card profile-card">
            <p className="card-kicker">Connect</p>
            <h3>Professional profiles</h3>
            <p className="muted-copy mt-3">Find me online and explore my work.</p>
            <div className="profile-links">
              <ExternalLink href={profile.linkedin}>LinkedIn <ArrowIcon /></ExternalLink>
              <ExternalLink href={profile.github}>GitHub <ArrowIcon /></ExternalLink>
            </div>
          </article>
        </div>
      </section>

      <section id="certificates" className="section-band">
        <div className="page-container content-section">
          <SectionHeading eyebrow="07 / Certifications" title="Continuous learning." />
          <ul className="certificates-grid">
            {certifications.map((certificate, index) => (
              <li className="certificate-card" key={certificate.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{certificate.title}</h3>
                <p>{certificate.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="site-footer">
        <p>Copyright {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
      </footer>
    </main>
  );
}
