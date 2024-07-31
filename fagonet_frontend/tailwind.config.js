/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1368px',
      xxl: '1440px',
    },
    colors: {
      red: '#D81B1B',
      black: '#000913',
      blue: '#80CED7',
      boldBlue: '#215A74',
      darkBlue: '#003249',
      darkGreen: '#002A2A',
      darkGray: 'rgba(176, 176, 176, 0.6)',
      lightGray: 'rgba(176, 176, 176, 0.2)',
      gray: '#ACACAC',
      green: '#3CCF4E',
      white: '#F5F5F5',
      yellow: '#e2ff7e',
    },
    extend: {},
  },
  plugins: [],
};
