import type { Experience } from "./experience";

const organizations: Experience[] = [
    {
        type: "Organization",
        role: "Treasurer",
        company: "Informatics Student Association (HIMIF)",
        companyUrl: "https://kalbis.ac.id/",
        location: "Jakarta, Indonesia",
        period: "July 2025 - June 2026",
        points: [
            "Managed income and expenditures for HIMIF events, supporting effective budget allocation and financial accountability.",
            "Recorded financial transactions from organizational activities, maintaining clear documentation of cash inflows and outflows.",
            "Prepared monthly cash reports to summarize financial activities and provide an organized overview of the association's finances.","Monitored event-related expenses against available funds, supporting responsible financial management and expenditure tracking."
        ],
        tags: ["Microsoft Excel", "Google Sheets", "Microsoft Word", "Leadership"],
    },
    {
        type: "Organization",
        role: "Treasurer",
        company: "Student Dance Club",
        companyUrl: "https://kalbis.ac.id/",
        location: "Jakarta, Indonesia",
        period: "July 2024 - June 2025",
        points: [
            "Managed income and expenditures for Dance events, supporting effective budget allocation and financial accountability.",
            "Recorded financial transactions from organizational activities, maintaining clear documentation of cash inflows and outflows.",
            "Prepared monthly cash reports to summarize financial activities and provide an organized overview of the association's finances.",
            "Monitored event-related expenses against available funds, supporting responsible financial management and expenditure tracking."
        ],
        tags: ["Microsoft Excel", "Google Sheets", "Microsoft Word", "Leadership"],
    },
];

export function getOrganizations() {
    return organizations;
}
