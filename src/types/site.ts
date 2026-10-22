export type CtaLink = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  owner: string;
  shortName: string;
  role: string;
  description: string;
  location: string;
  email: string;
  availability: string;
  ctas: {
    primary: CtaLink;
    secondary: CtaLink;
    contact: CtaLink;
  };
};

export type NavItem = {
  label: string;
  href: string;
};
