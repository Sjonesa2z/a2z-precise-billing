import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12304A",
          50: "#EAF0F5",
          100: "#CFDDE8",
          600: "#1A3E5C",
          700: "#12304A",
          800: "#0D2438",
          900: "#081827",
        },
        blue: {
          DEFAULT: "#1769AA",
          50: "#EAF3FB",
          100: "#CCE1F3",
          400: "#3B87C4",
          500: "#1769AA",
          600: "#125A93",
          700: "#0E4A79",
        },
        teal: {
          DEFAULT: "#168F8B",
          50: "#E6F5F4",
          100: "#C4E7E5",
          400: "#2AABA6",
          500: "#168F8B",
          600: "#127772",
          700: "#0E5F5B",
        },
        surface: {
          DEFAULT: "#F5F8FA",
          muted: "#EEF3F6",
        },
        ink: {
          DEFAULT: "#17232D",
          muted: "#607080",
          soft: "#8A97A3",
        },
        border: {
          DEFAULT: "#DDE5EA",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "16px",
        control: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(18, 48, 74, 0.06), 0 8px 24px -12px rgba(18, 48, 74, 0.14)",
        raised: "0 12px 32px -12px rgba(18, 48, 74, 0.24)",
        focus: "0 0 0 3px rgba(23, 105, 170, 0.35)",
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
