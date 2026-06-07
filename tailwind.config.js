/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2563eb",
        "primary-dark": "#1d4ed8",
        accent: "#f59e0b",
        "accent-dark": "#d97706",
        surface: "rgba(255, 255, 255, 0.05)",
        "surface-light": "rgba(255, 255, 255, 0.1)",
        "border-glass": "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
