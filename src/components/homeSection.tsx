export default function HomeSection() {
    return (
        <>
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
                <p className="mb-4 text-lg text-white/60">Hey, I&apos;m</p>

                <h1 className="text-8xl font-bold tracking-tight text-secondary sm:text-6xl">
                Michelle Hiu
                </h1>

                <span className="mt-6 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-foreground">
                Full Stack Developer
                </span>

                <p className="mt-8 max-w-xl text-xl text-foreground sm:text-2xl">
                I think beyond limitations while staying grounded in execution
                that deliver <span className="italic text-secondary">real impact</span>
                </p>

                <div className="mt-10 flex items-center gap-4">
                <a
                    href="#connect"
                    className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
                >
                    Let&apos;s Connect
                    <span aria-hidden="true">→</span>
                </a>
                <span className="flex items-center gap-2 text-white/60">
                    michelle.hiu05.com
                    <button
                    type="button"
                    aria-label="Copy email"
                    className="rounded p-1 hover:bg-white/10 transition-colors"
                    onClick={() => navigator.clipboard.writeText('hi@abhayrana.com')}
                    >
                    ⧉
                    </button>
                </span>
                </div>
            </div>

            <div className="relative z-10 flex justify-center pb-10 text-white/40">
                <span className="animate-bounce">↓</span>
            </div>

            <div
                className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
                style={{
                    background:
                    'radial-gradient(ellipse at center, color-mix(in srgb, var(--primary) 35%, transparent) 0%, transparent 70%)',
                }}
            />
        </>
    )
}