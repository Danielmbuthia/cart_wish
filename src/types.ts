import { ReactNode } from "react";

export interface LinksWithIconsProps {
  title: string;
  emoji: string;
  link: string;
  sidebar?: boolean;
}

export interface HeroSectionProps {
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

export interface TableHeadingProps {
  headings: string[];
  children: ReactNode;
}
