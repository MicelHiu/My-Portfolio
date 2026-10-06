import { Mail, MapPin } from "lucide-react";
import { getContact, getGmailComposeUrl } from "@/lib/contact";

export default function ContactSection() {
    const { email, location, socials } = getContact();

    return (
        <section id="contact" className="pt-8 pb-24 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                    Get in Touch<span className="text-primary">.</span>
                </h2>
                <p className="text-secondary mt-3">
                    Have a project in mind or just want to say hello?
                </p>
            </div>

            <div className="flex flex-col items-center gap-4 text-lg text-secondary">
                <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-foreground transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                    {email}
                </a>
                <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    {location}
                </div>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
                {socials.map(({ label, href }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-primary/30 bg-surface px-5 py-3 text-secondary transition hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
                    >
                        {label}
                    </a>
                ))}
            </div>

            <div className="mt-10 text-center">
                <a
                    href={getGmailComposeUrl(email, "Hello Michelle", "Hi Michelle,\n\n")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/30 transition-colors hover:bg-secondary"
                >
                    <Mail className="h-5 w-5" />
                    Send me an email
                </a>
            </div>
        </section>
    );
}
