import type { SiteConfig } from "@/types/site";

const email = "rakibul.env@gmail.com";

export const siteConfig: SiteConfig = {
  name: "Rakibul Islam",
  owner: "MD. Rakibul Islam",
  shortName: "Rakibul",
  role: "Full-stack developer",
  description:
    "Full-stack developer from Mymensingh, Bangladesh, building fast, accessible web applications with React, Next.js, Node.js, and MongoDB.",
  location: "Mymensingh, Bangladesh",
  email,
  availability: "Available for selected projects",
  ctas: {
    primary: {
      label: "View selected work",
      href: "#projects",
    },
    secondary: {
      label: "Start a conversation",
      href: "#contact",
    },
    contact: {
      label: "Send an email",
      href: `mailto:${email}`,
    },
  },
};
