import { TextTransformProperty } from 'csstype'

export interface Theme {
  fontFamily: string
  fontSizes: number[]
  space: number[]
  colors: {
    primary: string
    accent: string
    neutral: string
    secondary: string
    transparent: string
    neutralLight: string
    transparentBlack: string
    transparentWhite: string
  }
  baseRadius?: number
  baseBoxShadow?: string
  textTransform?: TextTransformProperty
  pointer?: boolean
}

export interface ThemeInterface {
  theme: Theme
}
