// src/data/projects.js
// Newest first. The home page shows the first 3.
// Khmer text lives in the optional `km` block of each project.

/**
 * @typedef {import('./types').Project} Project
 * @type {Project[]}
 */
export const projects = [
  {
    id: "julnow",
    status: "coming-soon",
    title: "Julnow - E-commerce Platform",
    description:
      "A mobile-first e-commerce platform built with Flutter, currently in active development. The goal is to provide a seamless shopping experience with a clean, intuitive UI and secure backend integration.",
    year: "2026",
    type: "Mobile App (In Development)",
    image: "/assets/images/projects/julnow.jpg",
    tags: ["Flutter", "Dart", "Firebase", "REST APIs"],
    github: null,
    liveDemo: null,
    overview:
      "A comprehensive mobile application built from the ground up using Flutter. This project focuses on mobile-first user experience, real-time data synchronization, and cross-platform performance.",
    features: [
      "User authentication and profile management",
      "Real-time product catalog and search",
      "Shopping cart and order tracking",
      "Secure payment integration and checkout flow",
    ],
    km: {
      title: "Julnow - វេទិកាលក់ទំនិញអនឡាញ",
      description:
        "វេទិកាលក់ទំនិញអនឡាញសម្រាប់ទូរសព្ទដៃ សាងសង់ដោយ Flutter ហើយកំពុងស្ថិតក្នុងដំណាក់កាលអភិវឌ្ឍ។ គោលដៅគឺផ្តល់បទពិសោធន៍ទិញទំនិញដ៏រលូន ជាមួយចំណុចប្រទាក់ (UI) ស្អាត ងាយប្រើ និងការតភ្ជាប់ទៅ Backend ដែលមានសុវត្ថិភាព។",
      type: "កម្មវិធីទូរសព្ទ (កំពុងអភិវឌ្ឍ)",
      overview:
        "កម្មវិធីទូរសព្ទពេញលេញ ដែលសាងសង់ពីដំបូងដោយប្រើ Flutter។ គម្រោងនេះផ្តោតលើបទពិសោធន៍អ្នកប្រើសម្រាប់ទូរសព្ទជាចម្បង ការធ្វើសមកាលកម្មទិន្នន័យតាមពេលវេលាជាក់ស្តែង និងដំណើរការបានល្អលើគ្រប់ប្រព័ន្ធប្រតិបត្តិការ។",
      features: [
        "ការចូលគណនី និងការគ្រប់គ្រងប្រវត្តិរូបអ្នកប្រើ",
        "បញ្ជីផលិតផល និងការស្វែងរកភ្លាមៗ",
        "កន្ត្រកទំនិញ និងការតាមដានការបញ្ជាទិញ",
        "ការទូទាត់ប្រាក់ដោយសុវត្ថិភាព និងដំណើរការបញ្ចប់ការបញ្ជាទិញ (Checkout)",
      ],
    },
  },
  {
    id: "portfolio",
    title: "Personal Developer Portfolio",
    description:
      "A modern, fully responsive bilingual (English / Khmer) portfolio built with Astro and Tailwind CSS. Features dynamic project routing, an EmailJS contact form, dark/light mode, and a clean, modern design.",
    year: "2026",
    type: "Portfolio Project",
    image: "/assets/images/projects/portfolio.webp",
    tags: ["Astro", "Tailwind CSS", "EmailJS", "Vercel"],
    github: "https://github.com/TunSopheak/my-portfolio-tun-sopheak",
    liveDemo: "https://tun-sopheak-portfolio.vercel.app/",
    overview:
      "This is the very website you are looking at. It was designed and developed to showcase my skills as a full-stack developer using modern static site generation, dynamic content delivery, and a clean, modern user experience.",
    features: [
      "Clean, modern UI with a responsive layout",
      "English / Khmer language switch",
      "Dynamic, data-driven project pages",
      "Working EmailJS contact form",
      "Dark/light mode toggle that remembers your choice",
      "Scroll-spy navbar with clean URLs",
    ],
    km: {
      title: "គេហទំព័រ Portfolio ផ្ទាល់ខ្លួនរបស់អ្នកអភិវឌ្ឍ",
      description:
        "គេហទំព័រ Portfolio ទំនើប ដែលមើលបានស្រួលលើគ្រប់ឧបករណ៍ និងមានពីរភាសា (អង់គ្លេស / ខ្មែរ) សាងសង់ដោយ Astro និង Tailwind CSS។ មានទំព័រគម្រោងដែលបង្កើតពីទិន្នន័យ ទម្រង់ទំនាក់ទំនងតាម EmailJS ម៉ូតងងឹត/ភ្លឺ និងការរចនាស្អាត ទំនើប។",
      type: "គម្រោង Portfolio",
      overview:
        "នេះគឺជាគេហទំព័រដែលអ្នកកំពុងមើលនេះឯង។ វាត្រូវបានរចនា និងអភិវឌ្ឍឡើង ដើម្បីបង្ហាញជំនាញរបស់ខ្ញុំជាអ្នកអភិវឌ្ឍ Full-stack ដោយប្រើបច្ចេកទេសបង្កើតគេហទំព័រឋិតិវន្តទំនើប ការបង្ហាញមាតិកាថាមវន្ត និងបទពិសោធន៍អ្នកប្រើដ៏ស្អាត ទំនើប។",
      features: [
        "ចំណុចប្រទាក់ស្អាត ទំនើប និងប្លង់ដែលសមស្របគ្រប់ទំហំអេក្រង់",
        "ប៊ូតុងប្តូរភាសា អង់គ្លេស / ខ្មែរ",
        "ទំព័រគម្រោងដែលបង្កើតដោយស្វ័យប្រវត្តិពីទិន្នន័យ",
        "ទម្រង់ទំនាក់ទំនង EmailJS ដែលដំណើរការបានពិតប្រាកដ",
        "ប៊ូតុងប្តូរម៉ូតងងឹត/ភ្លឺ ដែលចងចាំជម្រើសរបស់អ្នក",
        "របារម៉ឺនុយដែលបន្លិចផ្នែកបច្ចុប្បន្នពេលរមូរ និង URL ស្អាត",
      ],
    },
  },
  {
    id: "smart-classroom",
    title: "Smart Classroom with AI Monitoring",
    description:
      "A smart classroom MVP with student management, attendance tracking, reporting, AI monitoring, face recognition, and a web dashboard.",
    year: "2026",
    type: "Academic Group Project",
    image: "/assets/images/projects/smart-classroom.webp",
    tags: ["Python", "FastAPI", "OpenCV", "SQLite"],
    github: "https://github.com/TunSopheak/Smart-Classroom-AI-IoT",
    liveDemo: null,
    overview:
      "This project aimed to create a functional MVP for a modern classroom environment. It integrates AI monitoring for student engagement, facial recognition for automatic attendance, and a central dashboard for educators to manage reports.",
    features: [
      "Student management and attendance tracking dashboard",
      "AI-based facial recognition for automated check-ins",
      "Automated reporting and analytics for teachers",
      "Real-time classroom monitoring interface",
    ],
    km: {
      title: "ថ្នាក់រៀនឆ្លាតវៃដែលមានប្រព័ន្ធត្រួតពិនិត្យដោយ AI",
      description:
        "MVP ថ្នាក់រៀនឆ្លាតវៃ ដែលមានការគ្រប់គ្រងសិស្ស ការតាមដានវត្តមាន របាយការណ៍ ប្រព័ន្ធត្រួតពិនិត្យដោយ AI ការស្គាល់មុខ និងផ្ទាំងគ្រប់គ្រងលើគេហទំព័រ។",
      type: "គម្រោងក្រុមនៅសាកលវិទ្យាល័យ",
      overview:
        "គម្រោងនេះមានគោលបំណងបង្កើតផលិតផលគំរូ (MVP) ដែលអាចប្រើប្រាស់បានពិតប្រាកដ សម្រាប់បរិយាកាសថ្នាក់រៀនទំនើប។ វារួមបញ្ចូលការត្រួតពិនិត្យការចូលរួមរបស់សិស្សដោយ AI ការស្គាល់មុខដើម្បីកត់វត្តមានដោយស្វ័យប្រវត្តិ និងផ្ទាំងគ្រប់គ្រងកណ្តាលសម្រាប់គ្រូ ដើម្បីគ្រប់គ្រងរបាយការណ៍។",
      features: [
        "ផ្ទាំងគ្រប់គ្រងសិស្ស និងតាមដានវត្តមាន",
        "ការស្គាល់មុខដោយ AI ដើម្បីកត់វត្តមានដោយស្វ័យប្រវត្តិ",
        "របាយការណ៍ និងការវិភាគស្វ័យប្រវត្តិសម្រាប់គ្រូ",
        "ផ្ទាំងត្រួតពិនិត្យថ្នាក់រៀនតាមពេលវេលាជាក់ស្តែង",
      ],
    },
  },
  {
    id: "phsar-khmer",
    title: "PhsarKhmer E-Commerce Web App",
    description:
      "A responsive Cambodian e-commerce interface featuring product browsing, categories, promotions, search, cart functionality, and authentication UI prototypes.",
    year: "2025",
    type: "Web Design Course Project",
    image: "/assets/images/projects/phsar-khmer.webp",
    tags: ["HTML5", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/TunSopheak/PhsarKhmer-WebApp",
    liveDemo: "https://phsar-khmer-web.vercel.app/",
    overview:
      "A fully responsive e-commerce web interface designed specifically for the Cambodian market. Users can browse products by category, utilize the search feature, and interact with a functional cart and authentication prototype.",
    features: [
      "Product browsing with dynamic categories and promotions",
      "Live search functionality",
      "Shopping cart management UI",
      "Login and authentication UI prototypes",
    ],
    km: {
      title: "PhsarKhmer - គេហទំព័រលក់ទំនិញអនឡាញ",
      description:
        "ចំណុចប្រទាក់លក់ទំនិញអនឡាញរបស់កម្ពុជា ដែលមើលបានស្រួលលើគ្រប់ឧបករណ៍ មានការរកមើលផលិតផល ប្រភេទទំនិញ ការផ្សព្វផ្សាយ ការស្វែងរក កន្ត្រកទំនិញ និងគំរូចំណុចប្រទាក់ចូលគណនី។",
      type: "គម្រោងនៃមុខវិជ្ជារចនាគេហទំព័រ",
      overview:
        "ចំណុចប្រទាក់លក់ទំនិញអនឡាញ ដែលមើលបានស្រួលលើគ្រប់ឧបករណ៍ ហើយរចនាឡើងជាពិសេសសម្រាប់ទីផ្សារកម្ពុជា។ អ្នកប្រើអាចរកមើលផលិតផលតាមប្រភេទ ប្រើមុខងារស្វែងរក និងប្រើកន្ត្រកទំនិញ ព្រមទាំងសាកល្បងគំរូចំណុចប្រទាក់ចូលគណនី។",
      features: [
        "ការរកមើលផលិតផលតាមប្រភេទថាមវន្ត និងការផ្សព្វផ្សាយ",
        "មុខងារស្វែងរកភ្លាមៗ",
        "ចំណុចប្រទាក់គ្រប់គ្រងកន្ត្រកទំនិញ",
        "គំរូចំណុចប្រទាក់ចូលគណនី និងផ្ទៀងផ្ទាត់អត្តសញ្ញាណ",
      ],
    },
  },
  {
    id: "kick",
    title: "Kick Footwear Store",
    description:
      "A responsive multi-page football footwear storefront with product collections, brands, product details, cart, sign-in, and contact pages.",
    year: "2025",
    type: "Web Design Mini Project",
    image: "/assets/images/projects/kick-footwear.webp",
    tags: ["HTML5", "Tailwind CSS", "Font Awesome"],
    github: "https://github.com/TunSopheak/Kick",
    liveDemo: "https://kick-footwear-store.vercel.app/",
    overview:
      "A stylish, multi-page footwear storefront focused on football boots. It features brand-specific product collections, detailed product pages, and a full customer flow including sign-in, cart, and contact pages.",
    features: [
      "Multi-page storefront layout",
      "Brand-specific product collections",
      "Detailed product pages with sizing info",
      "Sign-in, shopping cart and contact forms",
    ],
    km: {
      title: "Kick - ហាងលក់ស្បែកជើងបាល់ទាត់",
      description:
        "ហាងលក់ស្បែកជើងបាល់ទាត់ច្រើនទំព័រ ដែលមើលបានស្រួលលើគ្រប់ឧបករណ៍ មានបណ្តុំផលិតផល ម៉ាកយីហោ ព័ត៌មានលម្អិតផលិតផល កន្ត្រកទំនិញ ការចូលគណនី និងទំព័រទំនាក់ទំនង។",
      type: "គម្រោងតូចនៃមុខវិជ្ជារចនាគេហទំព័រ",
      overview:
        "ហាងលក់ស្បែកជើងច្រើនទំព័រដ៏ទាន់សម័យ ដែលផ្តោតលើស្បែកជើងបាល់ទាត់។ មានបណ្តុំផលិតផលតាមម៉ាកយីហោ ទំព័រលម្អិតផលិតផល និងដំណើរការអតិថិជនពេញលេញ រួមមានការចូលគណនី កន្ត្រកទំនិញ និងទំព័រទំនាក់ទំនង។",
      features: [
        "ប្លង់ហាងច្រើនទំព័រ",
        "បណ្តុំផលិតផលតាមម៉ាកយីហោ",
        "ទំព័រផលិតផលលម្អិត ដែលមានព័ត៌មានទំហំ",
        "ទម្រង់ចូលគណនី កន្ត្រកទំនិញ និងទម្រង់ទំនាក់ទំនង",
      ],
    },
  },
];
