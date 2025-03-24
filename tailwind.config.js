/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta-sans)'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      colors: {
        primary: {
          DEFAULT: '#7BAAF4', // Base color
          50: '#ECF2FD', // Lightest pastel
          100: '#D9E6FC', // Lighter pastel
          200: '#C5DAFC', // Light pastel (calculated)
          300: '#B1CEF9', // Light (calculated)
          400: '#9DC1F7', // Medium-light (calculated)
          500: '#7BAAF4', // Base color
          600: '#356BC0', // Dark mid-tone
          700: '#2A5699', // Darker (calculated)
          800: '#1A3560', // Darker deep
          900: '#142848', // Darkest deep
          950: '#0E1C31', // Even darker (calculated)
        },
        secondary: {
          DEFAULT: '#334155', // Dark slate (700)
          50: '#f8fafc', // Lightest slate
          100: '#f1f5f9', // Very light slate
          200: '#e2e8f0', // Light slate
          300: '#cbd5e1', // Medium-light slate
          400: '#94a3b8', // Medium slate
          500: '#64748b', // Medium-dark slate
          600: '#475569', // Dark slate
          700: '#334155', // Our main dark slate
          800: '#1e293b', // Very dark slate
          900: '#0f172a', // Almost black slate
        },
        neutral: {
          DEFAULT: '#6b7280', // Gray (500)
          50: '#f9fafb', // Lightest gray
          100: '#f3f4f6', // Very light gray
          200: '#e5e7eb', // Light gray
          300: '#d1d5db', // Medium-light gray
          400: '#9ca3af', // Medium gray
          500: '#6b7280', // Our main gray
          600: '#4b5563', // Dark gray
          700: '#374151', // Darker gray
          800: '#1f2937', // Very dark gray
          900: '#111827', // Almost black gray
        },
        // Simplified functional colors
        success: '#16a34a',
        warning: '#ca8a04',
        error: '#dc2626',
        info: '#7BAAF4', // Updated to match our base color
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
