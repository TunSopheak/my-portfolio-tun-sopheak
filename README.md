# Tun Sopheak — Personal Developer Portfolio

A fast, bilingual (**English / ខ្មែរ**) portfolio built with **Astro** and **Tailwind CSS**, with a Khmer-inspired design, dark/light mode and a working contact form.

**Live Site:** [tun-sopheak-portfolio.vercel.app](https://tun-sopheak-portfolio.vercel.app/)

---

## Key Features

- **English / ខ្មែរ switch** – every visible text has both languages; the choice is remembered, and `?lang=km` in a URL opens the Khmer version.
- **Clean, Khmer-inspired design** – a photo of Angkor in the hero, Angkor Wat and the Cambodian flag in the footer, with generous white space.
- **Data-driven content** – projects, activities, achievements, skills and education live in `src/data/`; pages are generated from them.
- **Contact form** – EmailJS (no backend), with a honeypot against spam and safe toast messages.
- **Smooth motion** – eased in-page scrolling, scroll progress bar, staggered reveal and hero entrance; all off with `prefers-reduced-motion`.
- **Dark / light mode** – saved in localStorage, follows the OS by default, no flash on load.
- **Fast on phones** – small WebP images, self-hosted icons, a still hero image (no video), and animations that only use `transform` and `opacity`.
- **Responsive & accessible** – mobile-first, 44px touch targets, keyboard-friendly menu, skip link, `prefers-reduced-motion` support.

---

## Project Structure

```text
public/assets/
├── images/            # photos, project screenshots (+ optimized .webp copies)
├── icons/tech/        # self-hosted skill logos (SVG)
├── icons/education/   # education timeline icons
└── files/ videos/     # CV, hero video
src/
├── components/        # T, Icon, SectionHeading, ProjectCard, SkillCard, ContactForm…
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

### Environment variables

Create `.env` (never commit it):

```env
PUBLIC_EMAILJS_SERVICE_ID=...
PUBLIC_EMAILJS_TEMPLATE_ID=...
PUBLIC_EMAILJS_PUBLIC_KEY=...
```

---

## How the language switch works

1. Every text is written as `<T en="…" km="…" />`. The component renders **both** languages as two `<span>`s.
2. CSS hides the one that does not match `<html lang>` (`global.css`, section 3), so there is no layout jump and it works even before JavaScript loads.
3. A tiny inline script in `BaseLayout.astro` sets `lang` (and the theme) **before first paint** from `localStorage`, or from `?lang=km` / `?lang=en` in the URL.
4. `src/scripts/ui.ts` handles the EN / ខ្មែរ buttons and swaps attributes that cannot hold two spans (placeholders, `aria-label`) via `data-ph-en/km` and `data-aria-en/km`.
5. Content in `src/data/*.js` has an optional `km` block; anything missing falls back to English.

Khmer typography rules (taller line-height, no uppercase / letter-spacing) are applied automatically when `lang="km"`.

---

## Deployment (Vercel)

- Push to GitHub; Vercel builds with `npm run build` and serves `dist/`.
- Add the three `PUBLIC_EMAILJS_*` variables in **Vercel → Project → Settings → Environment Variables**. Without them the contact form shows a friendly "not set up" message instead of failing.
- Pull requests get a preview URL, so a branch can be checked before merging into `main`.
- The sitemap is generated at build time from `site` in `astro.config.mjs`.

---

## To-do / known items

- [ ] Add `public/assets/images/projects/julnow.jpg` (the card currently shows a placeholder).
- [ ] Have a native speaker review the Khmer translations, and confirm the Khmer spelling of the name.
- [ ] Re-take the "Portfolio" project screenshot to show the new design.
- [ ] Decide what the "Mr. Sterling" badge in the About section should say.

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
