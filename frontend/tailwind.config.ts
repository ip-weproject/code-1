import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,mjs}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,mjs}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
