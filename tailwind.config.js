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
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Main blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        secondary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Indigo
          600: '#5856eb',
          700: '#4f46e5',
          800: '#4338ca',
          900: '#3730a3',
          950: '#312e81',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Sky blue
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-gradient': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
        'sky-gradient': 'linear-gradient(135deg, #38bdf8 0%, #0ea5e9 25%, #3b82f6 50%, #2563eb 75%, #1d4ed8 100%)',
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
        'morph-courses': 'morph-courses 25s ease-in-out infinite',
        'morph-hero': 'morph-hero 20s ease-in-out infinite',
        'rotate': 'rotate 60s linear infinite',
        'spin-slow': 'spin-slow 8s linear infinite',
        'spin-reverse': 'spin-reverse 6s linear infinite reverse',
        'grid-move': 'grid-move 20s linear infinite',
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
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            transform: 'scale(1)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(60px, 60px)' },
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
        'morph-courses': {
          '0%, 100%': {
            borderRadius: '40% 60% 60% 40% / 40% 40% 60% 60%',
            transform: 'rotate(0deg) scale(1)'
          },
          '20%': {
            borderRadius: '60% 40% 50% 50% / 50% 60% 40% 50%',
            transform: 'rotate(72deg) scale(1.1)'
          },
          '40%': {
            borderRadius: '50% 50% 40% 60% / 60% 50% 50% 40%',
            transform: 'rotate(144deg) scale(0.9)'
          },
          '60%': {
            borderRadius: '40% 60% 50% 50% / 50% 40% 60% 50%',
            transform: 'rotate(216deg) scale(1.05)'
          },
          '80%': {
            borderRadius: '50% 50% 60% 40% / 40% 50% 50% 60%',
            transform: 'rotate(288deg) scale(0.95)'
          }
        },
        'morph-hero': {
          '0%, 100%': {
            borderRadius: '40% 60% 50% 50% / 60% 40% 50% 60%',
            transform: 'rotate(0deg) scale(1)'
          },
          '25%': {
            borderRadius: '60% 40% 60% 40% / 40% 60% 40% 60%',
            transform: 'rotate(90deg) scale(1.1)'
          },
          '50%': {
            borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%',
            transform: 'rotate(180deg) scale(0.9)'
          },
          '75%': {
            borderRadius: '40% 60% 40% 60% / 60% 40% 60% 40%',
            transform: 'rotate(270deg) scale(1.05)'
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