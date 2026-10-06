export type Social = {
    label: string;
    href: string;
};

export type Contact = {
    email: string;
    location: string;
    socials: Social[];
};

// TODO: ganti dengan data kontak asli
const contact: Contact = {
    email: "michelle.hiu05@gmail.com",
    location: "Jakarta, Indonesia",
    socials: [
        { label: "GitHub", href: "https://github.com/MicelHiu" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/michelle-hiu-24a8792b3/" },
    ],
};

export function getContact() {
    return contact;
}
