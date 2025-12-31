/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode : "class",
  theme: {
    extend: {
      colors:{
        // Legacy colors (kept for backward compatibility)
        textsecondary : "#62748E",
        "textsecondary-dark": "#CAD5E2",
        cardtext: "#45556C",
        
        // Primary Color (Purple Scale)
        primary: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FF',
          300: '#C4B4FF',
          400: '#A684FF',
          500: '#8E51FF',
          600: '#7F22FE',
          700: '#7008E7',
          800: '#5D0EC0',
          900: '#4D179A',
          950: '#2F0D68',
        },
        
        // Secondary Colors (Red / Coral)
        secondary: {
          300: '#FFA0A0',
          400: '#FF6868',
          500: '#F83B3B',
        },
        
        // Tertiary Colors (Pink / Magenta)
        tertiary: {
          500: '#F6339A',
          600: '#E61C7D',
        },
        
        // Success & Error Colors
        success: {
          600: '#009966',
        },
        error: {
          600: '#EC003F',
        },
        
        // Slate / Neutral Colors (Gray Scale)
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CAD5E2',
          400: '#90A1B9',
          500: '#62748E',
          600: '#45556C',
          700: '#314158',
          800: '#1D293D',
          900: '#0F172B',
          950: '#020618',
        },
        
        // White Opacity Tokens
        whiteOpacity: {
          0: '#FFFFFF',
          6: 'rgba(255, 255, 255, 0.06)',
          10: 'rgba(255, 255, 255, 0.10)',
          32: 'rgba(255, 255, 255, 0.32)',
        },
        
        // Dark / Black Opacity Tokens
        darkOpacity: {
          'black-6': 'rgba(0, 0, 0, 0.06)',
          'slate-32': '#1F2937',
          'slate-950': '#020618',
          'slate-900': '#0F172B',
        },
      },
      backgroundImage: {
        // Gradients
        'gradient-1': 'linear-gradient(to bottom right, #1D293D, #000000)',
        'gradient-2': 'linear-gradient(to right, #FF6868, #F6339A)',
        'gradient-3': 'linear-gradient(to bottom, #1D293D, #0F172B)',
        'gradient-4': 'linear-gradient(to bottom right, #F83B3B, #E61C7D)',
        'gradient-5': 'linear-gradient(to bottom right, #8E51FF, #7F22FE)',
        'gradient-6': 'linear-gradient(to bottom, #FFFFFF, #FFFFFF)',
        'gradient-7': 'radial-gradient(circle, #1D293D, #020618)',
        'gradient-hero': 'linear-gradient(to bottom right, #8E51FF, #7F22FE)',
        'gradient-accent': 'linear-gradient(to right, #FF6868, #F6339A)',
      },
      fontFamily: {
        'dm-sans': ['DM-Sans-Regular'],
        'dm-sans-medium': ['DM-Sans-Medium'],
        'dm-sans-semibold': ['DM-Sans-SemiBold'],
        'dm-sans-bold': ['DM-Sans-Bold'],
        'dm-sans-light': ['DM-Sans-Light'],
        'dm-sans-italic': ['DM-Sans-Italic'],
      },
      fontSize: {
        // Headings
        'h1': ['32px', { lineHeight: '40px', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'h4': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        // Body
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        // Other
        'label': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        'caption': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'footnote': ['10px', { lineHeight: '14px', fontWeight: '400' }],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      letterSpacing: {
        wider: '0.05em',
      },
    },
  },
  plugins: [],
}

