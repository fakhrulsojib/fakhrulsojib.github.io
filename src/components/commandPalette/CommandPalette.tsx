import React, { useState, useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faArrowUpRightFromSquare,
  faMoon,
  faEnvelope,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../hooks/useTheme";
import "./CommandPalette.css";

interface Command {
  id: string;
  label: string;
  category: string;
  icon: typeof faMagnifyingGlass;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useTheme();

  const commands: Command[] = [
    {
      id: "home",
      label: "Navigate to Home",
      category: "Navigation",
      icon: faArrowRight,
      action: () => scrollToSection("home"),
    },
    {
      id: "skills",
      label: "Navigate to Skills",
      category: "Navigation",
      icon: faArrowRight,
      action: () => scrollToSection("skills"),
    },
    {
      id: "experience",
      label: "Navigate to Experience",
      category: "Navigation",
      icon: faArrowRight,
      action: () => scrollToSection("experience"),
    },
    {
      id: "cp",
      label: "Navigate to Competitive Programming",
      category: "Navigation",
      icon: faArrowRight,
      action: () => scrollToSection("competitive-programming"),
    },
    {
      id: "education",
      label: "Navigate to Education",
      category: "Navigation",
      icon: faArrowRight,
      action: () => scrollToSection("education"),
    },
    {
      id: "projects",
      label: "Navigate to Projects",
      category: "Navigation",
      icon: faArrowRight,
      action: () => scrollToSection("projects"),
    },
    {
      id: "contact",
      label: "Navigate to Contact",
      category: "Navigation",
      icon: faArrowRight,
      action: () => scrollToSection("contact"),
    },
    {
      id: "theme",
      label: "Toggle Dark/Light Mode",
      category: "Actions",
      icon: faMoon,
      action: () => toggleTheme(),
    },
    {
      id: "resume",
      label: "Open Resume",
      category: "Links",
      icon: faFileLines,
      action: () =>
        window.open("https://github.com/fakhrulsojib/resume-public", "_blank"),
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      category: "Links",
      icon: faGithub,
      action: () =>
        window.open("https://github.com/fakhrulsojib", "_blank"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      category: "Links",
      icon: faLinkedin,
      action: () =>
        window.open("https://linkedin.com/in/fakhrulsojib", "_blank"),
    },
    {
      id: "codeforces",
      label: "Open Codeforces Profile",
      category: "Links",
      icon: faArrowUpRightFromSquare,
      action: () =>
        window.open("https://codeforces.com/profile/fakhrulsojib", "_blank"),
    },
    {
      id: "email",
      label: "Send Email",
      category: "Actions",
      icon: faEnvelope,
      action: () =>
        window.open("mailto:fakhrulsojib@gmail.com"),
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filtered = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  const executeCommand = useCallback(
    (index: number) => {
      if (filtered[index]) {
        filtered[index].action();
        onClose();
      }
    },
    [filtered, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        executeCommand(selectedIndex);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [selectedIndex, filtered.length, executeCommand, onClose]
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const selectedEl = listRef.current?.querySelector(".palette-item.selected");
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  let flatIndex = 0;

  return (
    <div className="palette-overlay" onClick={onClose}>
      <div
        className="palette-container"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className="palette-input-wrapper">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="palette-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="palette-input"
            placeholder="Type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <kbd className="palette-kbd">ESC</kbd>
        </div>
        <div className="palette-results" ref={listRef}>
          {Object.entries(grouped).map(([category, cmds]) => (
            <div key={category} className="palette-group">
              <div className="palette-group-label">{category}</div>
              {cmds.map((cmd) => {
                const currentIndex = flatIndex++;
                return (
                  <div
                    key={cmd.id}
                    className={`palette-item ${currentIndex === selectedIndex ? "selected" : ""}`}
                    onClick={() => executeCommand(currentIndex)}
                    onMouseEnter={() => setSelectedIndex(currentIndex)}
                  >
                    <FontAwesomeIcon icon={cmd.icon} className="palette-item-icon" />
                    <span>{cmd.label}</span>
                  </div>
                );
              })}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="palette-empty">No commands found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
