export type SkillGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export type Service = {
  title: string;
  description: string;
  deliverables: readonly string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};
