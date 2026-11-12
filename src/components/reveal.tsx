"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fade in + naik sedikit saat masuk layar (sekali saja). Gaya ada di globals.css (.reveal).
export default function Reveal({
    children,
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    delay?: number; // ms
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            // threshold 0 + margin bawah: section yang tinggi tetap terpicu
            { rootMargin: "0px 0px -10% 0px" },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${visible ? "is-visible" : ""} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}
