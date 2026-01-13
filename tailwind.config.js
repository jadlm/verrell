/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'gold': {
          50: '#fffef7',
          100: '#fffceb',
          200: '#fff8d1',
          300: '#fff0a8',
          400: '#ffe475',
          500: '#ffd700',
          600: '#e6c200',
          700: '#cc9900',
          800: '#b38600',
          900: '#997300',
        },
        'luxe': {
          'gold': '#D4AF37',
          'gold-light': '#F5E6D3',
          'gold-dark': '#B8941F',
          'gray-soft': '#F5F5F5',
          'gray-dark': '#2C2C2C',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

