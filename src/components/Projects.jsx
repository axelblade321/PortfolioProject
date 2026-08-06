import "../styles/project.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="project-grid">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-links">

              <a href={project.github}>
                Drive
              </a>

              <a href={project.demo}>
                Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;