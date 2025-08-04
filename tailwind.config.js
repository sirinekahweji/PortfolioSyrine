/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        rose1: "#F2B3D1",
        rose2: "#F2B6DD",
        violet1: "#EECEF2",
        violet2: "#CAB4D9",
      },
backgroundImage: {
  'custom-gradient': 'linear-gradient(to right, #F2B3D1, #F2B6DD, #EECEF2, #CAB4D9)',
  'stars': "url('https://www.transparenttextures.com/patterns/stardust.png')",
}
,

   keyframes: {
        fadeInOut: {
          '0%, 20%': { opacity: '0' },
          '30%, 50%': { opacity: '1' },
          '60%, 100%': { opacity: '0' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 6s ease-in-out infinite',
      },
      
    },
  },
  plugins: [],
}

