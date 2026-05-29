"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins (client-side only)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Reduced motion check
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Default config
export const gsapDefaults = {
  ease: "power3.out",
  duration: 0.8,
  stagger: 0.1,
} as const;

// Scroll reveal helper
export function createScrollReveal(
  trigger: string | Element,
  targets: string | Element | Element[],
  options?: gsap.TweenVars,
) {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0, x: 0, scale: 1 });
    return null;
  }

  return gsap.from(targets, {
    opacity: 0,
    y: 40,
    duration: gsapDefaults.duration,
    ease: gsapDefaults.ease,
    stagger: gsapDefaults.stagger,
    scrollTrigger: {
      trigger,
      start: "top 80%",
      end: "bottom 20%",
      once: true,
    },
    ...options,
  });
}

// FadeUp animation helper
export function fadeUp(
  targets: string | Element | Element[],
  options?: gsap.TweenVars,
) {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return null;
  }

  return gsap.from(targets, {
    opacity: 0,
    y: 40,
    duration: gsapDefaults.duration,
    ease: gsapDefaults.ease,
    ...options,
  });
}

// Stagger reveal helper
export function staggerReveal(
  targets: string | Element | Element[],
  options?: gsap.TweenVars,
) {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0, scale: 1 });
    return null;
  }

  return gsap.from(targets, {
    opacity: 0,
    y: 30,
    scale: 0.96,
    duration: 0.6,
    ease: gsapDefaults.ease,
    stagger: 0.12,
    ...options,
  });
}

export { gsap, ScrollTrigger };
