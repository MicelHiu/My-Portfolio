"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { RESUME_FILENAME, RESUME_URL } from "@/lib/resume";
import ThemeToggle from "@/components/themeToggle";

export default function Navigation() {
    const navLinks = [
        { label: "Home", href: "#home"},
        { label: "About", href: "#about"},
        { label: "Projects", href: "#projects"},
        { label: "Skills", href: "#skills"},
        { label: "Experience", href: "#experience"},
        { label: "Contact", href: "#contact"}
    ];

    const [active, setActive] = useState<string>("Home");

    // Scroll-spy: section aktif = section terakhir yang bagian atasnya sudah melewati 40% tinggi layar
    useEffect(() => {
        const ids = navLinks.map((link) => link.href.slice(1));
        let raf = 0;

        const update = () => {
            raf = 0;
            const line = window.innerHeight * 0.4;
            const atBottom =
                window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
            let current = navLinks[0].label;
            ids.forEach((id, i) => {
                const el = document.getElementById(id);
                if (el && el.getBoundingClientRect().top <= line) current = navLinks[i].label;
            });
            if (atBottom) current = navLinks[navLinks.length - 1].label;
            setActive(current);
        };

        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    const activeIndex = Math.max(
        navLinks.findIndex((link) => link.label === active),
        0,
    );

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-secondary/30 bg-background">
                <nav className="flex items-center justify-between gap-2 w-full px-4 md:px-10 py-3 md:py-4">
                    <span className="text-lg font-bold text-foreground">
                    Micel<span className="text-primary">.</span>
                    </span>

                    {/* mobile: hanya nama section aktif, bergeser ke samping saat scroll */}
                    <div className="flex flex-col items-center gap-1 md:hidden">
                        <div className="w-32 overflow-hidden">
                            <div
                                className="flex w-max transition-transform duration-300 ease-out motion-reduce:transition-none"
                                style={{ transform: `translateX(${-activeIndex * (100 / navLinks.length)}%)` }}
                            >
                                {navLinks.map((link, i) => (
                                    <span
                                        key={link.label}
                                        aria-hidden={i !== activeIndex}
                                        className="flex w-32 shrink-0 justify-center"
                                    >
                                        <span className="rounded-full border border-primary bg-primary px-4 py-1.5 text-sm font-medium text-white">
                                            {link.label}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center">
                            {navLinks.map((link, i) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    aria-label={`Go to ${link.label}`}
                                    onClick={() => setActive(link.label)}
                                    className="p-1"
                                >
                                    <span
                                        className={`block h-1.5 rounded-full transition-all ${
                                            i === activeIndex ? "w-4 bg-primary" : "w-1.5 bg-secondary/40"
                                        }`}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => {
                        const isActive = active === link.label;
                        return (
                            <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setActive(link.label)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                isActive
                                ? "border border-primary bg-primary text-white"
                                : "text-secondary hover:text-foreground"
                            }`}
                            >
                            {link.label}
                            </Link>
                        );
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <a
                            href={RESUME_URL}
                            download={RESUME_FILENAME}
                            aria-label="Download resume"
                            className="flex items-center justify-center rounded-full bg-secondary p-2.5 text-sm font-semibold text-surface hover:bg-surface hover:text-foreground md:px-4 md:py-2"
                        >
                            <Download className="h-4 w-4 md:hidden" />
                            <span className="hidden md:inline">My Resume</span>
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}