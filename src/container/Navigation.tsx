export default function Navigation() {
    const navLinks = [
        { label: "Bio", href: "#bio"},
        { label: "Skills", href: "#skills"},
        { label: "Projects", href: "#projects"},
        { label: "Contact", href: "#contact"}
    ]
    return (
        <header className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <h1 className="text-lg font-bold text-white">Portofolio</h1>
                <nav className="flex items-center gap-6">
                    <a>
                        {navLinks.map((link) => (
                
                            key={link.label}
                            href={link.href}
                            className="text-sm text-neutral-300 transition-colors hover:text-white"
                            >
                            {link.label}
                        ))}
                    </a>
                </nav>
            </div>
            <button>Download CV</button>
        </header>
    )
}