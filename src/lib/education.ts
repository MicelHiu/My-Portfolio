export type Education = {
    name: string;
    institute: string;
    score: string;
    description: string;
    tags: string[];
};

// TODO: ganti dengan data pendidikan asli
const education: Education[] = [
    {
        name: "Bachelor's Degree in Computer Science",
        institute: "Universitas Kalbis",
        score: "Cumulative GPA: 4.00/4.00",
        description: "Studied programming algorithms, data structures, Object-Oriented Programming (OOP), and basic database management using MySQL, as foundations for software development. Applied these concepts by developing a full-stack website using PHP, a desktop application using JavaFX, and games using Game Maker Studio to strengthen programming logic, creativity, and problem-solving skills.",
        tags: [
            "Java",
            "Python",
            "Kotlin",
            "C++",
            "MySQL",
            "JavaFX",
            "HTML/CSS",
            "JavaScript",
            "PHP"
        ]
    },
    {
        name: "Full-Stack Software Engineering Bootcamp",
        institute: "RevoU",
        score: "N/A",
        description: "Completed an intensive Full Stack Software Engineering bootcamp focused on frontend, backend, API integration, database, and modern web development.",
        tags: [
            "JavaScript", "TypeScript", "Next.js", "Nest.js", "Prisma", "PostgreSQL", "Git", "Vercel"
        ]
    }
];

export function getEducation() {
    return education;
}
