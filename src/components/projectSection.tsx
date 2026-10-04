"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getProjects, type Project } from "@/lib/project";


function ProjectCard({ project }: {project: Project}) {
    const [activeImage, setActiveImage] = useState(0);
    const trackref = useRef<HTMLDivElement>(null);

    const slider = (index: number) => {
        const track = trackref.current;
        if(!track) return;
        track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
    };

    //dipanggil dari button, cegah <a></a> ikut ke klik
    const handleClick = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        e.stopPropagation();
        slider(index);
    };

    // sinkronkan dot dengan posisi scroll (saat swipe/drag)
    const handleScroll = () => {
        const track = trackref.current;
        if(!track) return;
        setActiveImage(Math.round(track.scrollLeft / track.clientWidth));
    };

    const last = project.images.length - 1;
    
    return (
        <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-surface border border-primary rounded-xl overflow-hidden hover:border-secondary transition-colors"
        >
            <div className="relative w-full h-[200px]">
                {/* track slider */}
                <div
                    ref={trackref}
                    onScroll={handleScroll}
                    className="flex h-full overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {project.images.map((src, index) => (
                        <div key={src} className="relative h-full w-full shrink-0 snap-center">
                            <Image
                                src={src}
                                alt={`${project.title} ${index + 1}`}
                                fill
                                sizes="(min-width: 768px) 33vw, 100vw"
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {project.images.length > 1 && (
                    <>
                        {/* panah prev/next */}
                        <button
                            type="button"
                            aria-label="Previous image"
                            onClick={(e) => handleClick(e, Math.max(activeImage - 1, 0))}
                            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            aria-label="Next image"
                            onClick={(e) => handleClick(e, Math.min(activeImage + 1, last))}
                            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>

                        {/* dots */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                            {project.images.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    aria-label={`Show image ${index + 1}`}
                                    onClick={(e) => handleClick(e, index)}
                                    className={`h-1.5 rounded-full transition-all ${
                                        activeImage === index
                                            ? "w-4 bg-white"
                                            : "w-1.5 bg-white/50"
                                    }`}
                                />
                            ))}
                        </div>
                    </>
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
                    <FaGithub className="w-4 h-4" />
                    View on GitHub
                </div>
            </div>
        </a>
    );
}

export default function ProjectsSection() {
    const projects = getProjects();

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