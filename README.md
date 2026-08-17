```markdown
# Tun Sopheak — Personal Developer Portfolio

This is a modern, responsive personal portfolio built with **Astro** and **Tailwind CSS**. It features a sleek glassmorphism UI, a fully functional contact form with EmailJS integration, dynamic project routing, and an automatic dark/light mode toggle.

**Live Site:** [my-portfolio-tun-sopheak.vercel.app](https://my-portfolio-tun-sopheak.vercel.app)

---

## 🚀 Key Features

- **Glassmorphism UI:** A modern, translucent design language consistent across all sections.
- **Dynamic Projects:** Data-driven project cards that automatically generate individual detail pages (`src/pages/projects/[id].astro`).
- **Functional Contact Form:** Uses EmailJS to send messages directly to the developer's inbox without requiring a backend server.
- **Dark/Light Mode:** Toggleable theme that persists via local storage and detects the user's system preference.
- **Scroll Spy Navbar:** Automatically highlights the active navigation section as the user scrolls.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

- **Astro** (Static Site Generator)
- **Tailwind CSS** (Styling)
- **EmailJS** (Email Delivery)
- **TypeScript** (Type Safety)
- **Devicon** (Tech Stack Icons)
- **Vercel** (Hosting & Deployment)

## 📂 Project Structure

```text
/
├── public/                 # Static assets (images, favicons, CV)
├── src/
│   ├── components/         # Reusable UI components (Header, Footer, BackToTop)
│   ├── data/               # Project data (projects.js)
│   ├── layouts/            # Main layout wrapper (BaseLayout.astro)
│   ├── pages/              # Page routes (index, projects list, [id] dynamic pages)
│   ├── styles/             # Global CSS with light/dark theme variables
│   └── api/                # (Formerly used, now static via EmailJS)
├── astro.config.mjs        # Astro configuration
└── package.json            # Dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local dev server at `localhost:4321` |
| `npm run build`    | Builds the production site to `./dist/`     |
| `npm run preview`  | Previews the build locally                  |

## 📬 Connect with Me

- **Email:** sopheaktun.tsp@gmail.com
- **GitHub:** [github.com/TunSopheak](https://github.com/TunSopheak)
- **LinkedIn:** [linkedin.com/in/tun-sopheak](https://www.linkedin.com/in/tun-sopheak)

---

**Designed & Developed with ❤️ by Tun Sopheak.**
```