module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '420px',
        '3xl':'1920px',
      },
      fontFamily: {
        "sans": ["Outfit", "sans-serif"],
        "body": ["Outfit", "sans-serif"],
     },
       textColor: {
        "purple": "#371a45",
        "red": '#df0606',
      },
    },
    minHeight: {
      'banner-sm': '320px',
      'banner-md': '680px',
      'banner-lg': '1024px',
      'banner-xl': '1200px',
    },
  },
 
  plugins: [],
}
