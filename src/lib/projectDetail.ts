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
        liveUrl: "https://documenter.getpostman.com/view/56609845/2sBY4VLJ7Z"
    },

    "Revoshop": {
        subtitle: "Bootcamp - 2026",
        overview: "Revoshop is a modern e-commerce web platform simulation, designed as a one-stop destination for high-quality products across multiple categories. The website allows users to easily browse and shop for a wide variety of items, ranging from electronics and fashion to home living and sports gear. In addition to being a marketplace for buyers, Revoshop also features a merchant ecosystem that empowers sellers to list their products, reach more customers, and grow their businesses online.",
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
    "Portfolio v1.0": {
        subtitle: "Bootcamp - 2026",
        overview: "This website is a personal portfolio designed to showcase my projects, skills, and experience as an informatics/computer science student. The site provides information about my background, highlighted projects, and my contact, including contact form for user to get in touch with me.",
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
        overview: "Skin Tone Detector is a Streamlit-based web app that detects faces from a photo (upload or camera), then analyzes skin color to classify it into one of four categories — Fair, Light, Medium, or Dark — based on the HSV values of the detected face area. Based on the result, the app shows makeup product recommendations (blush, foundation, lipstick) that match the skin tone.",
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
        overview: "KANDEP is a tenant recommendation website for the canteen in front of Universitas Kalbis, helping students choose a tenant that matches their preferences. This project was built as a final exam (UAS) assignment.The system uses survey data collected from Universitas Kalbis students (Hasil survey.csv) to train a machine learning model that works as a recommendation/search engine. Users simply enter their study program, budget, and preferred type of food, and the system shows the tenants with the highest relevance.",
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