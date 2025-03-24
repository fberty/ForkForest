/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Earth-toned greens
        'earth-green': {
          50: '#f2f8f0',
          100: '#e4eede',
          200: '#c4dbc0',
          300: '#a3c79f',
          400: '#7aab72',
          500: '#5c9154',
          600: '#4a7744',
          700: '#3c5f38',
          800: '#324c2f',
          900: '#2a3f28',
        },
        // Browns
        'earth-brown': {
          50: '#f9f6f3',
          100: '#f0e9e2',
          200: '#e1d1c1',
          300: '#d0b59d',
          400: '#ba9470',
          500: '#a97c54',
          600: '#8d6849',
          700: '#735139',
          800: '#5e4330',
          900: '#4d372a',
        },
        // Soft blues
        'soft-blue': {
          50: '#f0f7fa',
          100: '#e0eef5',
          200: '#c2dfeb',
          300: '#9cc9db',
          400: '#70acc6',
          500: '#4f8faf',
          600: '#407492',
          700: '#375e78',
          800: '#304e64',
          900: '#2b4354',
        },
      },
    },
  },
  plugins: [],
};
