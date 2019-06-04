import * as React from 'react'
import styled from 'styled-components'
import { StyledSystemProps } from '../theme/StyledSystemProps'
import {
  flex,
  order,
  color,
  space,
  width,
  zIndex,
  height,
  display,
  maxWidth,
  minWidth,
  position,
  fontSize,
  flexWrap,
  boxShadow,
  alignSelf,
  minHeight,
  alignItems,
  borderRadius,
  flexDirection,
  justifyContent
} from 'styled-system'

export type BoxProps = StyledSystemProps & {
  onClick?: () => void
}

const StyledBox = styled.div<StyledSystemProps>`
  ${flex};
  ${space};
  ${color};
  ${order};
  ${width};
  ${zIndex};
  ${height};
  ${display};
  ${fontSize};
  ${maxWidth};
  ${minWidth};
  ${position};
  ${flexWrap};
  ${minHeight};
  ${alignSelf};
  ${boxShadow};
  ${alignItems};
  ${borderRadius};
  ${flexDirection};
  ${justifyContent};
  box-sizing: ${(props: any) => props.boxSizing || 'border-box'};
`

const Box: React.FC<BoxProps> = ({ children, ...rest }) => (
  <StyledBox {...rest}>{children}</StyledBox>
)

export default Box

Box.defaultProps = {
  display: 'flex',
  maxWidth: '100%',
  position: 'relative',
  flexDirection: 'column'
}
