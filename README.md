```markdown
# Tun Sopheak — Personal Developer Portfolio

A modern, responsive personal portfolio built with **Astro** and **Tailwind CSS**.  
It features a clean glassmorphism design, a fully working contact form powered by EmailJS, dynamic project pages, dark/light mode, and smooth animations.

**Live Demo:** [my-portfolio-tun-sopheak.vercel.app](https://my-portfolio-tun-sopheak.vercel.app)

---

## ✨ Key Features

- **Modern Glassmorphism UI** – Soft translucent cards and consistent visual language
- **Dynamic Projects** – Project data lives in `src/data/projects.js` and automatically generates detail pages
- **Working Contact Form** – Sends emails directly to my inbox using EmailJS (no backend required)
- **Dark / Light Mode** – Toggle with system preference detection + localStorage persistence
- **Scroll Spy Navigation** – Active section is highlighted automatically while scrolling
- **Fully Responsive** – Looks great on mobile, tablet, and desktop
- **Smooth Animations** – Typewriter effect, counter animation, and floating elements

---

## 🛠️ Tech Stack

| Category          | Technology              |
|-------------------|-------------------------|
| Framework         | Astro 5                 |
| Styling           | Tailwind CSS 4          |
| Email Service     | EmailJS                 |
| Language          | TypeScript / JavaScript |
| Icons             | Devicon                 |
| Hosting           | Vercel                  |

---

## 📂 Project Structure

```text
/
├── public/
│   ├── assets/
│   │   ├── files/          # CV (PDF)
│   │   └── images/         # Profile photos & project images
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── components/         # Header, Footer, BackToTop
│   ├── data/
│   │   ├── projects.js     # Project data
│   │   └── activities.js   # (Coming soon)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Main portfolio page
│   │   └── projects/
│   │       ├── index.astro
│   │       └── [id].astro  # Dynamic project detail pages
│   └── styles/
│       └── global.css      # Theme variables + custom styles
├── .env                    # EmailJS keys (never commit this)
├── astro.config.mjs
├── package.json
└── README.md
```

---

## 🧞 Commands

All commands are run from the root of the project:

| Command            | Action                                      |
|--------------------|---------------------------------------------|
| `npm install`      | Installs dependencies                       |
| `npm run dev`      | Starts local development server at `localhost:4321` |
| `npm run build`    | Builds the production site to `./dist/`     |
| `npm run preview`  | Previews the production build locally       |
| `npm run astro ...`| Runs Astro CLI commands (e.g. `astro add`, `astro check`) |

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory with the following content:

```env
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Important:** Never commit the `.env` file to Git. It is already listed in `.gitignore`.

---

## 📬 Connect with Me

- **Email:** [sopheaktun.tsp@gmail.com](mailto:sopheaktun.tsp@gmail.com)
- **GitHub:** [github.com/TunSopheak](https://github.com/TunSopheak)
- **LinkedIn:** [linkedin.com/in/tun-sopheak](https://www.linkedin.com/in/tun-sopheak)

---

**Designed & Developed with ❤️ by Tun Sopheak**
```