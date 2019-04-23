import { Theme } from './ThemeInterface'
import { StyledSystemProps } from './StyledSystemProps'

const theme: Theme = {
  fontSizes: [14, 16, 24, 32, 48, 64, 96, 128],
  space: [0, 5, 10, 15, 30, 60, 120],
  fontFamily: 'Helvetica Neue',
  colors: {
    dark: '#31303A',
    accent: '#5AC1F2',
    primary: '#5AC1F2',
    neutral: '#C9BDBC',
    transparentBlack: 'rgba(0,0,0,0.4)',
    transparentWhite: 'rgba(255,255,255,0.4)'
  },
  baseRadius: 4,
  baseBoxShadow: 'box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)',
  baseTransition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
}

export { theme }
