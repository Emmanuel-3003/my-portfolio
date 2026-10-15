import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Application",
    status: "In Progress",
    description:
      "A full-stack shopping application with product and category management, cart functionality, user authentication and order processing.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "PostgreSQL",
      "React",
    ],
    github: "https://github.com/Emmanuel-3003/E-Commerce",
    live: "",
  },
  {
    title: "Banking Management System",
    status: "In Progress",
    description:
      "A banking application designed to manage customer accounts and support operations such as deposits, withdrawals, transfers and transaction history.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "Spring Security",
    ],
    github: "https://github.com/Emmanuel-3003/Bank-App",
    live: "",
  },
  {
    title: "Personal Portfolio",
    status: "In Progress",
    description:
      "A responsive personal website to showcase my technical skills, development projects and professional experience.",
    technologies: ["React", "JavaScript", "CSS", "Netlify"],
    github: "https://github.com/Emmanuel-3003/Portfolio",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I'VE BEEN BUILDING</p>
        <h2>Featured <span className="accent">Projects</span></h2>
        <p>Practical projects that help me strengthen my development skills.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-icon">&lt;/&gt;</span>
              <span className="project-status">{project.status}</span>
            </div>

            <h3>{project.title}</h3>
            <p className="project-description">
              {project.description}
            </p>

            <div className="skill-tags">
              {project.technologies.map((technology) => (
                <span className="skill-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} /> Source Code
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
