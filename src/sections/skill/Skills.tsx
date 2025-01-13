import React from "react";
import "./Skills.css";
import portfolioData from "../../assets/data/skills.json";
import LaptopAnimation from "../../components/laptopAnimation/LaptopAnimation";

const Skills: React.FC = () => {
  const skillGroups = portfolioData.skills;

  return (
    <div className="skills-section">
      <LaptopAnimation />
      <div className="skills-content">
        <h2 className="section-heading">My Skills</h2>
        <div className="skills-group">
          {Object.entries(skillGroups).map(([groupName, skills]) => (
            <div key={groupName} className="skills-list">
              <h3>{groupName.charAt(0).toUpperCase() + groupName.slice(1)}</h3>
              <div className="skills-list-content">
                {skills.map((skill: string, index: number) => (
                  <div
                    key={`${skill}-${index}`}
                    className={`skill ${groupName.toLowerCase()}`}
                  >
                    {skill}
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
