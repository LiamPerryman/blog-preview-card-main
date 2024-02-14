/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        notActiveShadow: `10px 10px 0px 0px black`,
        activeShadow: `15px 15px 0px 0px black`,
      },
    },
  },
  plugins: [],
};
