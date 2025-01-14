/** @type {import('tailwindcss').Config} */
const config = {
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
        customColor: "#0DA8BC",
        colorTitle: "#686868",
        colorTtile2: "#454545",
        colorText: "#626262",
        lastUpdated: "#e05f5f"
      },
    },
  },
  plugins: [],
};

export default config;
