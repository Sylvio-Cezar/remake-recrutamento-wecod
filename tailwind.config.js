const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'green-primary': '#1ba558',
      'orange-primary': '#f36f21',
      'black-primary': '#010000',
      'blue-primary': '#38a6dc',
      'red-primary': '#B6312D',
      'brown-primary': '#321511',
      'green-secondary': '#15D071',
      'orange-secondary': '#de590a',
      'blue-secondary': '#17109d',
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      yellow: colors.amber,
      amber: {
        '50': '#fff8e1',
        '100': '#ffecb3',
        '200': '#ffe082',
        '300': '#ffd54f',
        '400': '#ffca28',
        '500': '#ffc107',
        '600': '#ffb300',
        '700': '#ffa000',
        '800': '#ff8f00',
        '900': '#ff6f00',
        '950': '#451a03',
      },
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
    extend: {
      height: {
        '92vh': '92vh',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
