import React from "react";
// import "./Skills.css";
import portfolioData from "../../assets/data/portfolio.json";

const Skills: React.FC = () => {
  const skillGroups = portfolioData.skills;

  return (
    <section id="skills" className="skills">
      <div className="section-content">
        <h2 className="section-heading">My Skills</h2>
        <div className="skills-group">
          {Object.entries(skillGroups).map(([groupName, skills]) => (
            <div key={groupName} className={"skills-list"}>
              <h3>{groupName.charAt(0).toUpperCase() + groupName.slice(1)}</h3>
              {skills.map((skill: string) => (
                <div key={skill} className={`skill ${groupName.toLowerCase()}`}>
                  {skill}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
