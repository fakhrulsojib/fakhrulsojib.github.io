import React from "react";
// import "./ProjectCard.css";

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
  technologies?: string[];
  defaultImage: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  imageUrl,
  technologies,
  defaultImage,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-image-wrapper">
        <img
          src={imageUrl || defaultImage}
          alt={title || "Project Image"}
          className="project-card-image"
        />
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title || "Untitled Project"}</h3>
        <p className="project-card-description">
          {description || "No description available."}
        </p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            View Project
          </a>
        )}
        {technologies && technologies.length > 0 && (
          <p className="project-card-technologies">
            <strong>Technologies:</strong> {technologies.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
