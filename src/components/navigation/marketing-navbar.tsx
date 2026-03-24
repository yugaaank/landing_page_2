"use client"

import { Home, User, Briefcase, Phone } from 'lucide-react';
import { NavBar } from "@/components/ui/tube-light-navbar";

const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/about', icon: User },
    { name: 'Contact', url: '/contact', icon: Phone }
];

export function MarketingNavbar() {
    return <NavBar items={navItems} />;
}
