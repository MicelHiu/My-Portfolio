import type { ReactNode } from "react";
import { Download, ExternalLink } from "lucide-react";
import { getEducation } from "@/lib/education";
import type { Experience } from "@/lib/experience";
import { getOrganizations } from "@/lib/organization";
import { getProfessionals } from "@/lib/professional";
import { RESUME_FILENAME, RESUME_URL } from "@/lib/resume";

// satu kolom: judul + garis timeline vertikal
function TimelineColumn({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div>
            <h3 className="mb-8 text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
                {title}
            </h3>
            <div className="relative">
                <div className="absolute bottom-0 left-1.75 top-8 w-0.5 bg-primary" />
                {children}
            </div>
        </div>
    );
}

// satu entri: dot di garis + card
function TimelineItem({ children }: { children: ReactNode }) {
    return (
        <div className="group relative pb-8 pl-10 last:pb-0">
            <span className="absolute left-0 top-7 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />
            <div className="rounded-xl border border-primary/30 bg-surface p-5 transition-colors hover:border-primary">
                {children}
            </div>
        </div>
    );
}

function ExperienceCard({ exp }: { exp: Experience }) {
    return (
        <TimelineItem>
            <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>

            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {exp.type}
                </span>
                <span className="text-sm text-secondary">{exp.period}</span>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-x-2 text-sm text-secondary">
                {exp.companyUrl ? (
                    <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                        {exp.company}
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                ) : (
                    <span className="font-medium text-primary">{exp.company}</span>
                )}
                <span>•</span>
                <span>{exp.location}</span>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-secondary marker:text-primary">
                {exp.points.map((point) => (
                    <li key={point}>{point}</li>
                ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-background px-3 py-1 text-xs text-foreground">
                        {tag}
                    </span>
                ))}
            </div>
        </TimelineItem>
    );
}

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative py-24">
            <div className="mb-16 px-6 text-center">
                <h2 className="text-4xl font-bold text-foreground md:text-5xl">Experience</h2>
                <p className="mt-3 text-secondary">My journey of building skills through work, projects, and collaboration.</p>
            </div>

            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                    <TimelineColumn title="Education">
                        {getEducation().map((edu) => (
                            <TimelineItem key={`${edu.institute}-${edu.name}`}>
                                <h4 className="text-lg font-semibold text-foreground">{edu.name}</h4>
                                <p className="mt-1 text-sm font-medium text-primary">{edu.institute}</p>
                                <p className="mt-2 text-sm text-secondary">Score: {edu.score}</p>
                                <p className="mt-4 text-sm leading-relaxed text-secondary">{edu.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {edu.tags.map((tag) => (
                                        <span key={tag} className="rounded-full bg-background px-3 py-1 text-xs text-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </TimelineItem>
                        ))}
                    </TimelineColumn>

                    <TimelineColumn title="Organization">
                        {getOrganizations().map((exp) => (
                            <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} />
                        ))}
                    </TimelineColumn>

                    <TimelineColumn title="Professional">
                        {getProfessionals().map((exp) => (
                            <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} />
                        ))}
                    </TimelineColumn>
                </div>

                {/* penutup */}
                <div className="mt-16 rounded-2xl border border-primary/30 bg-surface px-6 py-14 text-center">
                    <h3 className="text-3xl font-bold text-foreground md:text-4xl">
                        Your team could be my next chapter<span className="text-primary">!</span>
                    </h3>
                    <p className="mx-auto mt-4 max-w-2xl text-secondary">
                        Open to new opportunities and collaborations. Let&apos;s connect and explore how I can contribute to your team.
                    </p>
                    <a
                        href={RESUME_URL}
                        download={RESUME_FILENAME}
                        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary bg-primary/10 px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                        <Download className="h-5 w-5" />
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
