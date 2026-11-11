// src/scripts/ui.ts
// Site-wide behaviour, loaded once from BaseLayout:
//   • language switch (EN / ខ្មែរ)      • dark / light theme
//   • scroll-reveal animation          • back-to-top button
// The *initial* theme and language are applied earlier by the inline script in
// BaseLayout's <head>, so there is no flash on load.

import "./network";

type Lang = "en" | "km";
const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const store = {
  get(key: string): string | null {
    try { return localStorage.getItem(key); } catch { return null; }
  },
  set(key: string, value: string): void {
    try { localStorage.setItem(key, value); } catch { /* private mode: ignore */ }
  },
};

/** Current UI language ("en" | "km"). Other scripts import this. */
export const getLang = (): Lang => (root.lang === "km" ? "km" : "en");

// ---------------------------------------------------------------
// Language
// ---------------------------------------------------------------
/** Swap attributes that can't hold two <span>s (placeholders, aria-labels). */
function applyAttributes(lang: Lang): void {
  document.querySelectorAll<HTMLInputElement>("[data-ph-en]").forEach((el) => {
    el.placeholder = (lang === "km" ? el.dataset.phKm : el.dataset.phEn) ?? "";
  });
  document.querySelectorAll<HTMLElement>("[data-aria-en]").forEach((el) => {
    el.setAttribute("aria-label", (lang === "km" ? el.dataset.ariaKm : el.dataset.ariaEn) ?? "");
  });
}

function setLang(lang: Lang): void {
  root.lang = lang;
  store.set("lang", lang);
  applyAttributes(lang);
  document.dispatchEvent(new CustomEvent<Lang>("langchange", { detail: lang }));
}

applyAttributes(getLang());
document.addEventListener("click", (event) => {
  const target = (event.target as Element).closest<HTMLElement>("[data-set-lang]");
  if (target) setLang(target.dataset.setLang === "km" ? "km" : "en");
});

// ---------------------------------------------------------------
// Theme
// ---------------------------------------------------------------
document.addEventListener("click", (event) => {
  if (!(event.target as Element).closest("[data-theme-toggle]")) return;
  // fade colours for a moment instead of snapping (skipped for reduced motion)
  if (!reduceMotion) {
    root.classList.add("theme-anim");
    window.setTimeout(() => root.classList.remove("theme-anim"), 400);
  }
  const dark = root.classList.toggle("dark");
  store.set("theme", dark ? "dark" : "light");
});

// ---------------------------------------------------------------
// Scroll reveal
// ---------------------------------------------------------------
const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}

// ---------------------------------------------------------------
// Smooth scrolling: eased, scaled to the distance, cancelled when the user scrolls
// ---------------------------------------------------------------
let scrollRaf = 0;
const cancelScroll = () => cancelAnimationFrame(scrollRaf);
["wheel", "touchstart", "keydown"].forEach((type) => window.addEventListener(type, cancelScroll, { passive: true }));

function smoothScrollTo(targetY: number): void {
  cancelScroll();
  const startY = window.scrollY;
  const maxY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.max(0, Math.min(targetY, maxY));
  const distance = endY - startY;
  if (reduceMotion || Math.abs(distance) < 2) {
    window.scrollTo(0, endY);
    return;
  }
  const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.45));
  const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2); // easeInOutCubic
  const t0 = performance.now();
  const step = (now: number) => {
    const p = Math.min((now - t0) / duration, 1);
    window.scrollTo(0, startY + distance * ease(p));
    if (p < 1) scrollRaf = requestAnimationFrame(step);
  };
  scrollRaf = requestAnimationFrame(step);
}

document.addEventListener("click", (event) => {
  const link = (event.target as Element).closest<HTMLAnchorElement>("a[href*='#']");
  if (!link || event.defaultPrevented || link.target === "_blank") return;
  if ((event as MouseEvent).metaKey || (event as MouseEvent).ctrlKey || (event as MouseEvent).shiftKey) return;
  const url = new URL(link.href, location.href);
  if (url.pathname !== location.pathname || url.origin !== location.origin) return; // other page: let the browser navigate
  const target = url.hash.length > 1 ? document.getElementById(decodeURIComponent(url.hash.slice(1))) : null;
  if (!target) return;
  event.preventDefault();
  const offset = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
  smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - offset);
  history.pushState(null, "", url.hash);
  target.focus({ preventScroll: true });
});

// ---------------------------------------------------------------
// Scroll-linked UI: progress bar, header shadow, back-to-top (one throttled handler)
// ---------------------------------------------------------------
const progress = document.getElementById("scroll-progress");
const header = document.getElementById("site-header");
const backToTop = document.getElementById("back-to-top");
let ticking = false;

function onScroll(): void {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress?.style.setProperty("--p", String(max > 0 ? Math.min(y / max, 1) : 0));
  if (header) header.dataset.scrolled = String(y > 8);
  if (backToTop) backToTop.dataset.show = String(y > 500);
  ticking = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(onScroll);
    }
  },
  { passive: true },
);
window.addEventListener("resize", onScroll, { passive: true });
backToTop?.addEventListener("click", () => smoothScrollTo(0));
onScroll();

// The Angkor watermark is hidden while the hero is on screen (home page only)
const watermark = document.getElementById("angkor-watermark");
const hero = document.getElementById("hero");
if (watermark && hero && "IntersectionObserver" in window) {
  new IntersectionObserver(([entry]) => {
    watermark.dataset.hide = String(entry.intersectionRatio > 0.35);
  }, { threshold: [0, 0.35, 1] }).observe(hero);
}
