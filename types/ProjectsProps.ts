import { TechStacksProps } from "./TechStacksProps";

export interface ProjectsProps {
  name: string;
  shortIntro: string;
  detailIntro: string;
  coverImg: string;
  previewLink?: string;
  sourceLink?: string;
  slug: string;
  techStacks?: TechStacksProps[];
}
