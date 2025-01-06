/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",            
    "./src/**/*.{js,ts,jsx,tsx}" 
  ],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '90%': '90%',
      '16': '4rem',
    },
    extend: {
      fontFamily: {
        rajdhani: ['Rajdhani'],
      },
    },
  },
  plugins: [import('tailwind-scrollbar')],
}

