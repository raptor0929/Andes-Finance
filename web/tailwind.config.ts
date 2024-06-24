import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
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
        primary: {
          normal: '#53E88B',
          hover: '#80F5AC',
          active: '#19CE5E',
          disabled: '#53E88B80',
          subtle: '#EFFEFA',
          strong: '#0F863D',
        },
        secondary: {
          normal: '#FEAD1D',
          hover: '#FEC64B',
          active: '#F88B08',
          disabled: '#FEAD1D80',
          subtle: '#FFF9EB',
          strong: '#B64407',
        },
        tertiary: {
          normal: '#15BE77',
          hover: '#38CF8B',
          active: '#08935B',
          disabled: '#15BE7780',
          subtle: '#D2F9E2',
          strong: '#085D3E',
        },
        // Functional colors
        success: {
          normal: '#17D071',
          hover: '#40E891',
          active: '#0CAD5A',
          disabled: '#17D07180',
          subtle: '#D2F9E2',
        },
        information: {
          normal: '#3268FF',
          hover: '#5B91FF',
          active: '#1743F9',
          disabled: '#3268FF80',
        },
        warning: {
          normal: '#FF8E10',
          hover: '#FFA938',
          active: '#F67100',
          disabled: '#FF8E1080',
        },
        danger: {
          normal: '#FA3116',
          hover: '#FF7C6A',
          active: '#E8321A',
          disabled: '#FA311680',
        },
        // Other colors
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
  plugins: [],
};

export default config;
