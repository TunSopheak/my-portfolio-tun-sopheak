// src/data/profile.js
// Contact details used by the hero, contact section and footer.
// Change a link here and it updates everywhere.

export const email = "sopheaktun.tsp@gmail.com";

export const cvFile = "/assets/files/Tun_Sopheak - Curriculum_Vitae - Full_Stack_Developer.pdf";

/** `featured` links also appear as icon buttons in the hero and contact section. */
export const socials = [
  { id: "github", label: "GitHub", href: "https://github.com/TunSopheak", icon: "github", featured: true },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/tun-sopheak", icon: "linkedin", featured: true },
  { id: "email", label: "Email", href: `mailto:${email}`, icon: "mail", featured: true },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/Mr.TunSopheak", icon: "facebook" },
  { id: "telegram", label: "Telegram", href: "https://t.me/TUN_SOPHEAK", icon: "telegram" },
];

export const location = {
  en: "Phnom Penh, Cambodia",
  km: "ភ្នំពេញ កម្ពុជា",
  href: "https://www.google.com/maps/search/Phnom+Penh,+Cambodia",
};

export const footerTech = ["Java", "Spring Boot", "Python", "PostgreSQL", "Astro"];
