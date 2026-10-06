import { getSkills } from "@/lib/skills";

const MIN_CHIPS = 12; // minimal chip per grup supaya kategori kecil tetap memenuhi lebar layar
const SECONDS_PER_CHIP = 3;

export default function SkillsSections() {
    return (
        <section id="skills" className="py-24 overflow-hidden">
            <div className="text-center mb-16 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
                <p className="text-secondary mt-3">Technologies and tools I have worked with.</p>
            </div>

            <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
                {getSkills().map(({ title, skills }, row) => {
                    const repeat = Math.ceil(MIN_CHIPS / skills.length);
                    const group = Array.from({ length: repeat }, () => skills).flat();

                    return (
                        <div key={title}>
                            <h3 className="text-2xl font-semibold text-foreground text-center mb-5">{title}</h3>

                            <div className="marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                                <div
                                    className="marquee-track flex w-max"
                                    style={{
                                        ["--marquee-duration" as string]: `${group.length * SECONDS_PER_CHIP}s`,
                                        animationDirection: row % 2 ? "reverse" : "normal",
                                    }}
                                >
                                    {[0, 1].map((copy) => (
                                        <div key={copy} aria-hidden={copy === 1} className="flex gap-3 pr-3">
                                            {group.map(({ name, icon: Icon, color }, i) => (
                                                <div
                                                    key={`${name}-${i}`}
                                                    className="flex items-center gap-3 rounded-xl border border-primary/30 bg-surface px-5 py-3 font-medium text-foreground whitespace-nowrap transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                                                >
                                                    <Icon className="h-5 w-5" style={{ color }} />
                                                    {name}
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
