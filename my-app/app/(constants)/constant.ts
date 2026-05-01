import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiGithub,
  SiTailwindcss,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";

import { FaCss3Alt, FaAws } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

import { IconType } from "react-icons";

export const navLink = [
  { id: 1, url: "#home", label: "Home" },
  { id: 2, url: "#about", label: "About" },
  { id: 3, url: "#skills", label: "Skills" },
  { id: 4, url: "#projects", label: "Projects" },
  { id: 5, url: "#contact", label: "Contact" },
];

type Skill = {
  name: string;
  icon: IconType;
  percentage: number;
};

export const Skillslist: Skill[] = [
  {
    name: "HTML",
    icon: SiHtml5,
    percentage: 90,
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    percentage: 85,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    percentage: 88,
  },
  {
    name: "React.js",
    icon: SiReact,
    percentage: 85,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    percentage: 80,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    percentage: 85,
  },
  {
    name: "Express.js",
    icon: SiExpress,
    percentage: 80,
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    percentage: 82,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    percentage: 50,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    percentage: 90,
  },
  {
    name: "GitHub",
    icon: SiGithub,
    percentage: 85,
  },
  {
    name: "Docker",
    icon: SiDocker,
    percentage: 60,
  },
  {
    name: "LLMs & RAG Applications",
    icon: GiArtificialIntelligence,
    percentage: 60,
  },
  {
    name: "AWS (EC2 Deployment)",
    icon: FaAws,
    percentage: 60,
  },
  {
    name: "GitHub Actions",
    icon: SiGithubactions,
    percentage: 55,
  },
];
