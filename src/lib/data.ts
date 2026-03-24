import { WaypointsIcon, BotIcon, ZapIcon, SettingsIcon, SearchCheckIcon, WorkflowIcon } from "lucide-react";

export const SITE_CONFIG = {
    name: "Katalyst",
    title: "AI Automation and Marketing Infrastructure for Scalable Businesses",
    description: "Build systems for measurable growth through AI chatbots, workflow automation, and high-performance ad campaigns.",
};

export const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export const SERVICES = [
    {
        Icon: BotIcon,
        name: "AI Call Bots",
        description: "24/7 automated call handling, lead capture, and appointment booking.",
        href: "/services",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
    },
    {
        Icon: ZapIcon,
        name: "Workflow Automation",
        description: "Replacing repetitive manual tasks with AI-driven systems to save time and reduce errors.",
        href: "/services",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
    },
    {
        Icon: SearchCheckIcon,
        name: "Lead Management",
        description: "Automated lead capture and follow-up systems that ensure no lead is left behind.",
        href: "/services",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
    },
    {
        Icon: WorkflowIcon,
        name: "System Integration",
        description: "Connecting fragmented tools like CRMs, email, Slack, and payment systems for seamless operations.",
        href: "/services",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
    },
];

export const PROCESS = [
    {
        id: 1,
        title: "Audit",
        description: "Identifying bottlenecks and mapping processes for automation.",
        icon: SearchCheckIcon,
    },
    {
        id: 2,
        title: "Automate Workflow",
        description: "Building the systems and integrating AI agents into your daily operations.",
        icon: ZapIcon,
    },
    {
        id: 3,
        title: "Personalization Reach",
        description: "Scaling with AI agents and marketing infrastructure for high performance.",
        icon: WaypointsIcon,
    },
];

export const COMPANIES = [
    { name: "Zapier", logo: "/assets/company-01.svg" },
    { name: "Make.com", logo: "/assets/company-02.svg" },
    { name: "OpenAI", logo: "/assets/company-03.svg" },
    { name: "Airtable", logo: "/assets/company-04.svg" },
    { name: "LangChain", logo: "/assets/company-05.svg" },
    { name: "n8n", logo: "/assets/company-06.svg" },
];

export const REVIEWS = [
    {
        name: "Hagai Avisar",
        username: "Veterinary Clinic Owner",
        review: "The AI Call Bot changed our business. 80% increase in monthly clients by handling calls 24/7.",
        rating: 5,
    },
    {
        name: "Sarah Chen",
        username: "COO at TechScale",
        review: "Katalyst streamlined our entire marketing infrastructure. The automations save us 20+ hours a week.",
        rating: 5,
    },
    {
        name: "Michael Ross",
        username: "Founder, GrowthOps",
        review: "The system integration was flawless. Everything from our CRM to Slack just works together now.",
        rating: 5,
    },
];
