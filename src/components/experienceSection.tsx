import { Download, ExternalLink } from "lucide-react";
import { getExperiences } from "@/lib/experience";
import { RESUME_FILENAME, RESUME_URL } from "@/lib/resume";

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative py-24">
            <div className="text-center mb-16 px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Experience</h2>
                <p className="text-secondary mt-3">My journey of building skills through work, projects, and collaboration.</p>
            </div>

            <div className="max-w-6xl mx-auto px-6">
              <div className="relative">
                {/* garis timeline: berakhir tepat di card "Want to know more?" */}
                <div className="absolute left-[7px] top-8 bottom-0 w-0.5 bg-primary" />

                {getExperiences().map((exp) => (
                    <div key={`${exp.company}-${exp.period}`} className="group relative pl-12 pb-10">
                        <span className="absolute left-0 top-7 h-4 w-4 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />

                        <div className="rounded-xl border border-primary/30 bg-surface p-6 transition-colors hover:border-primary">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                                <div className="flex items-center gap-3">
                                    <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                        {exp.type}
                                    </span>
                                    <span className="text-sm text-secondary">{exp.period}</span>
                                </div>
                            </div>

                            <div className="mt-1 flex items-center gap-2 text-sm text-secondary">
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

                            <ul className="mt-4 list-disc space-y-2 pl-5 text-secondary marker:text-primary">
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
                        </div>
                    </div>
                ))}

              </div>

              {/* penutup timeline */}
              <div className="rounded-2xl border border-primary/30 bg-surface px-6 py-14 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    Your team could be my next chapter<span className="text-primary">!</span>
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-secondary">
                    Open to new opportunities and collaborations. Let's connect and explore how I can contribute to your team.
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
