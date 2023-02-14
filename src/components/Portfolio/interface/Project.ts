import Skill from "./Skill";

export default interface Project {
  images: string[],
  title: string
  description: string;
  skills: Skill[];
  github: string;
}