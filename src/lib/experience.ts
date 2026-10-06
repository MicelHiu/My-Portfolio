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

// TODO: ganti dengan pengalaman asli
const experiences: Experience[] = [
    {
        type: "Organization",
        role: "Treasurer",
        company: "Informatics Student Association (HIMIF)",
        companyUrl: "https://kalbis.ac.id/",
        location: "Jakarta, Indonesia",
        period: "July 2025 - June 2026",
        points: [
            "Managed income and expenditure on every HIMIF's event",
            "Prepared and maintained monthly cash records",
        ],
        tags: ["Microsoft Excel", "Google Sheets", "Microsoft Word", "Leadership"],
    },
    {
        type: "Bootcamp",
        role: "Fullstack Software Engineer Participant",
        company: "RevoU Indonesia",
        companyUrl: "https://www.revou.co/",
        location: "Jakarta, Indonesia",
        period: "January 2026 - September 2026",
        points: [
            "Completed an intensive Full Stack Software Engineering bootcamp focused on frontend, backend, API integration, database, and modern web development.",
            "Utilized git for version control and github for project management.",
        ],
        tags: ["JavaScript", "TypeScript", "Next.js", "Nest.js", "Prisma", "PostgreSQL", "Git", "Vercel"],
    },
    {
        type: "Internship",
        role: "Frontend Developer Intern",
        company: "PT Pandu Naradipta Danendra (DAXTRO)",
        companyUrl: "https://daxtro.id/?gad_source=1&gad_campaignid=24126936891&gbraid=0AAAABEY0P_rGRsQLpnueS3QF_aJQ__-sQ&gclid=CjwKCAjwlY3WBhANEiwApsNrLVfn54oWNdbX02KFVwkFmpCJouwVdbb1EByRFJ9VJ9Lne4EeJ3LGGhoC168QAvD_BwE",
        location: "Jakarta, Indonesia",
        period: "July 2026 - December 2026",
        points: [
            "Developed and maintained the frontend of an HRIS system across web and mobile applications, implementing new UI features and integrating APIs.",
            "Developed and maintained the frontend of a CRM system by implementing UI features and integrating APIs to support system functionalities.",
            "Collaborated closely with System Analysts, UI/UX Designers, and Backend Developers to translate requirements and designs into functional features.",
            "Used Git for version control, code collaboration, and managing development changes within the team.",
        ],
        tags: ["Vue.js", "PHP", "Laravel", "Laragon", "Flutter", "Git"],
    },
];

export function getExperiences() {
    return experiences;
}
