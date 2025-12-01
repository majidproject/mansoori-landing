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
        'glow': 'radial-gradient(circle at 50% -20%, #10b98115, transparent)',
        'service-gradient': 'linear-gradient(to bottom right, #0f172a, rgba(23, 37, 84, 0.3))',
      },
    },
  },
  plugins: [],
};
export default config;