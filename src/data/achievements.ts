export interface Achievement {
  title: string;
  description: string;
  type: "hackathon" | "opensource" | "certification" | "competition";
}

export const achievements: Achievement[] = [
  {
    title: "Galgotia International Hackathon 2.0",
    description: "Finalist — competed among top teams in a national-level hackathon",
    type: "hackathon",
  },
  {
    title: "GirlScript Summer of Code 2025",
    description: "Selected as Open Source Contributor",
    type: "opensource",
  },
  {
    title: "Hacktoberfest 2025",
    description: "Achieved all badges, including Super Contributor Badge",
    type: "opensource",
  },
  {
    title: "Innotech 2025 — KIET Technical Fest",
    description:
      "1st Place (Department Level) → Institute-Level Finalist",
    type: "competition",
  },
  {
    title: "AWS Cloud Quest: Cloud Practitioner",
    description:
      "Hands-on experience with EC2, S3, IAM, networking, databases, and cloud security",
    type: "certification",
  },
];

export interface Education {
  institution: string;
  degree: string;
  score: string;
  period: string;
}

export const education: Education[] = [
  {
    institution: "KIET Group of Institutions",
    degree: "B.Tech in Computer Science",
    score: "72%",
    period: "2023 – 2027",
  },
  {
    institution: "BBS Public Inter College",
    degree: "Class 12 (PCM)",
    score: "81%",
    period: "2022",
  },
  {
    institution: "Prayag Public School",
    degree: "Class 10",
    score: "91%",
    period: "2020",
  },
];
