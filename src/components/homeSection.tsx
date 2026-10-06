export default function HomeSection() {
    return (
        <>
            <section id="home" className="relative flex min-h-screen flex-col justify-center overflow-hidden">
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
                    <p className="mb-4 text-lg text-secondary">Hey, I&apos;m</p>

                    <h1 className="text-8xl font-bold tracking-tight text-secondary sm:text-6xl">
                    Michelle Hiu
                    </h1>

                    <span className="mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
                    Software Engineer
                    </span>

                    <p className="mt-8 max-w-xl text-xl text-foreground sm:text-2xl">
                    I think beyond limitations while staying grounded in execution
                    that deliver <span className="italic text-secondary">real impact</span>
                    </p>

                    <div className="mt-10 flex items-center gap-4">
                    <a
                        href="#contact"
                        className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
                    >
                        Let&apos;s Connect
                        <span aria-hidden="true">→</span>
                    </a>
                    <span className="flex items-center gap-2 text-secondary">
                        michelle.hiu05.com
                        <button
                        type="button"
                        aria-label="Copy email"
                        className="rounded p-1 hover:bg-primary/10 transition-colors"
                        onClick={() => navigator.clipboard.writeText('hi@abhayrana.com')}
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
                    className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
                    style={{
                        background:
                        'radial-gradient(ellipse at center, color-mix(in srgb, var(--primary) 35%, transparent) 0%, transparent 70%)',
                    }}
                />
            </section>
        </>
    )
}