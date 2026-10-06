import { getContact } from "@/lib/contact";

export default function Footer() {
    const { socials } = getContact();

    return (
        <footer className="border-t border-secondary/30 bg-background">
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <span className="text-3xl font-bold text-foreground">
                        Micel<span className="text-primary">.</span>
                    </span>
                    <p className="mt-3 text-sm text-secondary">
                        © {new Date().getFullYear()} Michelle Hiu. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm text-secondary">
                    {socials.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-foreground"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
