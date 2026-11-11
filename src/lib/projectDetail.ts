export type Features = {
    title: string;
    description: string;
}

export type ProjectDetail = {
    subtitle: string;
    overview: string;
    features: Features[];
    role: string[];
    liveUrl: string;
}

const details: Record<string, ProjectDetail> = {
    "CORE - Booking Management Systems": {
        subtitle: "Bootcamp Project - 2026",
        overview: "CORE is a gaming lounge (warnet) booking platform. It lets customers browse available PC and PS rooms, add a time slot to their cart, apply a promo, and confirm a booking — then track that booking's status or cancel it from their history. Admins get a separate dashboard to manage rooms, promotions, and visitor check-ins.",
        features: [
            {
                title: "Modern & Dynamic UI",
                description: "Responsive interface with automatic light and dark theme based on system preferences.",
            },
            {
                title: 'Interactive Room Showcase',
                description: 'Browse categorized rooms with detailed specifications, facilities, and pricing',
            },
            {
                title: 'Seamless Booking & Checkout',
                description: 'Add rooms to cart, apply promotional discounts, and confirm bookings through an integrated checkout process'
            },
            {
                title: 'Booking & History Tracking',
                description: 'Monitor booking statuses, view reservation details, and cancel confirmed bookings.'
            },
            {
                title: 'Secure Authentication & User Accounts',
                description: 'Support user registration, login, and personal profile management.'
            },
            {
                title: 'Comprehensive Admin Management',
                description: 'Manage rooms, visitors, check-ins, and promotions while monitoring business activity through analytics dashboards.'
            }
        ],
        role: [
            "Database Design: Designed and prepared the Entity Relationship Diagram (ERD) to define the database structure and relationship.",
            "Backend Development: Led backend development, implementing application logic and functionalities from user-facing features to admin requirements.",
            "Frontend Development: Designed and implemented UI slicing while applying the DRY (Don't Repeat Yourself) principle to build reusable and maintainable components.",
            "Project Documentation: Prepared and maintained project documentation for the GitHub repository to support project understanding and collaboration."
        ],
        liveUrl: "https://core-backup.vercel.app/",
    },

    "Fintrack API": {
        subtitle: "Bootcamp - 2026",
        overview: "A simulated financial tracking application for managing income, expenses, and balances across multiple accounts. Developed as a backend practice project using NestJS to strengthen API development and data management skills.",
        features: [
            {
                title: "Layered Structure",
                description: "Implements a structured Controller-Service-Repository pattern to separate HTTP handling, business logic, and database operations"
            },
            {
                title: "Modular Backend Structure",
                description: "Organizes applications functionality into dedicated NestJS modules for authentication, users, accounts, transactions, and categories"
            },
            {
                title: "JWT Authentication & Authorization",
                description: "Secures API endpoints with JWT-based authentication and role-based access control for admin and user permissions."
            },
            {
                title: "API Security & Rate Limiting",
                description: "Integrates request logging, throttling, and resource ownership validation to improve API security and prevent excessive requests.",
            }, 
            {
                title: "Relational Database Management",
                description: "Uses Prisma ORM and PostgreSQL to manage relational data across users, accounts, transactions, and categories."
            }
        ],
        role: [
            "Database Design: Designed the Entity Relationship Diagram (ERD) based on the provided requirements and data specifications.",
            "Backend Development: Developed backend logic and API functionalities from initial setup to implementation, covering both user and admin requirements.",
            "API Testing: Performed API testing using Postman to verify endpoint functionality, request validation, and response accuracy.",
            "API Documentation: Created API documentation to describe endpoints, request parameters, and response structures for easier integration and development.",
        ],
        liveUrl: 
    }
}