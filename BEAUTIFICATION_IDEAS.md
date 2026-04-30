# Portfolio Beautification Ideas

A prioritized list of visual enhancements for [fakhrulsojib.github.io](https://fakhrulsojib.github.io).

---

## Tier 1 — Quick Wins (CSS-only)

### 1. Premium Color Palette & Dark Mode Overhaul
- Replace harsh `#000000` dark mode with rich midnight (`#0c0c14`)
- Replace flat `#ffffff` with soft blue-white (`#fafbff`)
- Shift primary color from generic blue to indigo-violet (`#6366f1`)
- Add `--accent-gradient` CSS variable for reuse

**Status:** ✅ Done

### 2. Typography Upgrade — Inter + JetBrains Mono
- Add Google Fonts: `Inter` (body) and `JetBrains Mono` (code/tech tags)
- Apply `JetBrains Mono` to `.technology-tag`, `.skill`, `.responsibilities li`, `.course-tag`

**Status:** ✅ Done

### 3. Glassmorphism Cards (Dark Mode)
- Apply frosted-glass effect (`backdrop-filter: blur`) to all cards in dark mode
- Affects: Skills panels, CP cards, Education cards, Project cards
- Adds subtle border glow and depth

**Status:** ✅ Done

### 4. Gradient Section Headings
- Apply gradient text fill to `.section-heading` using primary → violet
- Uses `background-clip: text` technique

**Status:** ⬜ Not started

### 5. Section Dividers — Soft Gradient Lines
- Add a subtle gradient horizontal rule between sections
- Uses `::before` pseudo-element on adjacent sections

**Status:** ⬜ Not started

### 6. Header Glassmorphism + Glow
- Replace solid header background with frosted-glass effect
- Different treatment for light vs dark mode

**Status:** ⬜ Not started

---

## Tier 2 — Medium Impact (CSS + minor HTML/data changes)

### 7. Animated Gradient Border on CP Cards
- Add animated shifting rainbow border to Codeforces/Codechef cards
- Uses CSS `mask-composite` technique with `@keyframes`

**Status:** ⬜ Not started

### 8. Hero Section — Particle Background
- Add subtle particle network animation behind the hero section
- Keeps existing balloons; adds AI-themed ambient effect alongside them

**Status:** ⬜ Not started

### 9. Skill Tags — Color-Coded by Category
- Add `category` field to `skills.json` (Languages, Frameworks, Infra, AI/ML)
- Color-code tags: Indigo (languages), Emerald (frameworks), Amber (infra), Violet (AI)

**Status:** ⬜ Not started

---

## Tier 3 — Premium Upgrades (New components)

### 10. Subtle Ambient Background Animation
- Add faint animated gradient mesh to hero section background
- Pure CSS using layered radial gradients with slow animation
- Visible but not distracting

**Status:** ⬜ Not started
