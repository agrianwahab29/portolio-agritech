import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#050816",
          secondary: "#0B1020",
          tertiary: "#111827",
        },
        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
          muted: "#94A3B8",
          disabled: "#64748B",
        },
        accent: {
          blue: "#38BDF8",
          cyan: "#22D3EE",
          purple: "#A78BFA",
          emerald: "#34D399",
          yellow: "#FACC15",
          pink: "#F472B6",
        },
        status: {
          published: "#34D399",
          "in-press": "#FACC15",
          completed: "#38BDF8",
          archived: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #38BDF8 0%, #22D3EE 50%, #A78BFA 100%)",
        "gradient-text":
          "linear-gradient(135deg, #38BDF8, #22D3EE, #A78BFA)",
        "gradient-radial-tl":
          "radial-gradient(circle at top left, rgba(56,189,248,0.22), transparent 32%)",
        "gradient-radial-br":
          "radial-gradient(circle at bottom right, rgba(167,139,250,0.18), transparent 28%)",
        "gradient-card-glow":
          "radial-gradient(circle at top, rgba(56,189,248,0.10), transparent 60%)",
      },
      boxShadow: {
        sm: "0 2px 8px rgba(0,0,0,0.30)",
        md: "0 8px 24px rgba(0,0,0,0.40)",
        lg: "0 16px 48px rgba(0,0,0,0.50)",
        "glow-blue": "0 0 40px rgba(56,189,248,0.25)",
        "glow-purple": "0 0 40px rgba(167,139,250,0.25)",
        "glow-emerald": "0 0 40px rgba(52,211,153,0.25)",
      },
      borderRadius: {
        button: "12px",
        card: "20px",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "scroll-bounce": "scrollBounce 1.6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scrollBounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
      },
      maxWidth: {
        container: "1280px",
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
