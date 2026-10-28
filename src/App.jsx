
import { useMemo, useState } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "Smart Expense Tracker",
    intern: "Ayesha Khan",
    track: "Web Development",
    description: "A simple expense management app to track income, expenses and monthly budgets.",
    technologies: ["React", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    intern: "Uma Javeria",
    track: "Web Development",
    description: "A responsive personal portfolio to present skills, projects and professional achievements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Sales Analytics Dashboard",
    intern: "Hira Ahmed",
    track: "Data Analytics",
    description: "A sample dashboard concept for exploring sales trends and business performance.",
    technologies: ["Power BI", "Excel"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Social Media Design Kit",
    intern: "Fatima Noor",
    track: "UI/UX Design",
    description: "A consistent set of social media layouts designed for a modern brand identity.",
    technologies: ["Figma", "UI Design"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Weather Forecast App",
    intern: "Ali Raza",
    track: "Web Development",
    description: "A weather app concept featuring a clean interface for displaying daily conditions.",
    technologies: ["React", "JavaScript", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Customer Insights Report",
    intern: "Zainab Malik",
    track: "Data Analytics",
    description: "A sample analytical report exploring customer behaviour and key performance indicators.",
    technologies: ["Excel", "Power BI"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    liveUrl: "",
    githubUrl: "",
  },
];

const categories = [
  "All Projects",
  "Web Development",
  "Data Analytics",
  "UI/UX Design",
];

function ProjectCard({ project, onViewDetails }) {
  return (
    <article className="project-card">
      <div className="project-image-wrap">
        <img
          className="project-image"
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
        />
        <span className="track-badge">{project.track}</span>
      </div>

      <div className="project-content">
        <div className="project-meta">
          <span className="sample-label">SAMPLE PROJECT</span>
          <span className="project-id">
            #{String(project.id).padStart(3, "0")}
          </span>
        </div>

        <h3>{project.title}</h3>
        <p className="intern-name">
          Created by <strong>{project.intern}</strong>
        </p>
        <p className="project-description">{project.description}</p>

        <div className="technology-list">
          {project.technologies.map((tech) => (
            <span className="technology-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {project.liveUrl ? (
            <a
              className="button-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              View Project ↗
            </a>
          ) : (
            <span className="link-unavailable">Demo coming soon</span>
          )}

          {project.githubUrl && (
            <a
              className="button-secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}

          <button
            className="details-button"
            onClick={() => onViewDetails(project)}
          >
            View Details →
          </button>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.intern.toLowerCase().includes(query);

      const matchesCategory =
        activeCategory === "All Projects" ||
        project.track === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  function resetFilters() {
    setSearch("");
    setActiveCategory("All Projects");
  }

  return (
    <div className="app">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Internlytic home">
          <span className="brand-mark">I</span>
          <span>
            <strong>INTERNLYTIC</strong>
            <small>TECHNOLOGIES</small>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a className="nav-active" href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>

        <a className="header-cta" href="#projects">
          Explore Work <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              PHASE 2 · INTERN SHOWCASE
            </div>

            <h1>
              Ideas into impact.
              <br />
              <span>Built by interns.</span>
            </h1>

            <p>
              Discover projects, explore new ideas, and celebrate the work
              of emerging talent at Internlytic Technologies.
            </p>

            <a className="hero-button" href="#projects">
              Explore Projects <span>↓</span>
            </a>

            <div className="hero-note">
              <span className="avatar-stack">
                <span>I</span>
                <span>+</span>
              </span>
              <span>Discover the work behind the learning.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Project showcase illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-panel">
              <div className="visual-topbar">
                <span />
                <span />
                <span />
                <small>INTERNLYTIC / PROJECTS</small>
              </div>

              <div className="visual-inner">
                <div className="visual-label">CREATIVITY MEETS TECHNOLOGY</div>
                <div className="visual-big-text">
                  MAKE
                  <br />
                  <span>THINGS</span>
                  <br />
                  HAPPEN.
                </div>
                <div className="visual-bottom">
                  <span>Ideas. Skills. Possibilities.</span>
                  <span className="visual-arrow">↗</span>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-top">✳ Creative thinking</div>
            <div className="floating-chip chip-bottom">
              {"</>"} Built to learn
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <div className="section-kicker">THE SHOWCASE</div>
              <h2>Explore the projects<span>.</span></h2>
              <p>Ideas, experiments and solutions created by our interns.</p>
            </div>

            <div className="project-count">
              <strong>{filteredProjects.length.toString().padStart(2, "0")}</strong>
              <span>PROJECTS FOUND</span>
            </div>
          </div>

          <div className="filter-panel">
            <label className="search-box">
              <span className="search-icon" aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Search projects or interns..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search projects by title or intern name"
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </label>

            <div className="category-filters" aria-label="Filter by track">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-button ${
                    activeCategory === category ? "filter-active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="results-line">
            <span>
              Showing <strong>{filteredProjects.length}</strong> of{" "}
              <strong>{projects.length}</strong> sample projects
            </span>

            {(search || activeCategory !== "All Projects") && (
              <button className="reset-button" onClick={resetFilters}>
                Reset filters ↺
              </button>
            )}
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">⌕</div>
              <h3>No projects found</h3>
              <p>
                Try another search term or choose a different project track.
              </p>
              <button className="button-primary" onClick={resetFilters}>
                Show all projects
              </button>
            </div>
          )}
        </section>

        {selectedProject && (
          <div
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <section
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>

              <img
                className="modal-image"
                src={selectedProject.image}
                alt={selectedProject.title}
              />

              <span className="section-kicker">
                {selectedProject.track}
              </span>

              <h2 id="modal-title">{selectedProject.title}</h2>
              <p className="modal-creator">
                Created by <strong>{selectedProject.intern}</strong>
              </p>
              <p className="modal-description">
                {selectedProject.description}
              </p>

              <h3>Technology Stack</h3>
              <div className="technology-list">
                {selectedProject.technologies.map((tech) => (
                  <span className="technology-tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="modal-links">
                {selectedProject.liveUrl && (
                  <a
                    className="button-primary"
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project ↗
                  </a>
                )}

                {selectedProject.githubUrl && (
                  <a
                    className="button-secondary"
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repository ↗
                  </a>
                )}

                {!selectedProject.liveUrl && !selectedProject.githubUrl && (
                  <p className="link-unavailable">
                    Project links have not been provided yet.
                  </p>
                )}
              </div>
            </section>
          </div>
        )}

        <section className="about-strip" id="about">
          <div>
            <span className="section-kicker">ABOUT THIS SHOWCASE</span>
            <h2>Every project tells a story.</h2>
            <p>
              A demo gallery concept celebrating learning, creativity and
              practical work from the Internlytic intern community.
            </p>
          </div>

          <a href="#projects" className="about-link">
            Back to projects ↑
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          INTERNLYTIC TECHNOLOGIES
        </a>
        <span>Phase 2 · Front-End Development Internship</span>
        <span>Demo built with sample data</span>
      </footer>
    </div>
  );
}
