import React from "react";
import "./ThemeToggler.css";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className={`tdnn ${theme}`}>
      <div className="moon"></div>
    </div>
  );
};

export default ThemeToggler;
