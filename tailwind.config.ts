import type { Config } from "tailwindcss";

/**
 * Tailwind is wired to the same design tokens defined as CSS variables in
 * app/globals.css (:root). Editing a variable there updates both the bespoke
 * classes and these Tailwind utilities — single source of truth.
 *
 * Preflight is disabled on purpose: globals.css already ships the original
 * reset, and keeping Tailwind's reset off guarantees the look does not drift.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "var(--saffron)",
        "saffron-dark": "var(--saffron-dark)",
        maroon: "var(--maroon)",
        "maroon-dark": "var(--maroon-dark)",
        cream: "var(--cream)",
        "cream-2": "var(--cream-2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
      },
      fontFamily: {
        head: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
      borderRadius: {
        brand: "18px",
        "brand-sm": "12px",
      },
      boxShadow: {
        "brand-sm": "0 4px 16px rgba(28, 20, 16, 0.06)",
        "brand-md": "0 16px 40px rgba(28, 20, 16, 0.10)",
        "brand-lg": "0 30px 70px rgba(110, 23, 34, 0.18)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};

export default config;
