import projects from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Proyectos</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 shadow-lg flex flex-col h-full">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{project.title}</h3>
            <p className="text-gray-200 mb-4 flex-grow">{project.description}</p>
            <a href={project.link} className="text-cyan-400 hover:text-cyan-300 hover:underline font-medium mt-auto verMas-link block">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
