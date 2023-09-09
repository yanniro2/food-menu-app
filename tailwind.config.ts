import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  safelist: [
    "bg-[#cfdedb]",
    "bg-[#e5cded]",
    "bg-[#c1dbe8]",
    "bg-[#c8caf0]",
    "bg-[#fbc1d9]",
    "bg-[#e5dade]",
    "bg-[#f1c8d0]",
    "bg-[#c1e9de]",
    "border-[#cfdedb]",
    "border-[#e5cded]",
    "border-[#c1dbe8]",
    "border-[#c8caf0]",
    "border-[#fbc1d9]",
    "border-[#e5dade]",
    "border-[#f1c8d0]",
    "border-[#c1e9de]",
    "focus:bg-[#cfdedb]",
    "focus:bg-[#e5cded]",
    "focus:bg-[#c1dbe8]",
    "focus:bg-[#c8caf0]",
    "focus:bg-[#fbc1d9]",
    "focus:bg-[#e5dade]",
    "focus:bg-[#f1c8d0]",
    "focus:bg-[#c1e9de]",
  ],
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
    },
    screens: {
      cus: { min: "1024px", max: "1500px" },
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
