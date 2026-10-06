"use client";

import { GraduationCap, MapPin, Quote, TrendingUp, University } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
    const infoCards = [
        {
            icon: <MapPin className="w-6 h-6 text-foreground" />,
            label: "Domicile",
            value: "Jakarta, Indonesia",
        },
        {
            icon: <University className="w-6 h-6 text-foreground" />,
            label: "Education",
            value: "Kalbis University",
            detail: "Informatics • 2023 - 2027",
        },
        {
            icon: <GraduationCap className="w-6 h-6 text-foreground" />,
            label: "High School",
            value: "SMAK 2 PENABUR Jakarta",
            detail: "2020 - 2023 • 91.61/100",
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-foreground" />,
            label: "Experience Level",
            value: "Undergraduate / 7th Semester",
        }
    ]
    return (
        <>
            <section id="about" className="relative text-secondary py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <span className="absolute top-10 left-10 w-1 h-1 bg-primary/40 rounded-full" />
                    <span className="absolute top-24 right-1/3 w-1 h-1 bg-primary/40 rounded-full" />
                    <span className="absolute bottom-20 left-1/4 w-1 h-1 bg-primary/40 rounded-full" />
                </div>

                {/* header */}
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                        About Me
                    </h2>
                    <p className="text-foreground mt-3">"A Dreamer, that's who she is"</p>
                </div>

                {/* content */}
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/aboutMe.jpeg"
                            alt="Profile Photo"
                            fill
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-foreground leading-relaxed text-lg mb-10">
                            I'm a final-year Informatics student who learns by building, from websites to full-stack apps. I like to dream big but stay grounded in execution, writing clean, structured code and approaching every project with curiosity and professionalism. I'm always looking for ways to grow and to contribute meaningfully to the team around me.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {infoCards.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-surface border border-primary rounded-xl p-5 flex flex-col items-center text-center gap-2 hover:border-secondary transition-colors"
                                >
                                    {item.icon}
                                    <span className="text-sm text-secondary">{item.label}</span>
                                    <span className="font-semibold text-foreground text-sm">
                                        {item.value}
                                    </span>
                                    {item.detail && (
                                        <span className="text-xs text-secondary">{item.detail}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}