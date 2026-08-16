import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  // Add functionPerRoute: true to isolate the API route
  adapter: vercel({
    functionPerRoute: true, 
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});