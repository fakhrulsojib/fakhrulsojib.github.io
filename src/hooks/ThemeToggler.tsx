import React, { useState, useEffect } from "react";
import "../styles/ThemeToggler.css";

const ThemeToggler: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = prefersDark ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    document.body.classList.toggle("light");
  };

  return (
    <div onClick={toggleTheme} className={`tdnn ${theme}`}>
      <div className="moon"></div>
    </div>
  );
};

export default ThemeToggler;
