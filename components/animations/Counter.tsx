"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

type CounterProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
};

export function Counter({
  value,
  decimals = 0,
  suffix = "",
  duration = 1.5,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(decimals > 0 ? "0.00" : "0");

  useEffect(() => {
    if (prefersReducedMotion()) {
      setDisplay(value.toFixed(decimals));
    }
  }, [value, decimals]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) return;

      const obj = { v: 0 };
      gsap.to(obj, {
        v: value,
        duration,
        ease: "power2.out",
        onUpdate: () => setDisplay(obj.v.toFixed(decimals)),
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [value] },
  );

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
