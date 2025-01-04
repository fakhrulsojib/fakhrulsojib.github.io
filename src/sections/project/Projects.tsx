import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import portfolioData from "../../assets/data/portfolio.json";
import defaultProjectImage from "../../assets/images/default-project.jpg";
// import "./Projects.css";

interface Project {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
  technologies?: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = portfolioData.projects;

  return (
    <section id="projects" className="projects">
      <div className="section-content">
        <h2 className="section-heading">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              defaultImage={defaultProjectImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
