import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'user_avatar': "url('/user_avatar.png')",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        activeState_1: "var(--activestate_bg_1)",
        activeState_2: "var(--activestate_bg_2)",
        border: "var(--unnamed-color-ededed)",
        card_bg: "var(--unnamed-color-ffffff)",
      },
    },
  },
  plugins: [],
};
export default config;
