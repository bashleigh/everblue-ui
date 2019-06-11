const theme = {
  // Minor Third scale - https://www.modularscale.com/?1.2&rem&1.2
  fontSizes: ['0.833rem', '1rem', '1.2rem', '1.44rem', '1.728rem', '2.074rem', '2.488rem'],
  space: [0, 5, 10, 20, 40, 80, 160],
  fontFamily: 'Helvetica Neue, sans-serif',
  colors: {
    border: {
      default: '#E4E7EB',
      muted: '#EDF0F2'
    },
    text: {
      muted: '#66788A',
      default: '#425A70',
      dark: '#234361'
    },
    intent: {
      success: '#47B881',
      danger: '#EC4C47',
      warning: '#D9822B'
    },
    background: {
      tint1: '#F9F9FB',
      tint2: '#F5F6F7'
    },
    opacity: {
      transparent: 'transparent',
      transparentBlack: '#00000004',
      transparentWhite: '#FFFFFF04'
    }
  },
  rounding: [0, 4, 8, 16, 32],
  baseTransition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  baseBoxShadow: 'box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)'
}

export { theme }
