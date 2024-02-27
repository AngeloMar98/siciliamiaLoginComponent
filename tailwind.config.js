/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        default: ["'League Spartan'", '"sans-serif"'],
      },
      colors: {
        darkCyan: "hsl(180, 29%, 50%)",
        lightGrayCyan1: "hsl(180, 31%, 95%)",
        lightGrayCyan2: "hsl(180, 52%, 96%)",
        darkGrayCyan: "hsl(180, 8%, 52%)",
        darkerGrayCyan: "hsl(180, 14%, 20%)",
      },
    },
    screens: { laptop: "780px" },
  },
  plugins: [],
};
