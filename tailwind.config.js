module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          500: "#404366",
          900: "#000",
          700: "#4B4B4B",
          200: "#9092A9",
        },
        primary: {
          500: "#D97559",
        },
      },
      backgroundColor: ["active"],
      backgroundImage: {
        "hero-pattern": "url('/assets/bannerCollege.png')",
      },
    },
  },
  plugins: [],
};
