// src/scripts/network.ts
// Animated "network" backgrounds: small dots drift slowly and nearby dots are joined
// by thin lines. Used on every <canvas data-network> (header bar, hero on mobile).
// Drawn on a canvas (no images, no library). Colour follows the theme (--primary);
// motion stops for prefers-reduced-motion, while the tab is hidden, and while the
// canvas is not displayed (e.g. the mobile-only hero canvas on desktop).
//   data-density="1800"  → pixels² per dot (smaller = more dots)

const root = document.documentElement;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const LINK_DIST = 120;

type Dot = { x: number; y: number; vx: number; vy: number; r: number };

function readRgb(): string {
  const hex = getComputedStyle(root).getPropertyValue("--primary").trim().replace("#", "");
  return hex.length === 6 ? [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16)).join(",") : "180,83,9";
}

function createNetwork(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const density = Number(canvas.dataset.density) || 1800;
  let dots: Dot[] = [];
  let w = 0;
  let h = 0;
  let rgb = readRgb();
  let raf = 0;

  function draw(): void {
    ctx!.clearRect(0, 0, w, h);
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > LINK_DIST) continue;
        ctx!.strokeStyle = `rgba(${rgb},${0.3 * (1 - d / LINK_DIST)})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
      }
    }
    ctx!.fillStyle = `rgba(${rgb},0.55)`;
    for (const d of dots) {
      ctx!.beginPath();
      ctx!.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx!.fill();
    }
  }

  function tick(): void {
    for (const d of dots) {
      d.x += d.vx;
      d.y += d.vy;
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
    }
    draw();
    raf = requestAnimationFrame(tick);
  }

  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };
  const start = () => {
    if (reduceMotion || raf || document.hidden || !w) return;
    raf = requestAnimationFrame(tick);
  };

  function resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    if (!w || !h) return stop(); // not displayed
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(10, Math.min(60, Math.round((w * h) / density)));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.2,
      r: 1 + Math.random() * 1.4,
    }));
    if (reduceMotion) draw();
    else start();
  }

  new ResizeObserver(resize).observe(canvas);
  new MutationObserver(() => {
    rgb = readRgb();
    if (reduceMotion) draw();
  }).observe(root, { attributes: true, attributeFilter: ["class"] });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  resize();
}

document.querySelectorAll<HTMLCanvasElement>("canvas[data-network]").forEach(createNetwork);
