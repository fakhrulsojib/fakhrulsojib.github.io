import React from "react";
import "../styles/ThemeToggler.css";
import { useTheme } from "./useTheme";

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className={`tdnn ${theme}`}>
      <div className="moon"></div>
    </div>
  );
};

export default ThemeToggler;
