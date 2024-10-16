/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        wave: {
          '2%': { transform: 'translateX(1)' },
          '25%': { transform: 'translateX(-25%)' },
          '50%': { transform: 'translateX(-50%)' },
          '75%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(1)' },
        },
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        wave: 'wave 10s -3s linear infinite',
        waveAlt: 'wave 18s linear reverse infinite',
        waveAlt2: 'wave 20s -1s reverse infinite',
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
      colors: {
        gradientStart: 'rgba(101,0,94,1)',
        gradientMid: 'rgba(60,132,206,1)',
        gradientMid2: 'rgba(48,238,226,1)',
        gradientEnd: 'rgba(255,25,25,1)',
      },
    },
  },
  plugins: [],
};
