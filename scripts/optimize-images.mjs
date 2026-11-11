// scripts/optimize-images.mjs
// Creates small .webp copies of the big images next to the originals.
// Originals are NEVER modified or deleted. Safe to re-run.
//
//   node scripts/optimize-images.mjs
//
// Then point the data files at the .webp versions (already done for this repo).

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";

const ROOT = "public/assets/images";
const MAX_WIDTH = 1200; // card thumbnails are shown ≤ 640px wide (2× for retina)
const LOGO_WIDTH = 160;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const kb = (n) => `${Math.round(n / 1024)} KB`;

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

  const { size } = await stat(file);
  if (size < 150 * 1024) continue; // already small enough

  const name = basename(file, ext);
  const isLogo = /^logo/.test(name);
  const out = join(dirname(file), `${name}.webp`);

  const info = await sharp(file)
    .resize({ width: isLogo ? LOGO_WIDTH : MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(out);

  console.log(`${file}  ${kb(size)} → ${out}  ${kb(info.size)}`);
}
