export type Variant = "blue" | "violet" | "cyan";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  variant: Variant;
  downloadable?: boolean;
}

export const projects: Project[] = [
  {
    title: "Wikibooks Browser",
    description:
      "JavaFX desktop application for browsing and managing media from Wikibooks. Features live page rendering, metadata extraction via SAX parsing, synonym search through the OpenThesaurus API, and a full media management system (Zettelkasten) with multiple persistence strategies including binary serialization and BibTeX import/export.",
    tags: ["Java", "JavaFX", "Maven"],
    github: "https://github.com/niklashoelzl/Wikibooks-Browser",
    live: "#",
    variant: "blue",
    downloadable: true,
  },
  {
    title: "Project 2",
    description: "Description Placeholder",
    tags: ["Placeholder", "Placeholder", "Placeholder"],
    github: "#",
    live: "#",
    variant: "violet",
  },
  {
    title: "Project 3",
    description: "Description Placeholder",
    tags: ["Placeholder", "Placeholder", "Placeholder"],
    github: "#",
    live: "#",
    variant: "cyan",
  },
];