# Tun Sopheak — Personal Developer Portfolio

A modern, responsive personal portfolio built with **Astro** and **Tailwind CSS**. It features a sleek glassmorphism UI, a fully functional contact form with EmailJS integration, dynamic project routing, and an automatic dark/light mode toggle.

**Live Site:** [tun-sopheak-portfolio.vercel.app](https://tun-sopheak-portfolio.vercel.app/)

---

## 🚀 Key Features

- **Glassmorphism UI** – A modern, translucent design language consistent across all sections.
- **Dynamic Projects** – Data-driven project cards that automatically generate individual detail pages (`src/pages/projects/[id].astro`).
- **Functional Contact Form** – Uses EmailJS to send messages directly to the developer's inbox without requiring a backend server.
- **Dark/Light Mode** – Toggleable theme that persists via local storage and detects the user's system preference.
- **Scroll Spy Navbar** – Automatically highlights the active navigation section as the user scrolls.
- **Responsive Design** – Fully optimized for mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | Astro, Tailwind CSS, TypeScript |
| **Backend** | Java, Spring Boot, Python, FastAPI, Node.js |
| **Database** | PostgreSQL, SQL, Prisma |
| **Tools** | Git, GitHub, Docker, Vercel |
| **Email** | EmailJS |

---

## 📂 Project Structure

public/
├── assets/
│   ├── images/          # Project images, profile photos
│   └── files/           # CV, certificates (PDF)
└── favicon.ico
src/
├── components/          # Reusable UI components (Header, Footer, BackToTop)
├── config/              # Configuration (Google Drive File IDs, etc.)
├── data/                # Data (projects.js, activities.js, achievements.js)
├── layouts/             # Main layout wrapper (BaseLayout.astro)
├── pages/               # Page routes (index, projects/[id], activities/[id])
└── styles/              # Global CSS with light/dark theme variables
astro.config.mjs
package.json
tsconfig.json

---

## 🧞 Commands
All commands are run from the root of the project, from a terminal:

Command	Action
npm install	Installs dependencies
npm run dev	Starts local dev server at localhost:4321
npm run build	Builds the production site to ./dist/
npm run preview	Previews the build locally

---

## 📬 Connect with Me
Email: sopheaktun.tsp@gmail.com
GitHub: github.com/TunSopheak
LinkedIn: linkedin.com/in/tun-sopheak
Telegram: t.me/TUN_SOPHEAK
Facebook: facebook.com/Mr.TunSopheak

---

## 📝 License
This project is open source and available under the MIT License.

Designed & Developed with ❤️ by Tun Sopheak.