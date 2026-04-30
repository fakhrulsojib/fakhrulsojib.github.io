import React, { useState, useEffect, useCallback } from "react";
import Header from "./sections/header/Header";
import Home from "./sections/home/Home";
import Skills from "./sections/skill/Skills";
import Projects from "./sections/project/Projects";
import Footer from "./sections/footer/Footer";
import Education from "./sections/education/Education";
import Experience from "./sections/experience/Experience";
import CompetitiveProgramming from "./sections/competetive-programming/CompetitiveProgramming";
import TerminalOverlay from "./components/terminalOverlay/TerminalOverlay";
import CommandPalette from "./components/commandPalette/CommandPalette";

const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }

      if (e.key === "`" && e.ctrlKey) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <Header
        onTerminalToggle={() => setIsTerminalOpen((prev) => !prev)}
        onPaletteToggle={() => setIsPaletteOpen((prev) => !prev)}
      />
      <main>
        <Home />
        <Skills />
        <Experience />
        <CompetitiveProgramming />
        <Education />
        <Projects />
        <Footer />
      </main>
      <TerminalOverlay
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
      />
    </>
  );
};

export default App;
