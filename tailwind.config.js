/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'blue-primary': '#007AFF',
        'purple-primary': '#5856D6',
      },
      animation: {
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f5f5f7 0%, #ffffff 50%, #f5f5f7 100%)',
        'text-gradient': 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(0, 122, 255, 0.05) 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}
