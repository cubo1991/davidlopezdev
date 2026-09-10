import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="verMas-link">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
