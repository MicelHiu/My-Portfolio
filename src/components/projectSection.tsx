"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
            className="group flex flex-col w-full bg-surface border border-primary rounded-xl overflow-hidden hover:border-secondary transition-colors"
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

// kecepatan easing: lebih besar = lebih cepat sampai (tanpa bounce)
const EASE = 0.16;
const GAP = 32;

export default function ProjectsSection() {
    const projects = getProjects();
    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);
    // state animasi disimpan di ref, dimutasi hanya di handler/effect
    const s = useRef({
        x: 0, target: 0, index: 0, raf: 0,
        dragging: false, moved: false, startX: 0, startPos: 0, lastX: 0, lastT: 0, vel: 0,
        wheelLock: 0,
    });

    const metrics = () => {
        const viewport = viewportRef.current!;
        const track = trackRef.current!;
        const card = track.firstElementChild as HTMLElement;
        const step = card.offsetWidth + GAP;
        const max = Math.max(track.scrollWidth - viewport.clientWidth, 0);
        return { step, max };
    };

    const updateEdges = () => {
        const { max } = metrics();
        setAtStart(s.current.target <= 0.5);
        setAtEnd(s.current.target >= max - 0.5);
    };

    const apply = () => {
        const track = trackRef.current;
        if (track) track.style.transform = `translate3d(${-s.current.x}px,0,0)`;
    };

    const tick = () => {
        const st = s.current;
        if (st.dragging) { st.raf = 0; return; }
        st.x += (st.target - st.x) * EASE;
        apply();
        if (Math.abs(st.target - st.x) > 0.1) {
            st.raf = requestAnimationFrame(tick);
        } else {
            st.x = st.target;
            apply();
            st.raf = 0;
        }
    };

    const run = () => {
        if (!s.current.raf) s.current.raf = requestAnimationFrame(tick);
    };

    const goTo = (index: number) => {
        const { step, max } = metrics();
        const last = Math.ceil(max / step);
        const st = s.current;
        st.index = Math.min(Math.max(index, 0), last);
        st.target = Math.min(st.index * step, max);
        updateEdges();
        run();
    };

    useEffect(() => {
        const st = s.current;
        const onResize = () => {
            const { step, max } = metrics();
            st.target = Math.min(st.index * step, max);
            st.x = st.target;
            apply();
            updateEdges();
        };
        onResize();
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(st.raf);
        };
    }, []);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        const st = s.current;
        st.dragging = true;
        st.moved = false;
        st.startX = st.lastX = e.clientX;
        st.lastT = performance.now();
        st.startPos = st.x;
        st.vel = 0;
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const st = s.current;
        if (!st.dragging) return;
        const dx = e.clientX - st.startX;
        if (!st.moved && Math.abs(dx) > 5) {
            st.moved = true;
            e.currentTarget.setPointerCapture(e.pointerId);
        }
        if (!st.moved) return;
        const { max } = metrics();
        let pos = st.startPos - dx;
        // rubber band di ujung
        if (pos < 0) pos *= 0.35;
        else if (pos > max) pos = max + (pos - max) * 0.35;
        st.x = pos;
        apply();
        const now = performance.now();
        const dt = Math.max(now - st.lastT, 1);
        st.vel = (-(e.clientX - st.lastX) / dt) * 16; // px per frame
        st.lastX = e.clientX;
        st.lastT = now;
    };

    const endDrag = () => {
        const st = s.current;
        if (!st.dragging) return;
        st.dragging = false;
        if (!st.moved) return;
        const { step, max } = metrics();
        const projected = st.x + st.vel * 10;
        const last = Math.ceil(max / step);
        st.index = Math.min(Math.max(Math.round(projected / step), 0), last);
        st.target = Math.min(st.index * step, max);
        updateEdges();
        run();
    };

    // cegah klik link setelah drag
    const onClickCapture = (e: React.MouseEvent) => {
        if (s.current.moved) {
            e.preventDefault();
            e.stopPropagation();
            s.current.moved = false;
        }
    };

    // scroll menyamping trackpad
    const onWheel = (e: React.WheelEvent) => {
        const st = s.current;
        if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 20) return;
        const now = performance.now();
        if (now < st.wheelLock) return;
        st.wheelLock = now + 450;
        goTo(st.index + (e.deltaX > 0 ? 1 : -1));
    };

    return (
        <section id="projects" className="relative py-24 overflow-hidden">
            <div className="text-center mb-12 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projects</h2>
                <p className="text-secondary mt-3">
                    A selection of things I&apos;ve designed, built, and shipped.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                <div
                    ref={viewportRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={endDrag}
                    onPointerCancel={endDrag}
                    onClickCapture={onClickCapture}
                    onWheel={onWheel}
                    onDragStart={(e) => e.preventDefault()}
                    className="overflow-hidden pb-4 [container-type:inline-size] cursor-grab active:cursor-grabbing select-none touch-pan-y"
                >
                    <div ref={trackRef} className="flex w-max will-change-transform" style={{ gap: GAP }}>
                        {projects.map((project) => (
                            <div key={project.title} className="flex w-[100cqw] md:w-[calc((100cqw-4rem)/3)] shrink-0">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>

                {!atStart && <button
                    type="button"
                    aria-label="Previous project"
                    onClick={() => goTo(s.current.index - 1)}
                    className="hidden md:flex absolute md:-left-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform"
                >
                    <ChevronLeft className="h-5 w-5" />
                </button>}
                {!atEnd && <button
                    type="button"
                    aria-label="Next project"
                    onClick={() => goTo(s.current.index + 1)}
                    className="hidden md:flex absolute md:-right-1 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:scale-110 transition-transform"
                >
                    <ChevronRight className="h-5 w-5" />
                </button>}
            </div>
        </section>
    );
}
