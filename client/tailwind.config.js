/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        dominant: '#219ebc', // Aero Blue
        complementary: 'hsl(240, 100%, 90%)', // Lavender Blue
        accent: 'hsl(0, 0%, 0%)', // Black
        menu: '#F9FAFB',
        yellowOrange: '#ffae43',
        spanColor: '#313bac',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
