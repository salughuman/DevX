/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      primary: {"100":"#111111","200":"#191919"},
      secondary: {"100":"#c1ff00"}
    }},
    transitionTimingFunction: {
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  }, fontSize: {
    dynamic: "clamp(1rem, 5vw, 4rem)",
  },
    fontFamily: {
      oswald: ['Oswald'],
      arwo: ['Arwo'],
      satoshi: ['satoshi'],
      fredoka:['Fredoka One'],
      bogart: ['Bogart'],
      lato: ['Lato'],
      Raleway: ['Raleway', 'sans-serif'],
      inter: ['Inter', 'sans-serif']

   },
   varient: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
   }
  },
  plugins:[
  
]
}