module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#2e2e2e",
        },
        blue: {
          DEFAULT: "#034560",
          dark: "#012534",
        },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
        },
      },
      fontFamily: {
        sans: ["Audiowide", "cursive"],
      },
    },
  },
  plugins: [],
};
