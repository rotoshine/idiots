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
      },
      keyframes: ({ theme }) => ({
        bounceUpDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-4px)" },
        },
        spinOnceAndStop: {
          "0%": { transform: "rotate(0deg)" },
          "100%": {
            transform: "rotate(375deg)",
            color: theme("colors.red.500"),
          },
        },
      }),
      animation: {
        bounceUpDown: "bounceUpDown 0.2s ease-in-out infinite",
        spinOnceAndStop: "spinOnceAndStop 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;
