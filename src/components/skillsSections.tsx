import { getSkills } from "@/lib/skills";

export default function SkillsSections() {
    return (
        <section id="skills" className="bg-background py-24 px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills</h2>
                <p className="text-secondary mt-3">Technologies and tools I have worked with.</p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {getSkills().map(({ title, skills }) => (
                    <div key={title}>
                        <h3 className="text-2xl font-semibold text-foreground mb-5">{title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map(({ name, icon: Icon, color }) => (
                                <div
                                    key={name}
                                    className="flex items-center gap-3 rounded-xl border border-primary/30 bg-surface px-5 py-3 font-medium text-foreground transition hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                                >
                                     <Icon className="h-5 w-5" style={{ color }} />
                                     {name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}