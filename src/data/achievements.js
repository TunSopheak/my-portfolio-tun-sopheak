// src/data/achievements.js

import { FILE_IDS, getDrivePdfUrl } from '../config/assets';

export const achievements = [
  {
    id: "childs-dream-scholarship",
    title: "Full Scholarship – Child's Dream Cambodia",
    description:
      "Awarded a full 4-year scholarship to pursue a Bachelor of Science in Computer Science at the Royal University of Phnom Penh (RUPP), funded by Child's Dream Cambodia Organisation.",
    year: "2023-2027",
    type: "Scholarship",
    image: "/assets/images/achievements/scholarship.jpg",
    // No certificate yet → shows "Certificate Pending"
    tags: ["Scholarship", "Education", "RUPP"],
  },
  {
    id: "video-competition-2024",
    title: "Video Competition Award",
    description:
      "Recognized for outstanding participation in a video competition, demonstrating creativity, technical skills, and storytelling ability.",
    year: "2024",
    type: "Competition",
    image: "/assets/images/achievements/video-competition.png",
    certificate: "/assets/images/achievements/Video Competition.jpg",
    tags: ["Video", "Creativity", "Competition"],
  },
  {
    id: "student-council-president-2023",
    title: "President of Student Council – '3 Good' Movement",
    description:
      "Served as President of the Student Council at Svay Leu High School, successfully implementing the '3 Good' Movement (Good Child, Good Student, Good Friend) annual competition for children.",
    year: "2022-2023",
    type: "Leadership & Recognition",
    image: "/assets/images/achievements/student_council.jpg",
    certificate: getDrivePdfUrl(FILE_IDS.pdfs.studentCouncilCert),
    tags: ["Leadership", "Student Council", "Community"],
  },
];