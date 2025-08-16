/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zuba Broadband Color Palette - incorporated into existing system
        'zuba-orange': '#ff4d00',
        'zuba-orange-light': '#ff8000',
        'zuba-orange-dark': '#e64400',
        'zuba-blue': '#181825',
        'zuba-blue-light': '#2a2a3a',
      },
      backgroundImage: {
        'gradient-zuba': 'linear-gradient(135deg, #ff4d00 0%, #ff8000 100%)',
        'gradient-zuba-subtle': 'linear-gradient(135deg, rgba(255, 77, 0, 0.1) 0%, rgba(255, 128, 0, 0.1) 100%)',
      },
      boxShadow: {
        'zuba-glow': '0 0 20px rgba(255, 77, 0, 0.2)',
        'zuba-glow-hover': '0 0 30px rgba(255, 77, 0, 0.3)',
      },
    },
  },
  plugins: [],
} 