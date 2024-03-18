import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#020617",
        secondary: "#111827",
        ash: "#9CA3AF",
        ashTwo: "#6B7280",
        secondaryTwo: "#EAB308",
        offWhite: "#D1D5DB",
        blueOne: "#1F2937",
      },
    },
  },
  plugins: [],
};
export default config;
