const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      amber: colors.amber,
      blue: colors.blue,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      pink: colors.pink,
      teal: colors.teal,
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
    },
    extend: {
      colors: {
        'royal-blue': {
          100: '#F0F1FC',
          200: '#D9DCF9',
          300: '#C2C7F5',
          400: '#959CED',
          500: '#6772E5',
          600: '#5D67CE',
          700: '#3E4489',
          800: '#2E3367',
          900: '#1F2245',
        },
        primary: '#2663ff',
        secondary: '#13b497',
        start: {
          1: '#dadee3',
          2: '#3f464e',
        },
        to: {
          1: '#dbdee4',
          2: '#2d3339',
        },
        background: {
          light: '#ffffff',
          dark: '#111827',
        },
        component: {
          light: '#f9fafb',
          dark: '#1F2937',
        },
        button: {
          light: '#ffffff',
          dark: '#111827',
        },
        text: {
          light: '#6b7280',
          dark: '#d1d5db',
          title: {
            light: '#111827',
            dark: '#ffffff',
          },
          shadow: {
            light: '#00000060',
            dark: '#ffffff40',
          },
        },
        icon: {
          light: '#9ca3af',
          dark: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': '0.6rem',
      },
      width: {
        'comment-bar': '500px',
      },
      minWidth: {
        24: '6rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      maxHeight: {
        160: '40rem',
      },
      margin: {
        0.5: '0.125rem',
      },
      gridTemplateColumns: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
