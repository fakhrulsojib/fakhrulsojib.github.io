# Gemini LLM Instructions for fakhrulsojib.github.io Project

This document provides guidelines for the Gemini LLM when interacting with this project.

## Project Overview
This is a personal portfolio website built with React and TypeScript, showcasing the owner's professional experience and skills.

## Key Technologies
- **Frontend:** React, TypeScript
- **Build Tool:** Vite
- **Styling:** CSS Modules (co-located with components/sections)

## Project Structure Guidelines

### Content Data
- Most dynamic content (e.g., home page text, education, experience, projects, skills, navigation) is stored in JSON files located in `src/assets/data/`.
- When asked to modify content, first check the relevant JSON file in this directory.

### Components and Sections
- Reusable UI elements are found in `src/components/`.
- Major page sections (e.g., Home, Education, Experience) are located in `src/sections/`.
- Each component or section typically has its own TypeScript (`.tsx`) and CSS (`.css`) file.

### Styling
- CSS files are generally co-located with the components or sections they style.
- Adhere to the existing CSS naming conventions and structure.

### Hooks
- Custom React hooks are located in `src/hooks/`.

### Utilities
- Utility functions or mappings (like `iconMap.ts`) are in `src/utils/`.

## General Instructions for LLM

1.  **Adhere to Conventions:** Always follow the existing code style, naming conventions, and architectural patterns observed in the project.
2.  **Use Existing Libraries/Frameworks:** Do not introduce new libraries or frameworks without explicit instruction. Utilize what is already present.
3.  **Prioritize Data Files for Content Changes:** For content modifications, always check `src/assets/data/` first before attempting to change hardcoded text in components.
4.  **Explain Critical Commands:** Before executing any command that modifies the file system or codebase, provide a brief explanation.
5.  **Ask for Clarification:** If a request is ambiguous or requires significant architectural changes, ask for clarification before proceeding.
6.  **No inline comment:** IMPORTANT NOTE: No inline comment.
7.  **Always production ready:** Do not put any sensitive data in code. Always ask where to put the new data.