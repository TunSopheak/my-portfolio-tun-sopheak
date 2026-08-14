import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; // <--- Make sure this is here

export default defineConfig({
  output: 'server',
  adapter: vercel(), // <--- And this is here
  vite: {
    plugins: [tailwindcss()]
  }
});