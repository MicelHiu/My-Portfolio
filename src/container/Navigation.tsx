"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
    const navLinks = [
        { label: "Home", href: "#home"},
        { label: "About", href: "#about"},
        { label: "Skills", href: "#skills"},
        { label: "Projects", href: "#projects"},
        { label: "Contact", href: "#contact"}
    ];

    const [active, setActive] = useState<String>("Home");
    return (
        <>
            <header className="sticky top-4 z-50 mx-auto w-fit">
                <nav className="flex items-center gap-1 rounded-full border border-secondary bg-background px-3 py-2 backdrop-blur-md">
                    <span className="mr-4 pl-2 text-lg font-bold text-white">
                    Micel<span className="text-muted">.</span>
                    </span>
                    {navLinks.map((link) => {
                    const isActive = active === link.label;
                    return (
                        <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setActive(link.label)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                            isActive
                            ? "border border-primary bg-primary text-foreground"
                            : "text-secondary hover:text-foreground"
                        }`}
                        >
                        {link.label}
                        </Link>
                    );
                    })}
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