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
        overview: "CORE (Central Online Recreation Environment) is a web-based internet café management and booking platform designed to simplify room reservations and improve access to gaming facilities. Developed using Next.js, NestJS, and PostgreSQL with Prisma ORM, the application provides an integrated booking system with room management, user authentication, and administrative functionalities. By centralizing these processes, CORE offers a more structured and convenient way for customers to book gaming facilities and for administrators to manage daily operations.",
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
        overview: "FinTrack API is a personal finance management backend designed to help users organize their financial activities, including accounts, transactions, and categories. Built with NestJS, Prisma ORM, and PostgreSQL, the application implements a modular Controller-Service-Repository architecture, JWT authentication, and role-based access control to maintain structured business logic and secure resource access. The result is a RESTful API that provides centralized financial data management while ensuring users can only access their own resources.",
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
        liveUrl: "https://documenter.getpostman.com/view/56609845/2sBY4VLJ7Z"
    },

    "Revoshop": {
        subtitle: "Bootcamp - 2026",
        overview: "Revoshop is an e-commerce web platform simulation designed to provide a convenient shopping experience while supporting a multi-vendor marketplace concept. Developed using Next.js, TypeScript, and Tailwind CSS, the application integrates DummyJSON and MockAPI to handle product and user data, alongside features such as product categorization, shopping cart management, authentication, and a dedicated seller portal. The result is an interactive e-commerce platform that demonstrates essential marketplace functionalities and role-based user experiences for customers and sellers.",
        features: [
            {
                title: "Product Discovery & Catalog",
                description: "Browse products across multiple categories with an organized catalog and category-based filtering"
            },
            {
                title: "Shopping Cart Management",
                description: "Add, review, and manage selected products in a shopping cart before checkout"
            },
            {
                title: "Merchant & Store Management",
                description: "Enable sellers to set up their online stores and manage product listings through a dedicated portal."
            },
            {
                title: "Authentication & Role-Based Access",
                description: "Provides user authentication and differentiated access for guests, customers, and merchants."
            }
        ],
        role: [
            "Frontend Development: Designed and implemented responsive user interfaces using Next.js, TypeScript, JavaScript, and Tailwind CSS.",
            "API Integration: Integrated frontend features with external APIs (DummyJSON and MockAPI) to retrieve and manage product and user data.",
            "Feature Implementation: Developed core e-commerce functionalities, including product catalog, category filtering, shopping cart, user authentication, and seller portal.",
            "Role-Based Access Control: Implemented role-based navigation and feature accessibility for guest, customer, and seller roles.",
            "Project Management: Managed the end-to-end development process, from project setup and feature implementation to testing, debugging, and deployment."
        ],
        liveUrl: "https://micelhiu-revoshop.netlify.app/"
    },
    "Portfolio Website v1.0": {
        subtitle: "Bootcamp - 2026",
        overview: "This personal portfolio website serves as a platform to showcase my background, technical skills, and software development projects. Built using HTML and Vanilla CSS, the website focuses on a clean, responsive, and user-friendly interface with dedicated sections for personal introduction, education, skills, project showcases, and contact information. The result is a centralized platform that presents my professional journey and development experience while making it easier for recruiters and visitors to explore my work and connect with me.",
        features: [
            {
                title: "Personalized Home Page",
                description: "Introduces personal branding through a brief introduction, featured projects, and a contact form for direct inquiries"
            },
            {
                title: "About Me & Skills",
                description: "Showcases personal background, motivation, educational journey, and technical skills."
            },
            {
                title: "Project Showcase",
                description: "Features a collection of personal and academic projects, highlighting development experience and technical expertise",
            },
            {
                title: "Contact & Social Links",
                description: "Provides contact forms, navigation links, and direct access to social platforms such as Email, LinkedIn, and Github."
            },
        ],
        role: [
            "Designed and implemented the website interface to create a clean, modern, and user-friendly portfolio experience",
            "Developed responsive web pages using HTML and vanilla CSS, also managed the deployment using Netlify."
        ],
        liveUrl: "https://micelhiu-portofolio.netlify.app/"
    },

    "Skin Tone Detector": {
        subtitle: "University - 2025",
        overview: "SkinTone Detector is a web-based machine learning application developed to analyze university student survey data and generate skin tone-related predictions. Using Python and Streamlit, the application integrates a Random Forest Classifier to process survey data, while Google Colab supports data preparation and analysis. Customized CSS was also implemented to improve the interface and user experience. The result is an interactive application that combines machine learning predictions and data visualization to present analytical findings through an accessible web interface.",
        features: [
            {
                title: "Skin Tone Description",
                description: "An information page explaining the characteristics of each skin tone category"
            },
            {
                title: "Detection via Photo Upload",
                description: "Upload a photo (jpg/png/jpeg); the system detects the face and shows a bounding box before analysis."
            },
            {
                title: "Detection via Camera",
                description: "Take a photo directly from your device camera for real-time analysis."
            },
            {
                title: "Skin Tone Classification",
                description: "Skin color analysis using face detection (Haar Cascade) and the median HSV value of the face area."
            },
            {
                title: "Product Recommendations",
                description: "Shows blush, foundation, and lipstick recommendations based on the classified skin tone"
            },
        ],
        role: [
            "UI/UX Design: Designed website layouts and user interfaces based on project requirements.",
            "Frontend Development: Developed and implemented responsive website interfaces.",
            "User Experience: Created simple and intuitive designs to improve user navigation.",
            "Team Leadership: Coordinated team activities and monitored project progress to meet deadlines."
        ],
        liveUrl: "https://skin-tone-app.streamlit.app/"
    },

    "Tenant Recommendation": {
        subtitle: "University - 2025",
        overview: "The Tenant Recommendation System is a web-based application designed to help students discover food and beverage tenants around Kalbis University based on their preferences. By applying a machine learning-based recommendation approach, the system processes user preferences to generate relevant tenant suggestions and present them through an interactive interface. The result is a recommendation platform that simplifies tenant discovery and helps students explore dining options that better match their interests.",
        features: [
            {
                title: "Top 3 Tenant Recommendations",
                description: "Shows the three best tenants along with a relevance percentage."
            },
            {
                title: "Preference-based Input",
                description: "The result is based on study program, spending budget of college students, and the most frequently ordered menu from each tenants."
            },
            {
                title: "Pre-trained Model",
                description: "The model and encoders are loaded from .pkl files, to increase predictions speed."
            },
            {
                title: "Unrecognized Input Handling",
                description: "Shows a clear error message when the input does not match the training data."
            }
        ],
        role: [
            "Frontend Development: Developed a user-friendly interface using Python and Stramlit with customized CSS.",
            "Data Analysis: Processed university student survey data using Google Colab and created visualizations, including charts and heatmaps.",
            "Team Leaderships: Led the team, monitored progress, and reviewed deliverables to ensure project requirements were met.",
            "Team Collaborations: Managed code collaboration and version control using GitHub."
        ],
        liveUrl: "https://kandep-search-engine.streamlit.app/"
    }
}

export function getProjectDetail(title:string): ProjectDetail | undefined {
    return details[title];
}
