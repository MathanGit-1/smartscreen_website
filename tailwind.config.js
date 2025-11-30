/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#7C3AED',      // Main purple
          primaryLight: '#9F67FF', // Lighter purple
          accent: '#EC4899',       // Pink accent
          neon: '#EC4899',         // Neon accent
          dark: '#1B1036',         // Deep purple navy (for text)
          light: '#F7F5FF',        // Soft lavender background
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(124,58,237,0.20), transparent 55%), radial-gradient(circle at bottom right, rgba(236,72,153,0.18), transparent 55%)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 0.45, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.05)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 8s ease-in-out infinite',
        sheen: 'sheen 1.8s linear infinite',
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        lg: '1024px',
        xl: '1152px',
        '2xl': '1280px',
      },
    },
  },
  plugins: [],
};
