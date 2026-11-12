export type ExperienceType = "Internship" | "Organization" | "Bootcamp";

export type Experience = {
    type: ExperienceType;
    role: string;
    company: string;
    companyUrl?: string;
    location: string;
    period: string;
    points: string[];
    tags: string[];
};
