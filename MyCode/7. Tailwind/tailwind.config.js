/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
        tablet: "700px",
      },
      colors: {
        blue: {
          500: "red",
        },
        dibimbing: {
          primary: {
            100: "#f5f5f5",
          },
          secondary: "#010101",
        },
      },
      fontSize: {
        "huruf-gede": "200px",
      },
      gridTemplateColumns: {
        desktop: "repeat(5, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
