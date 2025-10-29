/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      sans: ['var(--font-space-grotesk)'],
      geist: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    },
  },
  plugins: [],
}
