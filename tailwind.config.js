
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'md': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        'brown': '#542D25',
      },
      fontFamily: {
        sans: ['Darker Grotesque', 'sans-serif'], // Substitui a fonte padrão
        darker: ['Darker Grotesque', 'sans-serif'], // Nome customizado
      },
      backgroundImage: {
        "bg-lizmann":  "url('/bg-lizmann.png');",
        "logo-lizmann": "url('src/assets/logo-lizmann.png')",
          
      },
    },
    plugins: [],
  },
};
