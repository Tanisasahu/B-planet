/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#c9c0b1',
        customGray: '#D9D9D9',
        customColorDark: '#CAC0B4',
        customColorbg: '#FFF9F0',
        inputColorbg: '#B48F8F',
      },
      fontSize: {
        '2.5xl': '27px',  
      },
      minHeight: {
        'custom': '550px',
      },
      height: {
        '75vh': '75vh',
      },
      userSelect: {
        'none': 'none',
      },
    },
  },
  plugins: [],
}

