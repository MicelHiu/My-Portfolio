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
                        className="rounded-full px-4 py-2 text-sm font-semibold bg-secondary text-surface hover:bg-surface hover:text-foreground"
                    >
                        Resume
                    </Link>
                </nav>
            </header>
        </>
    )
}