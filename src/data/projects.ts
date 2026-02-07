export interface Project {
  title: string;
  description: string;
  problem: string;
  techStack: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Jobotics",
    description:
      "A full-stack AI-powered recruitment platform that streamlines the entire hiring pipeline — from job postings to interview scheduling — with role-based access, automated email notifications, and real-time application tracking.",
    problem:
      "Traditional hiring workflows are fragmented, slow, and lack centralized tooling for HR teams and candidates. Jobotics consolidates the process into one platform.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "NextAuth.js",
      "Prisma ORM",
      "PostgreSQL",
    ],
    metrics: [
      "40% improvement in hiring workflow efficiency",
      "50% reduction in job posting & applicant tracking time",
      "30% improvement in coordination accuracy",
      "Enterprise-grade RBAC with Google, GitHub & Credentials auth",
    ],
    liveUrl: "https://jobotics.vercel.app",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A production-grade real-time messaging platform built on the MERN stack with WebSocket-based communication, supporting group chats, live presence, typing indicators, read receipts, and peer-to-peer video calling.",
    problem:
      "Building a scalable, low-latency communication platform that handles thousands of concurrent connections while maintaining security and real-time responsiveness.",
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "WebRTC",
      "JWT",
    ],
    metrics: [
      "1,000+ concurrent users supported",
      "< 100ms average message delivery latency",
      "90% reduction in unauthorized access risks",
      "720p video calling with < 200ms connection setup",
      "35% increase in user engagement",
    ],
    githubUrl: "https://github.com/the-ayushm/real-time-chat-app",
  },
];
