import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "../hooks/useInView";
import educationData from "../assets/data/education.json";
import "./education.css";

interface EducationItem {
  id: string;
  school: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  location: string;
  "intersting-courses"?: string[];
  highlights?: string[];
}

const Education: React.FC = () => {
  const { education } = educationData;
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="education"
      className={`education-section ${inView ? "animate" : ""}`}
    >
      <div className="education-grid">
        <h2>Education</h2>
        {education.map((item: EducationItem) => (
          <article key={item.id} className="education-card">
            <div>
              <h3 className="school-name">{item.school}</h3>
              <p className="degree-name">
                {item.degree}
                {item.field && ` in ${item.field}`}
              </p>
            </div>

            <div className="education-meta">
              <p className="education-period">
                <FontAwesomeIcon icon={faCalendarAlt} />
                {item.startDate} - {item.endDate}
              </p>
              <p className="education-location">
                <FontAwesomeIcon icon={faLocationDot} />
                {item.location}
              </p>
            </div>

            {item["intersting-courses"] &&
              item["intersting-courses"].length > 0 && (
                <div className="courses-section">
                  <div className="courses-container">
                    {item["intersting-courses"].map((course, index) => (
                      <span key={index} className="course-tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            {item.highlights && item.highlights.length > 0 && (
              <div className="highlights-section">
                <ul className="highlights-list">
                  {item.highlights.map((highlight, index) => (
                    <li key={index}>
                      <FontAwesomeIcon icon={faStar} />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
