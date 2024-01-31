import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },
    extend: {
      backgroundImage: {
        'auth-pattern': "url('https://cms-tabii-public-image.tabii.com/int/w1500/q99/common-bg.jpg')",
      },
      fontSize: {
        sm: 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        base: 'base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        lg: 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
        xl: 'clamp(1.56rem, 0.88vw + 1.3rem, 1.95rem)',
        'text-2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
        'text-3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
        'text-4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
        'text-5xl': 'clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)',
        'text-6xl': 'clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
export default config
