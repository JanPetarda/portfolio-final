/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  screens: {
    '2xs': { min: '300px' },
    xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
    sm: { min: '360', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
    md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
    lg: { min: '1200px' }, // Desktop smallest.
    xl: { min: '1259px' }, // Desktop wide.
    '2xl': { min: '1359px' } // Desktop widescreen.
  },
  
  darkMode: "class",
  plugins: [], 
  
}

