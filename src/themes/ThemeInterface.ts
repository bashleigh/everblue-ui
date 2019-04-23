import { TextTransformProperty } from 'csstype'

export interface Theme {
  space: number[]
  fontFamily: string
  fontSizes: number[]
  colors: {
    primary?: string
    accent?: string
    dark?: string
    neutral?: string
    secondary?: string
    transparent?: string
    neutralLight?: string
    transparentBlack?: string
    transparentWhite?: string
  }
  pointer?: boolean
  baseRadius?: number
  baseBoxShadow?: string
  baseTransition?: string
  textTransform?: TextTransformProperty
  gridGutter?: any
}

export interface ThemeInterface {
  theme: Theme
}
