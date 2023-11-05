/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,txt}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}