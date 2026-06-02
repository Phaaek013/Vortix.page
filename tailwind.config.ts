import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base atmosphere
        ink: {
          DEFAULT: "#0A0A0A", // base / nível 0
          900: "#0A0A0A",
          800: "#0E0E0E",
          700: "#131313", // surface
          600: "#1A1A1A",
          500: "#201F1F",
        },
        // Brand emerald vortex
        emerald: {
          DEFAULT: "#3DD9A0",
          bright: "#61F6BB", // accent
          dim: "#2BB98A",
          deep: "#006C4B",
        },
        // Contrast surface
        cream: "#F5F4F0",
        // Text
        mist: "#BBCAC0", // on-surface-variant
        slate: "#94A3B8", // supporting text
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        xl: "1rem",
        "2xl": "1.5rem",
      },
      maxWidth: {
        container: "1280px",
      },
      keyframes: {
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 40s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
