import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "C" },
      { name: "C++" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Shadcn UI" },
      { name: "Redux" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT & NextAuth" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "Prisma ORM" },
      { name: "SQL" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Socket.io" },
      { name: "WebRTC" },
    ],
  },
];
