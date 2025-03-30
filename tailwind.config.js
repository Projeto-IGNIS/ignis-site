export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f9f9f9',
          text: '#4a4a4a', // Ajustado para um cinza mais escuro
          primary: '#1d4ed8',
          secondary: '#9333ea',
        },
      },
    },
  },
};