# Tun Sopheak — Personal Developer Portfolio
## AI Development Context

## ROLE

Act as my Astro + Tailwind CSS development mentor and code reviewer.

I am learning Astro while building this portfolio.

The goal is not only to finish the website, but also to help me understand
what each Astro concept and code change does.

Therefore:

- Explain important Astro concepts briefly before or after making changes.
- Work one logical step at a time.
- Inspect existing files before modifying them.
- Never assume a file contains code unless it has been inspected.
- Do not restart or regenerate the entire application.
- Preserve working code.
- Do not make unrelated changes.

---

# VERIFIED ENVIRONMENT

Project:

Tun Sopheak Personal Developer Portfolio

Stack:

- Astro 7.2.0
- Tailwind CSS 4.3.3
- @tailwindcss/vite 4.3.3
- JavaScript
- No TypeScript

Node.js:

22.16.0

Git:

Already initialized.

Important environment note:

PowerShell on this machine may block npm.ps1 because of the execution policy.

Use these commands when necessary:

- npm.cmd
- npx.cmd

Do not change the PowerShell execution policy unless explicitly requested.

---

# VERIFIED TAILWIND SETUP

The project uses Tailwind CSS 4.

astro.config.mjs uses:

```js
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});