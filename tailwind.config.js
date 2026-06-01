export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy — primary brand
        navy: '#0B1F3A',
        // Bright sky blue — CTA accent (formerly "gold")
        gold: '#60A5FA',
        // Royal blue — secondary accent (formerly "coral")
        coral: '#2563EB',
        // Pale ice blue — background (formerly "cream")
        cream: '#EFF4FB',
        surface: '#FFFFFF',
        'text-dark': '#0B1F3A',
        'text-muted': '#475569',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}

