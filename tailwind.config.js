/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class', // Importante para activar el cambio con la clase .dark
  theme: {
    extend: {
      colors: {
        // Aquí definimos tus nombres semánticos
        background: 'var(--bg-main)',
        card: 'var(--bg-card)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        typography: {
          title: 'var(--text-title)',
          body: 'var(--text-body)',
          muted: 'var(--text-muted)',
        }
      }
    },
  },
  plugins: [],
};
