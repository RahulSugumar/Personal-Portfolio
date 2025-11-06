/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d1117",
        fg: "#e5e7eb",
        accent: "#3b82f6",
        card: "#111827",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
