export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ignis: {
          primary: '#FF4500', // Laranja vibrante
          secondary: '#1E1E1E', // Preto
          accent: '#FFD700', // Dourado
          background: '#F5F5F5', // Cinza claro
          text: '#333333', // Cinza escuro
          darkText: '#F5F5F5', // Texto claro para fundo escuro
        },
      },
    },
  },
};