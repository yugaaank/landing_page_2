"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const ScrollSection = ({ children, className }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.div
            ref={containerRef}
            style={{
                scale,
                opacity,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollSection;
