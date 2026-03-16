Assessment 1: Project Setup & Tech Stack
- [ ] Confirm project goals and audience
  - **Goal**: Showcase front-end skills (React, CSS, responsive design) with no backend.
  - **Audience**: Hiring managers and senior developers.
- [ ] Initialize React project
  - [ ] Create Vite + React app (JS, not TS, unless you prefer TS).
  - [ ] Clean default boilerplate (remove unused components/styles).
  - [ ] Set up `src` structure:
    - `components/`
    - `pages/`
    - `data/`
    - `assets/images/`
- [ ] Install dependencies
  - [ ] `react-router-dom`
  - [ ] `react-icons`
- [ ] Basic Git setup
  - [ ] Ensure `.gitignore` covers `node_modules`, build output, and `.env` if needed.
  - [ ] Make an initial commit once the basic structure is created.

---

Assessment 2: App Architecture & Routing
- [ ] Define main pages and routes
  - [ ] Pages: `Home`, `Projects`, `Skills`, `About`, `Contact`.
  - [ ] Create files:
    - `src/pages/Home.jsx` + `Home.css`
    - `src/pages/Projects.jsx` + `Projects.css`
    - `src/pages/Skills.jsx` + `Skills.css`
    - `src/pages/About.jsx` + `About.css`
    - `src/pages/Contact.jsx` + `Contact.css`
- [ ] Configure routing
  - [ ] Update `App.jsx` to use `BrowserRouter`, `Routes`, `Route`.
  - [ ] Define routes:
    - `/` → `Home`
    - `/projects` → `Projects`
    - `/skills` → `Skills`
    - `/about` → `About`
    - `/contact` → `Contact`
- [ ] Create a `Layout` pattern
  - [ ] Create `Navbar.jsx` + `Navbar.css` in `components/`.
  - [ ] Create `Footer.jsx` + `Footer.css` in `components/`.
  - [ ] Option A: Wrap routes in a `Layout` component that includes `Navbar` + `Footer`.
  - [ ] Option B: Render `Navbar` and `Footer` directly in `App.jsx` around the `Routes`.

---

Assessment 3: Data Modeling (Projects & Skills)
- [ ] Create data folder and files
  - [ ] `src/data/ProjectData.js`
  - [ ] `src/data/skills.js`
- [ ] Define `projectData`
  - [ ] For each project, include:
    - `title`
    - `description`
    - `tech` (array of strings)
    - `image` (string path, e.g. `"/assets/images/project1.png"` or an imported image)
    - `liveDemo` (URL)
    - `github` (URL)
- [ ] Move project images into `assets`
  - [ ] Add images to `src/assets/images/`.
  - [ ] Ensure image paths in `ProjectData.js` are correct.
- [ ] Define `skillsData`
  - [ ] Import icons from `react-icons` (as in your example).
  - [ ] Create categories such as:
    - `"Core Web Technologies"`
    - `"Front-End Frameworks & Tools"`
    - `"Back-End & Databases"` (if you want to show them)
    - `"Tools & Platforms"`
  - [ ] For each category, define `items` with `{ name, icon }`.

---

Assessment 4: Global Styling & Design System
- [ ] Define global styles in `index.css`
  - [ ] Set base font family, colors, and background.
  - [ ] Create CSS variables for:
    - Primary color
    - Accent color
    - Background color
    - Text color
  - [ ] Add base styles for:
    - `body`, `a`, `button`, `h1–h4`.
- [ ] Define layout helpers
  - [ ] Simple container class for max-width and horizontal padding.
  - [ ] Utility classes for spacing (e.g. section padding).
- [ ] Set responsive breakpoints
  - [ ] At least two breakpoints: tablet and mobile.
  - [ ] Decide how the layout should change (stacking vs side-by-side).

---

Assessment 5: Core Components
- [ ] Navbar
  - [ ] Implement `Navbar.jsx` with:
    - Logo or name on the left.
    - Navigation links to: Home, Projects, Skills, About, Contact.
  - [ ] Style `Navbar.css`:
    - Fixed or sticky at the top.
    - Responsive mobile menu (hamburger) if possible.
- [ ] HeroSection
  - [ ] Create `HeroSection.jsx` + `HeroSection.css`.
  - [ ] Include:
    - Your name and role (e.g. "Front-End Developer").
    - 1–2 sentence summary.
    - Call-to-action buttons (e.g. "View Projects", "Contact Me").
  - [ ] Ensure hero is responsive and looks good on mobile.
- [ ] Footer
  - [ ] Add social links (GitHub, LinkedIn, email).
  - [ ] Add simple copyright text.

---

Assessment 6: Projects Page & ProjectCard Component
- [ ] Create `ProjectCard` component
  - [ ] `components/ProjectCard.jsx` + `ProjectCard.css`.
  - [ ] Props:
    - `title`
    - `description`
    - `tech`
    - `image`
    - `liveDemo`
    - `github`
  - [ ] Layout:
    - Image at the top or left.
    - Title, description, tech badges, and buttons for demo/GitHub.
- [ ] Implement `Projects` page
  - [ ] Import `projectData`.
  - [ ] Map over `projectData` to render `ProjectCard` for each project.
  - [ ] Use CSS grid or flexbox for a responsive grid of cards.
- [ ] Add hover effects and micro-interactions
  - [ ] Subtle hover effect on cards.
  - [ ] Button hover states.

---

Assessment 7: Skills Page
- [ ] Implement `Skills` page layout
  - [ ] Import `skillsData`.
  - [ ] For each category, render:
    - Category title.
    - Grid of skills with icon + name.
  - [ ] Use a clean grid layout that works on mobile and desktop.
- [ ] Style skill items
  - [ ] Consistent icon size and spacing.
  - [ ] Subtle hover or focus effect.

---

Assessment 8: About & Contact Pages
- [ ] About page
  - [ ] Add a clear, short biography (who you are, what you do, what you’re looking for).
  - [ ] Highlight your strengths (front-end, React, CSS, etc.).
  - [ ] Optionally add a timeline of experience or learning.
- [ ] Contact page
  - [ ] Include:
    - Email link.
    - Links to GitHub, LinkedIn, and any other relevant profiles.
  - [ ] Optional: simple contact form (front-end only).
  - [ ] Ensure all links are easy to click and accessible.

---

Assessment 9: Responsiveness & Polish
- [ ] Mobile-first checks
  - [ ] Test each page on a small width (e.g. DevTools) and adjust CSS.
  - [ ] Ensure navbar works on mobile (burger or stacked links).
- [ ] Tablet and desktop adjustments
  - [ ] Verify sections use space well on larger screens.
  - [ ] Ensure grid layouts don’t become too wide or cramped.
- [ ] Visual polish
  - [ ] Add consistent spacing between sections.
  - [ ] Ensure typography hierarchy is clear (H1, H2, body).
  - [ ] Add a simple, consistent color palette (max 2–3 main colors).

---

Assessment 10: Performance, Accessibility & Deployment
- [ ] Performance basics
  - [ ] Optimize images (use reasonable sizes, compress if needed).
  - [ ] Avoid unnecessary re-renders (simple functional components are usually fine).
- [ ] Accessibility basics
  - [ ] Use semantic HTML (`main`, `header`, `footer`, `section`, `nav`).
  - [ ] Ensure buttons and links are keyboard-navigable.
  - [ ] Provide `alt` text for images.
- [ ] Deployment
  - [ ] Choose a hosting platform (e.g. Vercel, Netlify).
  - [ ] Build and deploy the app.
  - [ ] Test the live site on desktop and mobile.
- [ ] Final review
  - [ ] Click through all links and buttons.
  - [ ] Fix any layout issues on the live site.
  - [ ] Update `projectData` and `skillsData` if needed to reflect your latest work.

---

Mentor Note: How to Work Through This
- Start from **Assessment 1** and move down one assessment at a time.
- For each assessment:
  - Read all tasks.
  - Implement them in code.
  - Check off the boxes in this file as you complete them.
- If you feel stuck at any step, write down what you tried and then ask for help with that specific assessment/task.