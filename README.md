# Portfolio 2026 ✨

Hi, I’m Georgi — this is my personal portfolio where I showcase the projects I’ve built and the technologies I enjoy working with. 🚀

🌐 **Live site**: `https://georgigarenovportfolio.netlify.app/`

## What you’ll find here 👇

- 🧩 **Projects**: a curated list of real apps I’ve built (with live demos + source code)
- 🛠️ **Skills & services**: the tools I use and the type of work I do
- 📬 **Contact page**: an easy way to reach out

## Tech stack 🧰

- ⚛️ **React 19**: component-based UI
- 🧭 **React Router**: multi-page navigation (SPA routing)
- ⚡ **Vite**: fast dev server + optimized production builds
- 🎨 **Styling**: modern CSS + `react-icons`
- ✅ **Code quality**: ESLint

> The portfolio content (projects/skills/services) is driven by simple data files in `src/data/` so it’s easy to update without touching UI components. 🧠

## Getting started

### Prerequisites

- **Node.js**: recent LTS recommended
- **npm**: comes with Node

### Install & run

```bash
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`).

## Scripts

```bash
# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

## Project structure

```text
src/
  assets/            # Images, static assets
  components/        # Reusable UI components
  data/              # Portfolio content (projects, skills, services)
  pages/             # Route pages (e.g. Contact)
```

## Content updates

Most portfolio content is driven by files in `src/data/`:

- **Projects**: `src/data/projectData.js` (titles, descriptions, tech tags, links, images)
- **Services**: `src/data/services.js`
- **Skills**: `src/data/skills.js`

## Featured projects 🧑‍💻

Below are the highlighted projects currently listed in `src/data/projectData.js` (each one has a **Live Demo** + **GitHub** link on the site):

### 1) Sunglasses Ecommerce Website 🕶️

A full-stack e-commerce app with a shopping experience and an admin interface.

- **Tech**: React, Tailwind CSS, Vite, Node.js, Express, MongoDB
- **What it demonstrates**: product flows, admin/shop separation, full-stack integration

### 2) Real Estate Marketplace 🏠

A MERN marketplace where users can browse and filter listings, and authenticated users can create/manage listings and profiles (including images).

- **Tech**: React, Redux, Tailwind CSS, Node.js, Express, Firebase, Render
- **What it demonstrates**: auth + CRUD, filtering, profile/listing management, production deployment
