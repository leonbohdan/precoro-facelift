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
      'primary': 'var(--custom-blue-color)',
      'primary2': 'var(--custom-blue2-color)',
      'success': 'var(--custom-green-color)',
      'c-black': 'var(--custom-black-color)',
      'c-gray': 'var(--custom-gray-color)',
      'bg-blue': 'var(--custom-blue-bg)',
      'bgh-blue': 'var(--custom-blue-bg-hover)',
      'bg-blue2': 'var(--custom-blue-bg2)',
      'bgh-blue2': 'var(--custom-blue-bg2-hover)',
      'bg-green': 'var(--custom-green-bg)',
      'bgh-green': 'var(--custom-green-bg-hover)',
    },

    extend: {},
  },
  plugins: [],
}
