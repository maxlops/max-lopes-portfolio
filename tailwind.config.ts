import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "#E5E7EB",
        ink: "#111827",
        muted: "#4B5563",
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A8A"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 55px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
