// import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-2': 'linear-gradient(270deg, #f55925 0%, #D75986 100%)',
      },
      gridTemplateColumns: {
        // Coffee column grid
        '2CoffeeLg': '1fr 380px',
        '2CoffeeMd': '1fr 330px',

        // Mint colum grid
        '2mint': '420px 1fr',
      },
      colors: {
        'boat-footer-dark-gray': '#141519',
        'boat-footer-light-gray': '#8a919e',
        'boat-color-gray-900': '#191918',
        'boat-color-blue-40': '#1354e1',
        'boat-color-green-40': '#0b8552',
        'boat-color-palette-backgroundalternate': '#141519',
        'boat-color-palette-foreground': '#fff',
        'boat-color-palette-foregroundmuted': '#8a919e;',
        'boat-color-palette-line': '#8a919e33',
        'boat-color-pink-50': '#d058c1',
        'boat-color-purple-60': '#b388f5',
        'boat-color-yellow-60': '#e9b300',
        'boat-color-yellow-70': '#FFD200',
        'boat-color-orange': '#f55925',
        'boat-gold': '#7b602f',
        primary: '#53E88B',
        'primary-hover': '#80F5AC',
        'primary-active': '#19CE5E',
        'primary-disabled': '#53E88B80',
        'primary-subtle': '#EFFEFA',
        'primary-strong': '#0F863D',
        secondary: '#FEAD1D',
        'secondary-hover': '#FEC64B',
        'secondary-active': '#F88B08',
        'secondary-disabled': '#FEAD1D80',
        'secondary-subtle': '#FFF9EB',
        'secondary-strong': '#B64407',
        tertiary: '#15BE77',
        'tertiary-hover': '#38CF8B',
        'tertiary-active': '#08935B',
        'tertiary-disabled': '#15BE7780',
        'tertiary-subtle': '#D2F9E2',
        'tertiary-strong': '#085D3E',
        success: '#17D071',
        'success-hover': '#40E891',
        'success-active': '#0CAD5A',
        'success-disabled': '#17D07180',
        'success-subtle': '#D2F9E2',
        information: '#3268FF',
        'information-hover': '#5B91FF',
        'information-active': '#1743F9',
        'information-disabled': '#3268FF80',
        warning: '#FF8E10',
        'warning-hover': '#FFA938',
        'warning-active': '#F67100',
        'warning-disabled': '#FF8E1080',
        danger: '#FA3116',
        'danger-hover': '#FF7C6A',
        'danger-active': '#E8321A',
        'danger-disabled': '#FA311680',
        text: {
          title: '#3D3D3D',
          body: '#656565',
          'body-subtle': '#989898',
          caption: '#BDBDBD',
        },
        background: {
          1: '#FFFFFF',
          2: '#EFEFEF',
          3: '#DCDCDC',
        },
        stroke: {
          1: '#FFFFFF',
          2: '#EFEFEF',
          3: '#DCDCDC',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};

export default config;
