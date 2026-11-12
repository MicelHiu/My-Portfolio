import type { Experience } from "./experience";

const professionals: Experience[] = [
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

export function getProfessionals() {
    return professionals;
}
