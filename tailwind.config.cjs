/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main': ['Poppins', 'sans-serif'],
      },
      colors : {
        'clr-cyan' : 'hsl(180, 66%, 49%)',
        'clr-Dark-Violet' : 'hsl(257, 27%, 26%)',
        'clr-Red' : 'hsl(0, 87%, 67%)',
        'clr-Gray' : 'hsl(0, 0%, 75%)',
        'clr-Grayish-Violet' : 'hsl(257, 7%, 63%)',
        'clr-Very-Dark-Blue' : 'hsl(255, 11%, 22%)',
        'clr-Very-Dark-Violet' : 'hsl(260, 8%, 14%)',
        'clr-main-bg' : '#f0f1f6',
      },
      height: {
        'thin-line' : '.1rem'
      },
      width: {
        'header-image' : '132%'
      },
      maxWidth : {
        'char' : '40ch',
        'char-lg' : '45ch',
        'char-xl' : '60ch',
      },
      margin: {
        '30' : '32%'
      },
      fontSize : {
        'head-one' : ['40px', '48px'],
        'head-two' : ['28px', '32px'],
      },
      backgroundImage : {
        'gradient-form' : 'linear-gradient(180deg, white 50%, rgb(240 241 246) 50%)'
      },
      gridTemplateColumns: {
        form : '1fr auto'
      },
      lineHeight : {
        'very-tight' : '1.15'
      },
      keyframes: {
        scaleY: {
          '0%': { transform: 'scale(0)'},
          '100%': { transform: 'scale(1)'},
        },
        scaleRev : {
          '0%': { transform: 'scale(1)'},
          '100%': { transform: 'scale(0)'},  
        }
      },
      animation: {
        'scale-y': 'scaleY 0.5s ease-in-out',
        'scale-rev': 'scaleRev 5s ease-in-out'
      }
    },
  },
  plugins: [],
}
