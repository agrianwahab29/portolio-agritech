"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type StaggerRevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  childSelector?: string;
};

export function StaggerReveal({
  children,
  className,
  stagger = 0.12,
  childSelector = ":scope > *",
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const items = el.querySelectorAll(childSelector);
      if (items.length === 0) return;

      if (prefersReducedMotion()) {
        gsap.set(items, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      gsap.fromTo(
        items,
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
