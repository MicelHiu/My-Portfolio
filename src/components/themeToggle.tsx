"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const toggle = () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch {}
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary/30 text-secondary transition-colors hover:text-foreground hover:cursor-pointer dark:border-secondary/30 dark:hover:text-foreground"
        >
            <Moon className="h-4 w-4 dark:hidden" />
            <Sun className="hidden h-4 w-4 dark:block" />
        </button>
    );
}
