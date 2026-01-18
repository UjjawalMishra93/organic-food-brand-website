/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F0', // Warm cream / light beige.
        yellow: {
          DEFAULT: '#F4CE47', // Soft organic yellow
          hover: '#F0C020',
        },
        brown: {
          dark: '#3A2618', // Headings
          muted: '#6B584C', // Body
          light: '#A08E82',
        },
        offwhite: '#FFFEFA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'organic': '0 10px 30px -10px rgba(58, 38, 24, 0.1)',
        'button': '0 4px 14px 0 rgba(244, 206, 71, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F4CE47 0%, #FAF7F0 100%)',
      }
    },
  },
  plugins: [],
}

