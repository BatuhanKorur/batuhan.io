/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['HelveticaNow', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.815rem', {
        lineHeight: '1.5em',
      }],
      sm: ['0.875rem', {
        lineHeight: '1.5em',
      }],
      base: ['0.935rem', {
        lineHeight: '1.5em',
      }],
      md: ['1.070rem', {
        lineHeight: '1.5em',
      }],
      lg: ['1.25rem', {
        lineHeight: '1.5em',
      }],
      xl: ['1.5rem', {
        lineHeight: '1.5em',
      }],
    },
    extend: {
      colors: {
        black: '#0A0A0A',
        light: '#F7FAFC',
        carbon: '#21242E',
      },
    },
  },
  plugins: [],
}
