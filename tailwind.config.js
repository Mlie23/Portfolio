module.exports = {
  purge: ['../index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false,
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
     extend: {
      colors:{
        oxford: '#F5EFE6',
        tan: '#E8DFCA',
        grayy: '#AEBDCA',
        grayblue: '#AEBDCA',
        redd: '#dc2626',
        box:'#967E76'
      },
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }