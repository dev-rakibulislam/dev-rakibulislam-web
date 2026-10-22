import type { Service } from "@/types/content";

export const services: readonly Service[] = [
  {
    title: "Frontend development",
    description:
      "Responsive interfaces built with React and Next.js, from a focused landing page to a complete product surface.",
    deliverables: [
      "Component architecture",
      "Responsive layouts",
      "Accessibility pass",
    ],
  },
  {
    title: "Full-stack applications",
    description:
      "End-to-end features that connect a considered interface to a practical Node.js backend.",
    deliverables: [
      "Application structure",
      "REST integration",
      "Authentication flows",
    ],
  },
  {
    title: "API development",
    description:
      "Clear REST APIs and data models that keep the frontend and backend moving in the same direction.",
    deliverables: [
      "Endpoint design",
      "Request validation",
      "Database models",
    ],
  },
  {
    title: "Design implementation",
    description:
      "Figma files turned into consistent, reusable components with careful spacing and interaction states.",
    deliverables: [
      "Reusable components",
      "Pixel-aware layouts",
      "Clean handoff",
    ],
  },
];
