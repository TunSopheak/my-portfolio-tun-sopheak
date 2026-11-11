// src/scripts/ui.ts
// Site-wide behaviour, loaded once from BaseLayout:
//   • language switch (EN / ខ្មែរ)      • dark / light theme
//   • scroll-reveal animation          • back-to-top button
// The *initial* theme and language are applied earlier by the inline script in
// BaseLayout's <head>, so there is no flash on load.

type Lang = "en" | "km";
const root = document.documentElement;

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
// Back to top
// ---------------------------------------------------------------
const backToTop = document.getElementById("back-to-top");
if (backToTop) {
  let ticking = false;
  const update = () => {
    backToTop.dataset.show = String(window.scrollY > 500);
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  update();
}
