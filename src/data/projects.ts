import type { Project } from "@/types/project";

export const projects: readonly Project[] = [
  {
    slug: "dreamvally",
    title: "Dreamvally",
    category: "Multi-service marketplace",
    description:
      "A mobile-first marketplace that brings six service categories into one clear, browsable experience.",
    stack: ["React", "Tailwind CSS", "Node.js"],
    status: "Client demo",
  },
  {
    slug: "kids-safe-video",
    title: "Kids Safe Video",
    category: "Parental controls",
    description:
      "A video platform that gives parents a simple, considered way to choose what their children can watch.",
    stack: ["React", "Express", "MongoDB"],
    status: "Web app",
  },
  {
    slug: "whatsapp-campaign-manager",
    title: "WhatsApp Campaign Manager",
    category: "Campaign tooling",
    description:
      "A dashboard for building contact lists and running bulk message campaigns from one place.",
    stack: ["Next.js", "Node.js", "Firebase"],
    status: "In progress",
  },
];
