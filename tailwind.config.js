/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
    screens: {
      'portal': '600px', 
    },
    wrapper:{
      width:{
        default:'100%',
        portal:'1200px' 
      }
    }
  },
  plugins: [],
}

