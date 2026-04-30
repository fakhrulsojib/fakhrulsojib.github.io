import React, { useState, useRef, useEffect, useCallback } from "react";
import homeData from "../../assets/data/home.json";
import experienceData from "../../assets/data/experience.json";
import educationData from "../../assets/data/education.json";
import projectsData from "../../assets/data/projects.json";
import skillsData from "../../assets/data/skills.json";
import cpData from "../../assets/data/competetive-programming.json";
import "./TerminalOverlay.css";

interface TerminalLine {
  type: "input" | "output" | "error" | "ascii";
  content: string;
}

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const HELP_TEXT = `Available commands:
  whoami          About me
  skills          Technical skills
  experience      Work experience
  education       Education history
  projects        My projects
  ls projects     List all projects
  codeforces      Codeforces stats
  codechef        Codechef stats
  achievements    Competitive programming achievements
  open resume     Open resume in new tab
  open github     Open GitHub profile
  open linkedin   Open LinkedIn profile
  contact         Contact info
  theme           Toggle dark/light mode
  clear           Clear terminal
  help            Show this help message
  exit            Close terminal`;

const ASCII_BANNER = `  __       _    _                _           _ _ _
 / _| __ _| | _| |__  _ __ _   _| |___  ___ (_|_) |__
| |_ / _\` | |/ / '_ \\| '__| | | | / __|/ _ \\| | | '_ \\
|  _| (_| |   <| | | | |  | |_| | \\__ \\ (_) | | | |_) |
|_|  \\__,_|_|\\_\\_| |_|_|   \\__,_|_|___/\\___/| |_|_.__/
                                            |__/`;

const TerminalOverlay: React.FC<TerminalOverlayProps> = ({ isOpen, onClose }) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "ascii", content: ASCII_BANNER },
    { type: "output", content: 'Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const addLines = useCallback((newLines: TerminalLine[]) => {
    setLines((prev) => [...prev, ...newLines]);
  }, []);

  const processCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();
      const inputLine: TerminalLine = { type: "input", content: `$ ${cmd}` };

      if (!trimmed) {
        addLines([inputLine]);
        return;
      }

      setHistory((prev) => [...prev, cmd]);
      setHistoryIndex(-1);

      switch (trimmed) {
        case "help":
          addLines([inputLine, { type: "output", content: HELP_TEXT }]);
          break;

        case "whoami": {
          const out = `${homeData.name}
${homeData.tagline}

${homeData.about}`;
          addLines([inputLine, { type: "output", content: out }]);
          break;
        }

        case "skills": {
          const proficient = (skillsData.skills.proficient as { name: string }[])
            .map((s) => s.name)
            .join(", ");
          const familiar = (skillsData.skills.familiar as { name: string }[])
            .map((s) => s.name)
            .join(", ");
          addLines([
            inputLine,
            { type: "output", content: `Proficient: ${proficient}\n\nFamiliar: ${familiar}` },
          ]);
          break;
        }

        case "experience": {
          const exp = experienceData.experience
            .map((e) => {
              const positions = e.positions
                .map((p) => `  ${p.designation} (${p["start-date"]} – ${p["end-date"]})`)
                .join("\n");
              return `${e.company} [${e.type}]\n${positions}\nLocation: ${e.location}\nTech: ${e["tech-stack"].join(", ")}`;
            })
            .join("\n\n");
          addLines([inputLine, { type: "output", content: exp }]);
          break;
        }

        case "education": {
          const edu = educationData.education
            .map((e) => {
              let line = `${e.school}\n  ${e.degree}${e.field ? ` in ${e.field}` : ""} (${e.startDate}–${e.endDate})\n  ${e.location}`;
              if (e.highlights && e.highlights.length > 0) {
                line += `\n  Highlights: ${e.highlights.join(", ")}`;
              }
              return line;
            })
            .join("\n\n");
          addLines([inputLine, { type: "output", content: edu }]);
          break;
        }

        case "projects":
        case "ls projects": {
          const projs = projectsData.projects
            .map((p) => {
              return `${p.title}\n  ${p.description}\n  Tech: ${p.technologies?.join(", ") || "N/A"}\n  Link: ${p.link || "N/A"}`;
            })
            .join("\n\n");
          addLines([inputLine, { type: "output", content: projs }]);
          break;
        }

        case "codeforces": {
          const cf = cpData["competetive-programming"].find(
            (p) => p.platform === "Codeforces"
          );
          if (cf) {
            addLines([
              inputLine,
              {
                type: "output",
                content: `Codeforces — ${cf.rank.name}\n  Max Rating: ${cf["max-rating"]}\n  Problems Solved: ${cf.solved}\n  Contests: ${cf["contest-participation"]}\n  Profile: ${cf.profile}`,
              },
            ]);
          }
          break;
        }

        case "codechef": {
          const cc = cpData["competetive-programming"].find(
            (p) => p.platform === "Codechef"
          );
          if (cc) {
            addLines([
              inputLine,
              {
                type: "output",
                content: `Codechef — ${cc.rank.name}\n  Max Rating: ${cc["max-rating"]}\n  Problems Solved: ${cc.solved}\n  Contests: ${cc["contest-participation"]}\n  Profile: ${cc.profile}`,
              },
            ]);
          }
          break;
        }

        case "achievements": {
          const achievements = cpData.achievements
            .map((a, i) => `  ${i + 1}. ${a}`)
            .join("\n");
          addLines([inputLine, { type: "output", content: achievements }]);
          break;
        }

        case "open resume":
          window.open("https://github.com/fakhrulsojib/resume-public", "_blank");
          addLines([inputLine, { type: "output", content: "Opening resume..." }]);
          break;

        case "open github":
          window.open("https://github.com/fakhrulsojib", "_blank");
          addLines([inputLine, { type: "output", content: "Opening GitHub..." }]);
          break;

        case "open linkedin":
          window.open("https://linkedin.com/in/fakhrulsojib", "_blank");
          addLines([inputLine, { type: "output", content: "Opening LinkedIn..." }]);
          break;

        case "contact":
          addLines([
            inputLine,
            {
              type: "output",
              content: `Email: fakhrulsojib@gmail.com\nLinkedIn: linkedin.com/in/fakhrulsojib\nGitHub: github.com/fakhrulsojib`,
            },
          ]);
          break;

        case "theme":
          document.body.classList.toggle("dark");
          document.body.classList.toggle("light");
          addLines([inputLine, { type: "output", content: "Theme toggled." }]);
          break;

        case "clear":
          setLines([]);
          return;

        case "exit":
          onClose();
          return;

        default:
          addLines([
            inputLine,
            {
              type: "error",
              content: `command not found: ${cmd}\nType "help" for available commands.`,
            },
          ]);
      }
    },
    [addLines, onClose]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= 0) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot dot-red" onClick={onClose} />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <span className="terminal-title">fakhrulsojib — bash</span>
          <div className="terminal-titlebar-spacer" />
        </div>
        <div
          className="terminal-body"
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
        >
          {lines.map((line, i) => (
            <div key={i} className={`terminal-line terminal-${line.type}`}>
              <pre>{line.content}</pre>
            </div>
          ))}
          <div className="terminal-input-line">
            <span className="terminal-prompt">
              <span className="prompt-user">visitor</span>
              <span className="prompt-at">@</span>
              <span className="prompt-host">fakhrulsojib.github.io</span>
              <span className="prompt-dollar"> $ </span>
            </span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalOverlay;
