"use client";

import Image from "next/image";
import { useState } from "react";
import { Github } from "lucide-react";

type Project = {
    title: string;
    description: string;
    images: string[];
    tags: string[];
    githubUrl: string;
};

const projects = [
    {
        title: "CORE - Booking Management Systems",
        description: "Internet cafe's booking platform that lets customers browse available PC and PS rooms, add a time slot to their cart, apply a promo, and confirm a booking — then track that booking's status or cancel it from their history. Admins get a separate dashboard to manage rooms, promotions, and visitor check-ins.",
        images: [
            "/public/images/core/dashboard.png",
            "/public/images/core/user-roomdetail.png"
        ],
        tags: [
            "Next.js", "Tailwind CSS", "Typescript", "Nest.js", "Prisma", "PostgreSQL"
        ],
        githubUrl: "https://github.com/MicelHiu/core.git",
    }
];

function ProjectCard({ project }: {project: Project}) {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener norefferer"
            className="group flex flex-col bg-surface border border-primary rounded-xl overflow-hidden hover:border-secondary transition-colors"
        >
            <div className="relative w-full h-[200px]">
                <Image src={project.images[activeImage]}
                    alt={project.title}
                    fill
                    className="object-cover"
                />

                {project.images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-label={`Show image ${index + 1}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setActiveImage(index);
                                }}
                                className={`h-1.5 rounded-full transition-all ${
                                    activeImage === index
                                        ? "w-4 bg-white"
                                        : "w-1.5 bg-white/50"
                                }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-secondary line-clamp-3 mb-4">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs rounded-full bg-background text-foreground px-3 py-1"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center gap-2 text-sm text-secondary group-hover:text-foreground transition-colors">
                    <Github className="w-4 h-4" />
                    View on GitHub
                </div>
            </div>
        </a>
    );
}

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative bg-background py-24 px-6 overflow-hidden">
            {/* header */}
            <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Projects
                </h2>
                <p className="text-secondary mt-3">
                    A selection of things I&apos;ve designed, built, and shipped.
                </p>
            </div>

            {/* grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}