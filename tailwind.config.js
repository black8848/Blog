/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

