import type { SocialLink } from "@/types/content";
import { siteConfig } from "@/config/site";

export const githubProfile: SocialLink = {
  label: "GitHub",
  href: "https://github.com/dev-rakibulislam",
};

export const socialLinks = [
  githubProfile,
  { label: "X", href: "https://x.com/islam_raki99557" },
  { label: "Medium", href: "https://medium.com/@rakibhossain4230" },
  { label: "Facebook", href: "https://facebook.com/rakibuIlsIam2025" },
  { label: "Email", href: `mailto:${siteConfig.email}` },
] as const satisfies readonly SocialLink[];
