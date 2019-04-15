export { default as StyledSystemProps } from './StyledSystemProps'
export { default as ThemeInterface } from './ThemeInterface'

const theme = {
  fontSizes: [14, 16, 24, 32, 48, 64, 96, 128],
  space: [0, 5, 10, 15, 30, 60, 120],
  breakpoints: ['768px', '992px', '1200px'],
  fontFamily: 'Helvetica Neue',
  colors: {
    blue: '#3578EA',
    error: 'rgba(200, 0, 0, 0.8)',
    success: '#16a085',
    white: '#FFFFFF',
    offWhite: '#f9f9f9',
    grayExtraLight: '#EEF1F5',
    semiBlack: '#313131eb',
    grayLight: '#CED4DE',
    gray: '#7D899C',
    grayDark: '#2D3747',
    grayExtraDark: '#1D2330',
    dark: '#13161F',
    skyBlue: '#1FB6FF'
  }
}

export { theme }
