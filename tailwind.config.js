const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', ...fontFamily.sans],
        poppins: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
      keyframes: {
        'move-down': {
          '0%': { transform: 'translateY(-5rem)' },
          '100%': { transform: 'translateY(0rem)' },
        },
      },
      animation: {
        'move-down-anim': 'move-down 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
