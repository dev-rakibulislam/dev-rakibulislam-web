import type { SkillGroup } from "@/types/content";

export const skillGroups: readonly SkillGroup[] = [
  {
    title: "Frontend",
    description: "Interfaces, interaction, and responsive layout.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "TanStack Query",
      "HTML5 & CSS3",
      "DaisyUI",
    ],
  },
  {
    title: "Backend",
    description: "APIs, server logic, and authentication.",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT authentication",
      "Firebase Cloud Functions",
    ],
  },
  {
    title: "Database",
    description: "Data modelling and persistence.",
    items: ["MongoDB", "Mongoose", "Firebase Firestore"],
  },
  {
    title: "Tools",
    description: "The everyday workflow around the code.",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Vercel",
      "Netlify",
      "Render",
      "VS Code",
    ],
  },
];
