/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',     // Cyber Blue
        secondary: '#1e293b',   // Dark Slate
        accent: '#22d3ee',      // Electric Cyan
        light: '#f1f5f9',       // Light text
        muted: '#94a3b8',       // Muted
        background: '#020617',  // Very Dark background
      },
    },
  },
  plugins: [],
}

