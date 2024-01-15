/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing: {
      1: '0em',
      2: '0.025em',
      3: '0.05em',
      4: '0.1em',
      5: '0.15em',
    },
    extend: {
      colors: {
        primaryDark: '#000000',
        customDarkGrey: '#7f7f7f',
        littleGrey: '#e8e5e480',
      },
      keyframes: {
        slideTopRight: {
          '0%': { top: '60px', right: '60px' },
          '50%': { top: '16px', right: '16px' },
        },
      },
      animation: {
        slideTopRight: 'slideTopRight 0.7s ease-in-out',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
