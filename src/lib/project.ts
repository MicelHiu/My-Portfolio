export type Project = {
    title: string;
    description: string;
    images: string[];
    tags: string[];
    githubUrl: string;
}

const projects: Project[] = [
    {
        title: "CORE - Booking Management Systems",
        description: "Internet cafe's booking platform that lets customers browse available PC and PS rooms, add a time slot to their cart, apply a promo, and confirm a booking — then track that booking's status or cancel it from their history. Admins get a separate dashboard to manage rooms, promotions, and visitor check-ins.",
        images: [
            "/images/core/dashboard.png",
            "/images/core/user-roomdetail.png",
            "/images/core/user-booking.png",
            "/images/core/user-contact.png",
            "/images/core/admin.png",
        ],
        tags: [
            "Next.js", "Tailwind CSS", "Typescript", "Nest.js", "Prisma", "PostgreSQL"
        ],
        githubUrl: "https://github.com/MicelHiu/core.git",
    },
    {
        title: "Fintrack API",
        description: "A simulated financial tracking application for managing income, expenses, and balances across multiple accounts. Developed as a backend practice project using NestJS to strengthen API development and data management skills.",
        images: [
            "/images/fintrack/ERD.png",
        ],
        tags: [
            "Nest.js", "Prisma", "PostgreSQL"
        ],
        githubUrl: "https://github.com/MicelHiu/fintrack-api.git"
    },
    {
        title: "Revoshop",
        description: "A simulated e-commerce platform built with MockAPI to strengthen frontend and full-stack development skills through product management, API integration, and interactive shopping features.",
        images: [
            "/images/revoshop/Home.png",
            "/images/revoshop/products.png",
            "/images/revoshop/cart.png",
            "/images/revoshop/faq.png",
            "/images/revoshop/store.png",
            "/images/revoshop/profile.png",
            "/images/revoshop/login.png",
        ],
        tags: [
            "Next.js", "Tailwind CSS", "Typescript"
        ],
        githubUrl: "https://github.com/MicelHiu/revoshop.git"
    },
    {
        title: "Portfolio Website v1.0",
        description: "My first personal portfolio website, designed to showcase my projects, skills, and background. Built with HTML and CSS as a practice project to strengthen my fundamental web development skills.",
        images: [
            "/images/portfolio/home.png",
            "/images/portfolio/about.png",
            "/images/portfolio/projects.png"
        ],
        tags: [
            "HTML", "CSS"
        ],
        githubUrl: "https://github.com/MicelHiu/milestone-1-MicelHiu.git"
    },
    {
        title: "Skin Tone Detector",
        description: "A web-based skin tone detection application that analyzes users' skin color using Hue calculations to provide personalized makeup recommendations. Built with Python, OpenCV, and Streamlit to practice image processing and computer vision.",
        images: [
            "/images/skintone/description.png",
            "/images/skintone/detector.png",
            "/images/skintone/result.png",
            "/images/skintone/team.png",
        ],
        tags: [
            "Python", "OpenCV", "Streamlit"
        ],
        githubUrl: "https://github.com/awliapasa/Skin-Tone.git"
    },
    {
        title: "Kandep - Search Engine",
        description: "A tenant recommendation website for the canteen in front of Kalbis University, helping students discover tenants that match their preferences using a machine learning model. Developed as a final exam (UAS) project.",
        images: [
            "/images/kandep/home.png",
            "/images/kandep/result.png",
            "/images/kandep/team.png",
        ],
        tags: [
            "Python", "Scikit-Learn", "Streamlit"
        ],
        githubUrl: "https://github.com/MicelHiu/Kandep-Website-Streamlit.git"
    }
];

export function getProjects(): Project[] {
    return projects;
}
