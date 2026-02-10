import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a', // Slate 900
          light: '#1e293b',
          dark: '#020617',
        },
        accent: {
          DEFAULT: '#2563eb', // Blue 600
          hover: '#1d4ed8',
        },
        gold: {
          DEFAULT: '#fbbf24', // Amber 400
          dark: '#d97706',
        }
      },
    },
  },
  plugins: [],
}
export default config
