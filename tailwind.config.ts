import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-focus": "var(--primary-focus)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
        "neutral-focus": "var(--neutral-focus)",
        surface: "var(--surface)",
        border: "var(--border)",
        muted: "var(--muted)",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "base-100": "#ffffff",
          "base-content": "#0f172a",
          primary: "#0369a1",
          secondary: "#334155",
          accent: "#ea580c",
          neutral: "#cbd5e1",
        },
        dark: {
          "base-100": "#0a0a0a",
          "base-content": "#ededed",
          primary: "#38bdf8",
          secondary: "#94a3b8",
          accent: "#fbbf24",
          neutral: "#1e293b",
        },
      },
    ],
  },
} satisfies Config;
