/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36aaf5',
          500: '#0c8ee7',
          600: '#006fc4',
          700: '#0059a0',
          800: '#064b84',
          900: '#0a406e',
          950: '#07294a',
        },
        secondary: {
          50: '#f5f3ff',
          100: '#ede8ff',
          200: '#dcd5ff',
          300: '#c3b2ff',
          400: '#a683ff',
          500: '#8b55ff',
          600: '#7c33f5',
          700: '#6b21dd',
          800: '#581cb3',
          900: '#491a91',
          950: '#2e0e69',
        },
        dark: {
          100: '#d5d5d5',
          200: '#aaaaaa',
          300: '#808080',
          400: '#555555',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#080808',
          950: '#030303',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'text-slide': 'text-slide 12s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 16%': { transform: 'translateY(0%)' },
          '20%, 36%': { transform: 'translateY(-16.66%)' },
          '40%, 56%': { transform: 'translateY(-33.33%)' },
          '60%, 76%': { transform: 'translateY(-50%)' },
          '80%, 96%': { transform: 'translateY(-66.66%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};