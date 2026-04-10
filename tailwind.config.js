/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nature: {
          light: '#F8F9F5', // natural cream / off-white
          dark: '#2d3f32',  // deep earth green
          gold: '#c29b4e',  // muted elegant gold
          accent: '#7f9f8c' // soft mint/olive accent
        }
      },
      fontFamily: {
        sans: ['"Zilla Slab"', 'serif'],
        serif: ['Cinzel', 'serif'],
        display: ['var(--fonth)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
