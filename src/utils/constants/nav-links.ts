import { LucideIcon } from "lucide-react";

export type NavLink = {
    title: string;
    href?: string;
    menu?: {
        title: string;
        href: string;
        tagline: string;
        icon: LucideIcon | any;
    }[];
};

export const NAV_LINKS: NavLink[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];
