import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "../../hooks/useInView";
import experienceData from "../../assets/data/experience.json";
import { ExperienceItem } from "../../types/data.types";
import "./experience.css";

const Experience: React.FC = () => {
  const { experience } = experienceData;
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="experience"
      className={`experience-section ${inView ? "animate" : ""}`}
    >
      <div className="experience-grid">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((item: ExperienceItem) => (
            <article key={item.company} className="experience-card">
              <div className="experience-header">
                <h3>
                  {item["profile-link"] ? (
                    <a
                      href={item["profile-link"]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    item.company
                  )}
                </h3>
                {item.positions.map((pos, idx) => (
                  <div key={idx} className="position-block">
                    <span className="position">{pos.designation}</span>
                    <p className="duration">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      {pos["start-date"]} - {pos["end-date"]}
                    </p>
                  </div>
                ))}
                <span className="type">{item.type}</span>
              </div>

              <div className="experience-meta">
                <p className="location">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {item.location}
                </p>
              </div>

              <div className="responsibilities">
                <ul>
                  {item["tech-stack"].map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
