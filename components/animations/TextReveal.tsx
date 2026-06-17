"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TextRevealProps = {
  children: string;
  className?: string;
  delay?: number;
};

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (prefersReducedMotion()) {
        el.style.opacity = "1";
        return;
      }

      const words = el.querySelectorAll("[data-word]");
      gsap.fromTo(
        words,
        { opacity: 0, y: 20, rotateX: 40 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "expo.out",
          stagger: 0.06,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref },
  );

  const words = children.split(" ");

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          className="inline-block mr-[0.25em]"
          style={{ perspective: "400px" }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
