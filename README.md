# Tun Sopheak — Personal Developer Portfolio

A fast, bilingual (**English / ខ្មែរ**) portfolio built with **Astro** and **Tailwind CSS**, with a Khmer-inspired design, dark/light mode and a working contact form.

**Live Site:** [tun-sopheak-portfolio.vercel.app](https://tun-sopheak-portfolio.vercel.app/)

---

## Key Features

- **English / ខ្មែរ switch** – every visible text has both languages; the choice is remembered, and `?lang=km` in a URL opens the Khmer version.
- **Khmer-inspired design** – an Angkor Wat silhouette divider, a lotus-rosette lattice and rosette heading ornaments (see [Khmer ornament](#khmer-ornament)).
- **Data-driven content** – projects, activities, achievements, skills and education live in `src/data/`; pages are generated from them.
- **Contact form** – EmailJS (no backend), with a honeypot against spam and safe toast messages.
- **Dark / light mode** – saved in localStorage, follows the OS by default, no flash on load.
- **Fast on phones** – small WebP images, self-hosted icons, lazy hero video that is skipped on mobile / data-saver / reduced-motion, and animations that only use `transform` and `opacity`.
- **Responsive & accessible** – mobile-first, 44px touch targets, keyboard-friendly menu, skip link, `prefers-reduced-motion` support.

---

## Project Structure

```text
public/assets/
├── images/            # photos, project screenshots (+ optimized .webp copies)
├── icons/tech/        # self-hosted skill logos (SVG)
├── icons/education/   # education timeline icons
├── patterns/          # phka-lattice.svg (Khmer lattice tile)
└── files/ videos/     # CV, hero video
src/
├── components/        # T, Icon, SectionHeading, ProjectCard, SkillCard, ContactForm, Khmer*…
├── data/              # projects, activities, achievements, skills, education, nav, profile, types
├── layouts/           # BaseLayout (SEO, fonts, theme + language init)
├── pages/             # index, projects/[id], activities/[id], achievements
├── scripts/ui.ts      # language, theme, scroll-reveal, back-to-top
└── styles/global.css  # theme tokens, component classes, hero animation
scripts/optimize-images.mjs
```

---

## Everyday tasks

| I want to…                     | Edit                                                                           |
|--------------------------------|---------------------------------------------------------------------------------|
| Add a project / activity       | `src/data/projects.js` / `activities.js` – add an object, with an optional `km` block |
| Add a skill                    | `src/data/skills.js` – add `{ name, icon }` (drop the SVG into `public/assets/icons/tech/`) |
| Change colours                 | `src/styles/global.css` – the tokens at the top (`:root` and `.dark`)           |
| Change links / email / CV      | `src/data/profile.js`                                                           |
| Add a menu item                | `src/data/nav.js`                                                               |
| Translate a text               | `<T en="Hello" km="សួស្តី" />` (missing `km` falls back to English)             |

**Images:** put the original in `public/assets/images/…`, run `node scripts/optimize-images.mjs`, and point the data file to the generated `.webp`. Originals are never touched.

**Hero video:** `public/assets/videos/khmer-tech-bg.mp4` is ~18 MB. Compress it (e.g. H.264, 1280px wide, ~1.5 MB) for faster desktop loads; it already never loads on mobile.

### Environment variables

Create `.env` (never commit it):

```env
PUBLIC_EMAILJS_SERVICE_ID=...
PUBLIC_EMAILJS_TEMPLATE_ID=...
PUBLIC_EMAILJS_PUBLIC_KEY=...
```

---

## Khmer ornament

All ornament artwork is **original**, drawn for this site — nothing is copied or traced from stock images:

- `src/components/KhmerDivider.astro` – a simplified silhouette of Angkor Wat's five towers (the emblem on Cambodia's flag), each with a lotus-bud top.
- `public/assets/patterns/phka-lattice.svg` and `KhmerRosette.astro` – a four-petal lotus rosette (ផ្កា) in a diamond lattice, a layout seen in Angkorian stone panels.

Flame-shaped "kranok" curves were deliberately avoided because they read as Thai rather than Khmer. If you later add artwork from another source (e.g. a stock site), credit it here and check its licence. Having a Khmer designer or art teacher review the motifs is recommended.

---

## Tech Stack

| Category     | Technologies                                |
|--------------|---------------------------------------------|
| **Frontend** | Astro, Tailwind CSS 4, TypeScript           |
| **Email**    | EmailJS                                     |
| **Hosting**  | Vercel                                      |
| **Fonts**    | Inter, Kantumruy Pro (Khmer)                |

## Commands

| Command           | Action                                      |
|-------------------|---------------------------------------------|
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Builds the production site to `./dist/`     |
| `npm run preview` | Previews the build locally                  |

---

## Connect with Me

- **Email:** [sopheaktun.tsp@gmail.com](mailto:sopheaktun.tsp@gmail.com)
- **GitHub:** [github.com/TunSopheak](https://github.com/TunSopheak)
- **LinkedIn:** [linkedin.com/in/tun-sopheak](https://linkedin.com/in/tun-sopheak)
- **Telegram:** [t.me/TUN_SOPHEAK](https://t.me/TUN_SOPHEAK)
- **Facebook:** [facebook.com/Mr.TunSopheak](https://facebook.com/Mr.TunSopheak)

---

## License

This project is open source and available under the [MIT License](LICENSE).

Designed & Developed by **Tun Sopheak**.
