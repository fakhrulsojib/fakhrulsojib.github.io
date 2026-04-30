import React from "react";
import "./Skills.css";
import portfolioData from "../../assets/data/skills.json";
import LaptopAnimation from "../../components/laptopAnimation/LaptopAnimation";
import { useInView } from "../../hooks/useInView";
import { Skill } from "../../types/data.types";

const Skills: React.FC = () => {
  const [laptopRef, laptopInView] = useInView();
  const [contentRef, contentInView] = useInView();
  const skillGroups = portfolioData.skills;

  return (
    <div id="skills" className="skills-section">
      <div
        ref={laptopRef}
        className={laptopInView ? "animate__animated animate__fadeInLeft" : ""}
      >
        <LaptopAnimation />
      </div>
      <div
        ref={contentRef}
        className={`skills-content ${
          contentInView ? "animate__animated animate__fadeInRight" : ""
        }`}
      >
        <h2 className="section-heading">My Skills</h2>
        <div className="skills-group">
          {Object.entries(skillGroups).map(([groupName, skills], index) => (
            <div
              key={groupName}
              className={`skills-list ${
                contentInView ? "animate__animated animate__fadeInUp" : ""
              }`}
              style={contentInView ? { animationDelay: `${index * 0.2}s` } : {}}
            >
              <h3>{groupName.charAt(0).toUpperCase() + groupName.slice(1)}</h3>
              <div className="skills-list-content">
                {(skills as Skill[]).map((skill: Skill, idx: number) => (
                  <div
                    key={`${skill.name}-${idx}`}
                    className={`skill skill-${skill.category}`}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
