/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["ubuntu", "sans-serif"],
      },
      colors: {
        primary: "#00FFC2",
        secondary: "#01FD49",
        paragraph: "#EEEEEE",
      },
      transitionDuration: {
        main: "300ms",
      },
    },
  },
  plugins: [],
};
