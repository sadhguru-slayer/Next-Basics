// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",       // Pages/layouts in App Router
    "./src/components/**/*.{js,jsx,ts,tsx}", // Your components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
