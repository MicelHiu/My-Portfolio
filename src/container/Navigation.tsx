"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navigation() {
    const navLinks = [
        { label: "Home", href: "#home"},
        { label: "About", href: "#about"},
        { label: "Projects", href: "#projects"},
        { label: "Skills", href: "#skills"},
        { label: "Contact", href: "#contact"}
    ];

    const [active, setActive] = useState<string>("Home");

    // Scroll-spy: otomatis update "active" sesuai section yang lagi keliatan
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const match = navLinks.find(
                            (link) => link.href.slice(1) === entry.target.id
                        );
                        if (match) setActive(match.label);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
        );

        navLinks.forEach((link) => {
            const el = document.getElementById(link.href.slice(1));
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-secondary/30 bg-background">
                <nav className="flex items-center justify-between w-full px-6 md:px-10 py-4">
                    <span className="text-lg font-bold text-foreground">
                    Micel<span className="text-primary">.</span>
                    </span>

                    <div className="flex items-center gap-1">
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

                    <Link
                        href="#resume"
                        className="rounded-full px-4 py-2 text-sm font-semibold bg-secondary text-surface
                        hover:bg-surface hover:text-foreground"
                    >
                        Resume
                    </Link>
                </nav>
            </header>
        </>
    )
}