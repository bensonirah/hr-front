import { type } from "os";

export interface Skill {
  label: string;
  placeholder: string;
}
export type SkillProp = {
  skills: Skill[];
};
export const skills: Skill[] = [
  { label: "Diplaoma hananana", placeholder: "Here is your placeholder" },
  { label: "Fianarana nijanonana", placeholder: "Here is your placeholder" },
  { label: "Asa efa natao", placeholder: "Here is your placeholder" },
  { label: "Asa hay", placeholder: "Here is your placeholder" },
  {
    label: "Fianarana nataon'ny vady",
    placeholder: "Here is your placeholder",
  },
  { label: "Diplaoma ananan'ny vady", placeholder: "Here is your placeholder" },
  {
    label: "Fianarana nijanonan'ny vady",
    placeholder: "Here is your placeholder",
  },
  { label: "Asa hain'ny vady", placeholder: "Here is your placeholder" },
];
