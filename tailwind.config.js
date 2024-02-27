/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        SFLight: ["SF UI Display Light"],
        SFMedium: ["SF UI Display Medium"],
        SFSemi: ["SF UI Display Semibold"],
        SFBold: ["SF UI Display Bold"],
      },
    },
  },
  plugins: [],
};
