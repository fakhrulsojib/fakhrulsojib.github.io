import React, { useEffect, useMemo, useState } from "react";
import "./LaptopAnimation.css";
import skillsData from "../../assets/data/skills.json";

const LaptopAnimation: React.FC = () => {
  const [currentText, setCurrentText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [index, setIndex] = useState(0);
  const skills = useMemo(
    () => Object.values(skillsData.skills).flat().map((s) => (s as { name: string }).name),
    []
  );

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (skills.length > 0) {
      const currentWord = skills[index];
      if (isErasing) {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev.slice(0, -1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
        }, 200);
      }

      if (!isErasing && currentText === currentWord) {
        timer = setTimeout(() => setIsErasing(true), 1500);
      } else if (isErasing && currentText === "") {
        setIsErasing(false);
        setIndex((prevIndex) => (prevIndex + 1) % skills.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isErasing, index, skills]);

  return (
    <div className="laptop">
      <div className="screen">
        <div className="text-container">
          <span>{currentText}</span>
        </div>
      </div>
    </div>
  );
};

export default LaptopAnimation;
