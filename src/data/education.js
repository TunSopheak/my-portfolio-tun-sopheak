// src/data/education.js
// Newest first. `icon` is a file in /public/assets/icons/education/.

export const education = [
  {
    id: "rupp",
    icon: "cap",
    gradient: "from-cyan-400 to-blue-600",
    years: "2023 – 2027",
    active: true,
    title: "B.S. Computer Science",
    school: "Royal University of Phnom Penh (RUPP)",
    location: "Phnom Penh, Cambodia",
    tags: ["GPA: 3.70 / 4.00", "Backend Engineering Track"],
    description:
      "Studied software development with a strong focus on backend systems, databases, APIs, and system architecture.",
    km: {
      title: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រ ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ",
      school: "សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)",
      location: "ភ្នំពេញ កម្ពុជា",
      tags: ["ពិន្ទុមធ្យម (GPA): ៣.៧០ / ៤.០០", "ជំនាញ Backend Engineering"],
      description:
        "សិក្សាអភិវឌ្ឍកម្មវិធី ដោយផ្តោតយ៉ាងខ្លាំងលើប្រព័ន្ធ backend មូលដ្ឋានទិន្នន័យ API និងស្ថាបត្យកម្មប្រព័ន្ធ។",
    },
  },
  {
    id: "svay-leu-high",
    icon: "school",
    gradient: "from-purple-400 to-pink-500",
    years: "2017 – 2023",
    title: "Secondary Education",
    school: "Svay Leu High School",
    location: "Siem Reap, Cambodia",
    tags: ["Secondary Diploma"],
    km: {
      title: "មធ្យមសិក្សា",
      school: "វិទ្យាល័យស្វាយលើ",
      location: "សៀមរាប កម្ពុជា",
      tags: ["សញ្ញាបត្រមធ្យមសិក្សា"],
    },
  },
  {
    id: "svay-leu-primary",
    icon: "book",
    gradient: "from-orange-400 to-pink-500",
    years: "2011 – 2017",
    title: "Primary Education",
    school: "Hun Sen Svay Leu Primary School",
    location: "Siem Reap, Cambodia",
    tags: ["Primary Education"],
    km: {
      title: "បឋមសិក្សា",
      school: "សាលាបឋមសិក្សាហ៊ុន សែន ស្វាយលើ",
      location: "សៀមរាប កម្ពុជា",
      tags: ["បឋមសិក្សា"],
    },
  },
];
