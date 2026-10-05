import type { IconType } from "react-icons";
import { SiJavascript, SiTypescript, SiHtml5, SiCss, SiPython, SiCplusplus, SiNextdotjs, SiOpenjdk,  SiVuedotjs, SiNestjs, SiPrisma, SiLaravel, SiLaragon, SiFlutter, SiDotnet, SiPostgresql, SiMysql, SiGit, SiDocker, SiVercel, SiFigma, SiLinux, } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export type Skill = {
    name: string;
    icon: IconType;
    color: string
};

export type SkillCategory = {
    title: string;
    skills: Skill[];
};

const categories: SkillCategory[] = [
    { title: "Languages", skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss, color: "#1572B6" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ]},
    { title: "Frameworks & Libraries", skills: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
        { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
        { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Laragon", icon: SiLaragon, color: "#0E83CD" },
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
       /*  { name: ".NET", icon: SiDotnet, color: "#512BD4" }, */
    ]},
    { title: "Databases", skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ]},
    { title: "Tools & Platforms", skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ]},
];

export function getSkills() {
    return categories;
}