/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./pages/**/.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins','sans-serif']
      },
      colors: {
        'body_color': '#0A5783',
      }
      
  },
  plugins: [],
}
}
