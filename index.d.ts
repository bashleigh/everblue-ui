import { StyledSystemProps } from './src/components/theme/StyledSystemProps'
import { TextTransformProperty } from 'csstype'

export type ButtonProps = StyledSystemProps & {
  text?: string
  color?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  textTransform?: TextTransformProperty
}
