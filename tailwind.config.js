/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Main orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        secondary: {
          50: '#fefaf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b', // Golden orange
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        accent: {
          50: '#fff8f1',
          100: '#feecdc',
          200: '#fcd9bd',
          300: '#fdba74',
          400: '#ff8a4c',
          500: '#ff5722', // Vibrant orange
          600: '#f4511e',
          700: '#e64100',
          800: '#d84315',
          900: '#bf360c',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'orange-gradient': 'linear-gradient(135deg, #ff8a4c 0%, #ff5722 50%, #f97316 100%)',
        'morning-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #f97316 50%, #ea580c 75%, #c2410c 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 3s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'shadow-glow': 'shadow-glow 2s ease-in-out infinite alternate',
        'morph': 'morph 20s ease-in-out infinite',
        'morph-reverse': 'morph-reverse 25s ease-in-out infinite',
        'rotate': 'rotate 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0px) scale(1)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': { 
            transform: 'translateY(-10px) scale(1.05)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'shadow-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(251, 146, 60, 0.3)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(251, 146, 60, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        morph: {
          '0%, 100%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': {
            borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%',
            transform: 'rotate(90deg) scale(1.1)'
          },
          '50%': {
            borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%',
            transform: 'rotate(180deg) scale(0.9)'
          },
          '75%': {
            borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%',
            transform: 'rotate(270deg) scale(1.05)'
          }
        },
        'morph-reverse': {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            transform: 'rotate(0deg) scale(1)'
          },
          '33%': {
            borderRadius: '70% 30% 46% 54% / 30% 29% 71% 70%',
            transform: 'rotate(-120deg) scale(1.2)'
          },
          '66%': {
            borderRadius: '100% 60% 60% 100% / 100% 100% 60% 60%',
            transform: 'rotate(-240deg) scale(0.8)'
          }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
      boxShadow: {
        '4xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 20px -6px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}