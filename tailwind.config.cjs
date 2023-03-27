const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Literata', 'serif'],
    },

    colors: {
      current: 'currentColor',
      white: colors.white,
      'primary': 'var(--custom-blue-color)',
      'primary-hover': 'var(--custom-blue-color-hover)',
      'primary2': 'var(--custom-blue2-color)',
      'primary3': 'var(--custom-blue3-color)',
      'success': 'var(--custom-green-color)',
      'c-black': 'var(--custom-black-color)',
      'c-gray': 'var(--custom-gray-color)',
      'c-gray2': 'var(--custom-gray2-color)',
      'c-gray3': 'var(--custom-gray3-color)',
      'c-gray4': 'var(--custom-gray4-color)',
      'c-gray5': 'var(--custom-gray5-color)',
      'bg-blue': 'var(--custom-blue-bg)',
      'bgh-blue': 'var(--custom-blue-bg-hover)',
      'bg-blue2': 'var(--custom-blue-bg2)',
      'bgh-blue2': 'var(--custom-blue-bg2-hover)',
      'bg-green': 'var(--custom-green-bg)',
      'bgh-green': 'var(--custom-green-bg-hover)',
    },

    extend: {
      boxShadow: {
        'c-box': '0 4px 4px rgba(0, 4, 98, 0.04)',
        'select-box': '0 4px 16px rgba(0, 0, 0, 0.16)',
      },
    },
  },
  plugins: [],
}
