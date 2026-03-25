import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FFD540",
          primary: "#FFD540",
          hover: "#FFE37A",
          active: "#E6C039",
          secondary: "#FFFFFF",
        },
        neutral: {
          0: "#FFFFFF",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#A3A3A3",
          400: "#7A7A7A",
          500: "#5C5C5C",
          600: "#3D3D3D",
          700: "#2A2A2A",
          800: "#131415",
          900: "#0C0C0D",
        },
        success: "#52CE5E",
        error: "#FF4040",
        warning: "#F5B942",
        danger: "#FF4040",
        info: "#186EFA",
        bg1: "#0C0C0D",
        bg2: "#131415",
        surface: "#131415",
        elevated: "#2A2A2A",
      },
      fontFamily: {
        heading: ["Outfit", "system-ui", "sans-serif"],
        body: ["Work Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        r1: "6px",
        r2: "10px",
        r3: "14px",
        r4: "18px",
        r5: "24px",
        r6: "999px",
      },
      boxShadow: {
        e1: "0 10px 30px rgba(0, 0, 0, 0.35)",
        e2: "0 20px 60px rgba(0, 0, 0, 0.45)",
        glow: "0 0 20px rgba(255, 213, 64, 0.28)",
        brand: "0 6px 20px rgba(255, 213, 64, 0.35)",
        focus: "0 0 0 1px rgba(255, 213, 64, 0.55), 0 0 0 5px rgba(255, 213, 64, 0.16)",
      },
      maxWidth: {
        ds: "72rem",
      },
      animation: {
        "page-in": "pageIn 0.25s ease forwards",
        shimmer: "shimmer 1.2s linear infinite",
      },
      keyframes: {
        pageIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
