// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ¡CRUCIAL! Esto le dice a Tailwind que busque en todos tus archivos de código.
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
