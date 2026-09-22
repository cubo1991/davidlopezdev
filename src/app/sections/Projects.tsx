import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.stack && (
              <div className="tech-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
            <p className="project-role"><strong>Rol:</strong> {project.role}</p>
            <a
              href={project.link}
              className="verMas-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
            >
              {project.linkLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
