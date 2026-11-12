"use client";

import { Project } from "@/lib/project";
import { getProjectDetail } from "@/lib/projectDetail";
import { Check, Code, Globe, ScrollText, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import ImageSlider from "./imageSlider";

const TABS = [
    { id: "overview", label: "Overview", icon: Search },
    { id: "features", label: "Features", icon: Globe },
    { id: "role", label: "My Role", icon: ScrollText },
    { id: "stack", label: "Tech Stack", icon: Code },
] as const;

type TabId = (typeof TABS)[number]["id"];

// "UI Development: Translated ..." -> ["UI Development", "Translated ..."]
function splitRole(text: string): [string | null, string] {
    const idx = text.indexOf(": ");
    if (idx === -1) return [null, text];
    return [text.slice(0, idx), text.slice(idx + 2)];
}

export default function ProjectModal({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) {
    const [tab, setTab] = useState<TabId>("overview");
    const detail = getProjectDetail(project.title);

    // Esc untuk menutup + kunci scroll halaman di belakang modal
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [onClose]);

    const quickActions = (
        <aside className="h-fit rounded-2xl border border-primary/20 bg-background/50 p-5">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-foreground/60">
                Quick Actions
            </p>
            <div className="flex flex-col gap-3">
                {detail?.liveUrl && (
                    <a
                        href={detail.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                        Visit Live Site <Globe className="h-4 w-4" />
                    </a>
                )}
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-primary px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-white"
                >
                    GitHub Repo <FaGithub className="h-4 w-4" />
                </a>
            </div>
        </aside>
    );

    return (
        <div
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={project.title}
                onClick={(e) => e.stopPropagation()}
                className="flex h-[min(85vh,640px)] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-primary/30 bg-surface shadow-2xl"
            >
                {/* header */}
                <div className="relative shrink-0 px-4 pt-5 sm:px-8 sm:pt-8">
                    <h3 className="pr-12 text-2xl font-bold text-secondary sm:text-3xl">
                        {project.title}
                    </h3>
                    {detail?.subtitle && (
                        <span className="mt-3 inline-block rounded-full border border-primary/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-foreground/70">
                            {detail.subtitle}
                        </span>
                    )}
                    <button
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-colors hover:bg-primary hover:text-white sm:right-8 sm:top-8"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    {/* tabs */}
                    <div className="mt-5 grid grid-cols-4 border-b border-primary/20 sm:mt-6 sm:flex sm:gap-2 sm:overflow-x-auto scrollbar-none">
                        {TABS.map(({ id, label, icon: Icon }) => (
                            <button
                                key={id}
                                type="button"
                                onClick={() => setTab(id)}
                                className={`flex flex-col items-center justify-center gap-1 whitespace-nowrap border-b-2 px-1 pb-3 text-[11px] font-medium transition-colors sm:shrink-0 sm:flex-row sm:gap-2 sm:px-3 sm:text-sm ${
                                    tab === id
                                        ? "border-secondary text-secondary"
                                        : "border-transparent text-foreground/60 hover:text-foreground"
                                }`}
                            >
                                <Icon className="h-4 w-4" />
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* body (scroll di dalam) */}
                <div className="min-h-0 flex-1 overflow-y-auto p-6 sm:p-8">
                    {tab === "overview" && (
                        <div className="grid gap-8 md:grid-cols-[1fr_260px]">
                            <div>
                                <ImageSlider images={project.images} alt={project.title} />
                                <h4 className="mb-4 text-xl font-bold text-foreground">Project Overview</h4>
                                <p className="leading-relaxed text-foreground/70">
                                    {detail?.overview ?? project.description}
                                </p>
                            </div>
                            {quickActions}
                        </div>
                    )}

                    {tab === "features" && (
                        <>
                            <h4 className="mb-5 text-xl font-bold text-foreground">Key Features</h4>
                            {detail?.features.length ? (
                                <ul className="divide-y divide-primary/15 rounded-2xl border border-primary/20 bg-background/40">
                                    {detail.features.map((f) => (
                                        <li key={f.title} className="flex items-start gap-4 p-5">
                                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/15 text-secondary">
                                                <Check className="h-4 w-4" strokeWidth={2.5} />
                                            </span>
                                            <div>
                                                <p className="font-semibold text-foreground">{f.title}</p>
                                                <p className="mt-1 text-sm leading-relaxed text-foreground/70">
                                                    {f.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-foreground/60">Coming soon</p>
                            )}
                        </>
                    )}

                    {tab === "role" && (
                        <>
                            <h4 className="text-xl font-bold text-foreground">My Role &amp; Responsibilities</h4>
                            <div className="mb-6 mt-2 h-0.5 w-16 rounded bg-secondary" />
                            {detail?.role.length ? (
                                <ol className="space-y-5">
                                    {detail.role.map((r, n) => {
                                        const [head, rest] = splitRole(r);
                                        return (
                                            <li key={r} className="flex gap-4">
                                                <span className="pt-0.5 font-mono text-xs text-foreground/40">
                                                    {String(n + 1).padStart(2, "0")}
                                                </span>
                                                <p className="leading-relaxed text-foreground/70">
                                                    {head && (
                                                        <span className="font-semibold text-foreground">{head}: </span>
                                                    )}
                                                    {rest}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ol>
                            ) : (
                                <p className="text-foreground/60">Coming soon</p>
                            )}
                        </>
                    )}

                    {tab === "stack" && (
                        <>
                            <h4 className="mb-5 text-xl font-bold text-foreground">Tech Stack</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-background px-4 py-1.5 text-sm text-foreground"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}