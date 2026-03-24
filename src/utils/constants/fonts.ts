import { Inter, DM_Sans, DM_Serif_Display, Space_Grotesk, Manrope, Syne } from "next/font/google";
import localFont from "next/font/local";

export const aeonik = localFont({
    src: [
        {
            path: "../../../public/fonts/AeonikPro-Light.woff2",
            weight: "300",
        },
        {
            path: "../../../public/fonts/AeonikPro-Regular.woff2",
            weight: "400",
        },
        {
            path: "../../../public/fonts/AeonikPro-Medium.woff2",
            weight: "500",
        },
        {
            path: "../../../public/fonts/AeonikPro-Bold.woff2",
            weight: "700",
        },
        {
            path: "../../../public/fonts/AeonikPro-Black.woff2",
            weight: "900",
        }
    ],
    variable: "--font-aeonik",
});

export const neueMontreal = localFont({
    src: [
        {
            path: "../../../public/fonts/AeonikPro-Medium.woff2", // Fallback to Aeonik if file missing, or I'll use a system font stack
            weight: "500",
        }
    ],
    variable: "--font-neue-montreal",
});

export const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
});

export const dmSerifDisplay = DM_Serif_Display({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-dm-serif",
});

export const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
});

export const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});
