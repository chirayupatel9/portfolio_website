/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: '#252323',
        cream: '#F5F1ED',
        accent: '#F98617',
        surface: {
          light: 'rgba(245, 241, 237, 0.95)',
          dark: 'rgba(37, 35, 35, 0.95)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'elevation-1': '0 1px 3px rgba(37, 35, 35, 0.12), 0 1px 2px rgba(37, 35, 35, 0.24)',
        'elevation-2': '0 3px 6px rgba(37, 35, 35, 0.15), 0 2px 4px rgba(37, 35, 35, 0.12)',
        'elevation-3': '0 10px 20px rgba(37, 35, 35, 0.15), 0 3px 6px rgba(37, 35, 35, 0.10)',
        'elevation-4': '0 14px 28px rgba(37, 35, 35, 0.25), 0 10px 10px rgba(37, 35, 35, 0.22)',
        'elevation-5': '0 19px 38px rgba(37, 35, 35, 0.30), 0 15px 12px rgba(37, 35, 35, 0.22)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
};