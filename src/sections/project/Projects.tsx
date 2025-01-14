import React from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import portfolioData from "../../assets/data/projects.json";
import defaultProjectImage from "../../assets/images/default-project.jpg";
import "./Projects.css";
import { useInView } from "../../hooks/useInView";

interface Project {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
  technologies?: string[];
}

const Projects: React.FC = () => {
  const [contentRef, contentInView] = useInView();
  const projects: Project[] = portfolioData.projects;

  return (
    <section id="projects" className="projects">
      <div ref={contentRef} className="section-content">
        <h2
          className={`section-heading ${
            contentInView ? "animate__animated animate__fadeInDown" : ""
          }`}
        >
          My Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={
                contentInView ? "animate__animated animate__fadeIn" : ""
              }
              style={contentInView ? { animationDelay: `${index * 0.2}s` } : {}}
            >
              <ProjectCard {...project} defaultImage={defaultProjectImage} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
