export enum COLORS {
  PURPLEPINK = '#C13C99',
  PINK = '#F11A7B',
  PINKSHADOW = '#fbb7d5',
  DARK = '#131d23',
  GREY_LIGHT = '#f8f8f6',
  GREY = '#dbdbd0',
  GREY_DARK = '#6e6e68',
}

export enum SIZES {
  MAX_WIDTH = '1290px',
  SIDEMENU_WIDTH = '300px',
}

const theme = {
  colors: {
    black: '#000e1a',
    white: '#FAF8F6',
    blue: '#007ce0',
    pink: COLORS.PINK,
    dark: COLORS.DARK,
    pinkLight: COLORS.PINKSHADOW,
    grey_light: COLORS.GREY_LIGHT,
    grey_dark: COLORS.GREY_DARK,
    grey: COLORS.GREY,
  },
  space: [0, 8, 16, 24, 32, 64, 128, 256, 512],
};

export default theme;
