import styled from 'styled-components'
import {
  BorderProps,
  BorderWidthProps,
  BorderColorProps,
  BoxShadowProps,
  boxShadow
} from 'styled-system'
import {
  WidthProps,
  HeightProps,
  BorderRadiusProps,
  width,
  height,
  borderRadius,
  border,
  borderColor,
  borderWidth
} from 'styled-system'
import {
  SpaceProps,
  ColorProps,
  TextAlignProps,
  space,
  color,
  textAlign,
  fontSize,
  FontSizeProps
} from 'styled-system'
import { theme } from '../../theme'

export type LabelProps = SpaceProps & ColorProps & TextAlignProps & FontSizeProps

export const Label = styled.label<LabelProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
`

Label.defaultProps = {
  mt: 1,
  mb: 2,
  fontSize: 1,
  textAlign: 'left'
}

export type InputProps = SpaceProps &
  ColorProps &
  TextAlignProps &
  FontSizeProps &
  WidthProps &
  HeightProps &
  BorderRadiusProps &
  BorderWidthProps &
  BorderColorProps &
  BoxShadowProps

export const Input = styled.input<InputProps>`
  ${space};
  ${color};
  ${width};
  ${height};
  ${fontSize};
  ${boxShadow};
  ${borderWidth};
  ${borderColor};
  ${borderRadius};
  border-style: none;
  box-sizing: border-box;
`

Input.defaultProps = {
  px: 2,
  width: '100%',
  height: '40px',
  borderWidth: 1,
  borderRadius: 4,
  borderColor: 'intent.success',
  bg: theme.colors.background.tint1,
  boxShadow: 'inset 0 0 0 1px rgba(67, 90, 111, 0.1), inset 0 1px 2px rgba(67, 90, 111, 0.14)'
}
