export type ProjectStatus = "Client demo" | "Web app" | "In progress";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: readonly string[];
  status: ProjectStatus;
};
