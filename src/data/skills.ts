import type { IconType } from "react-icons";
import { FaGitAlt, FaPython, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Skill {
  icon: IconType;
  label: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  accent: string;
  ring: string;
  labelColor: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "rgba(59,130,246,0.15)",
    ring: "rgba(59,130,246,0.25)",
    labelColor: "text-blue-400",
    skills: [
      { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
      { icon: SiTypescript, label: "TypeScript", color: "text-[#3178C6]" },
      { icon: SiTailwindcss, label: "Tailwind", color: "text-[#38BDF8]" },
    ],
  },
  {
    title: "Backend",
    accent: "rgba(139,92,246,0.15)",
    ring: "rgba(139,92,246,0.25)",
    labelColor: "text-violet-400",
    skills: [
      { icon: FaPython, label: "Python", color: "text-[#F7CC42]" },
      { icon: FaJava, label: "Java / JavaFX", color: "text-[#ED8B00]" },
    ],
  },
  {
    title: "AI & Data",
    accent: "rgba(6,182,212,0.15)",
    ring: "rgba(6,182,212,0.25)",
    labelColor: "text-cyan-400",
    skills: [],
  },
  {
    title: "Tools",
    accent: "rgba(255,255,255,0.05)",
    ring: "rgba(255,255,255,0.12)",
    labelColor: "text-gray-300",
    skills: [
      { icon: FaGitAlt, label: "Git", color: "text-[#F05032]" },
      { icon: SiIntellijidea, label: "IntelliJ IDEA", color: "text-[#000000]" },
      { icon: VscVscode, label: "VS Code", color: "text-[#007ACC]" },
    ],
  },
];
