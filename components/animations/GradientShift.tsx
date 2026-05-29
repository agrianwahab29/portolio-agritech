"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type GradientShiftProps = {
  className?: string;
};

export function GradientShift({ className }: GradientShiftProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let frame: number;
    let angle = 0;

    const animate = () => {
      angle = (angle + 0.15) % 360;
      el.style.background = `conic-gradient(from ${angle}deg at 50% 50%, rgba(56,189,248,0.08), rgba(167,139,250,0.06), rgba(34,211,238,0.08), rgba(56,189,248,0.08))`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden
    />
  );
}
