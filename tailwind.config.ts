import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // Theme-aware tokens (resolved via CSS variables)
        bg: {
          DEFAULT: "var(--bg-primary)",
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
        },
        fg: {
          DEFAULT: "var(--text-secondary)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
        },
        line: {
          DEFAULT: "var(--line)",
          hover: "var(--line-hover)",
        },
        brand: {
          DEFAULT: "var(--accent)",
          strong: "var(--accent-strong)",
          text: "var(--accent-text)",
          contrast: "var(--accent-contrast)",
        },
        // Semantic status colors (theme-independent)
        ok: "#22c55e",
        warn: "#f59e0b",
        info: "#0ea5e9",
        danger: "#ef4444",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(120deg, var(--grad-from), var(--grad-via), var(--grad-to))",
        "gradient-text":
          "linear-gradient(120deg, var(--grad-from), var(--grad-via), var(--grad-to))",
        "radial-1":
          "radial-gradient(60% 60% at 20% 10%, var(--radial-1), transparent 60%)",
        "radial-2":
          "radial-gradient(50% 50% at 90% 90%, var(--radial-2), transparent 60%)",
      },
      boxShadow: {
        sm: "0 1px 2px hsl(var(--shadow-color) / 0.08), 0 2px 8px hsl(var(--shadow-color) / 0.06)",
        md: "0 4px 12px hsl(var(--shadow-color) / 0.1), 0 12px 32px hsl(var(--shadow-color) / 0.08)",
        lg: "0 12px 48px hsl(var(--shadow-color) / 0.18)",
        glow: "0 0 0 1px var(--line-hover), 0 16px 48px -8px var(--glow)",
      },
      borderRadius: {
        button: "10px",
        card: "16px",
      },
      maxWidth: {
        prose: "68ch",
        content: "1120px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
