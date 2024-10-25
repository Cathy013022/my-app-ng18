/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    screens: {
      tablet: "600px",
      portal: "1920px",
    },
    wrapper: {
      width: {
        default: "100%",
        portal: "1200px",
      },
    },
  },
  plugins: [],
};
