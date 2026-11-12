"use client";

import { useEffect, useState } from "react";

const roles = ["Full-Stack Developer", "Frontend Developer", "Backend Developer"];

function useTypewriter(words: string[], typeSpeed = 90, deleteSpeed = 50, pause = 1500) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index];
        let delay = deleting ? deleteSpeed : typeSpeed;

        if(!deleting && text === word) delay = pause;
        const timer = setTimeout(() => {
            if(!deleting && text === word) {
                setDeleting(true);
            } else if(deleting && text === "") {
                setDeleting(false);
                setIndex((i) => (i+1)%words.length);
            } else {
                setText(word.slice(0, text.length + (deleting ? -1 : 1)));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);
    return text;
}
export default function HomeSection() {
    const role = useTypewriter(roles);
    return (
        <>
            <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
                    <p className="mb-3 text-base text-secondary sm:mb-4 sm:text-lg">Hey, I&apos;m</p>

                    <h1 className="text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
                    Michelle Hiu
                    </h1>

                    <span className="mt-5 text-xl font-semibold text-white sm:mt-6 sm:text-2xl">
                        {role}
                        <span className="ml-0.5 inline-block w-0.5 animate-pulse bg-primary align-middle">&nbsp;</span>    
                    </span>

                    <p className="mt-6 max-w-xl text-base text-foreground sm:mt-8 sm:text-2xl">
                    I think beyond limitations while staying grounded in execution
                    that deliver <span className="italic text-secondary">real impact</span>
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row">
                    <a
                        href="#contact"
                        className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
                    >
                        Let&apos;s Connect
                        <span aria-hidden="true">→</span>
                    </a>
                    <span className="flex items-center gap-2 text-sm text-secondary sm:text-base">
                        michelle.hiu05@gmail.com
                        <button
                        type="button"
                        aria-label="Copy email"
                        className="rounded p-1 hover:bg-primary/10 transition-colors"
                        onClick={() => navigator.clipboard.writeText('michelle.hiu05@gmail.com')}
                        >
                        ⧉
                        </button>
                    </span>
                    </div>
                </div>

                <div className="relative z-10 flex justify-center pb-10 text-secondary/60">
                    <span className="animate-bounce">↓</span>
                </div>

                <div
                    className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-105 w-225 -translate-x-1/2 rounded-full opacity-60 blur-3xl"
                    style={{
                        background:
                        'radial-gradient(ellipse at center, color-mix(in srgb, var(--primary) 35%, transparent) 0%, transparent 70%)',
                    }}
                />
            </section>
        </>
    )
}