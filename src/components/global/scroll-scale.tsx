"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const ScrollScale = ({ children, className }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

    return (
        <motion.div
            ref={containerRef}
            style={{
                scale,
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollScale;
