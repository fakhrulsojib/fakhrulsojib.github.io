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

    // Remove any existing theme classes first
    document.body.classList.remove("light", "dark");
    // Add the initial theme class
    document.body.classList.add(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    // Toggle theme classes
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return (
    <div onClick={toggleTheme} className={`tdnn ${theme}`}>
      <div className="moon"></div>
    </div>
  );
};

export default ThemeToggler;
