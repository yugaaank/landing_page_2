"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils";
import "@/styles/hero-title.css";

interface HeroTitleProps {
  text?: string;
  className?: string;
}

export function HeroTitle({ text = "KATALYST", className }: HeroTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-block perspective-1000", className)}
      style={
        {
          "--mouse-x": `${mousePos.x}%`,
          "--mouse-y": `${mousePos.y}%`,
        } as React.CSSProperties
      }
    >
      {/* 
        Removed aggressive background glow to match the clean Faria template. 
        The background will remain perfectly stark behind the glass text. 
      */}

      {/* Main glass text */}
      <h1
        className="glass-text-effect relative z-10 m-0 font-heading tracking-tighter uppercase font-bold text-transparent select-none text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl !leading-[1.1]"
        data-text={text}
      >
        {text}
      </h1>
    </div>
  );
}
