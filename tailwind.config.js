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
        body: "#1D1D1D",
      },
      transitionDuration: {
        main: "300ms",
      },
      screens: {
        "2xl-max": { max: "1535px" },
        "xl-max": { max: "1279px" },
        "lg-max": { max: "1023px" },
        "md-max": { max: "767px" },
        "sm-max": { max: "639px" },
      },
    },
  },
  plugins: [],
};
