/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#f8f4eb', // Example hex color
        customComplement:"#EFE4D3"
      },
      fontFamily: {
        didot: [ "GFS Didot", 'serif'], // Add the custom font family
      },
    },
  },
  plugins: [],
}