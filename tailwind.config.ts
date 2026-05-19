import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          DEFAULT: "#2324cc",
          50: "#e8ecf8",
          100: "#c5d0ee",
          200: "#9db0e2",
          300: "#7490d6",
          400: "#4d70ca",
          500: "#2651be",
          600: "#2324cc",
          700: "#132c6b",
          800: "#0d1e47",
          900: "#060f24",
        },
        orange: {
          DEFAULT: "#fdb822",
          50: "#fff3e8",
          100: "#feddbc",
          200: "#fec490",
          300: "#feab64",
          400: "#fe9238",
          500: "#fdb822",
          600: "#c25500",
          700: "#8f3f00",
          800: "#5c2900",
          900: "#291200",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,8vw,6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem,5vw,4rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem,3vw,2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "paint-stroke": "paintStroke 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        paintStroke: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, #2324cc 0%, #0d1e47 60%, #0a1535 100%)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        "glow-orange": "0 0 40px rgba(245, 106, 0, 0.3)",
        "glow-royal": "0 0 40px rgba(26, 58, 143, 0.4)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.15)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.08)",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
