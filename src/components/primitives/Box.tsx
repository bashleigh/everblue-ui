import styled from 'styled-components'
import { StyledSystemProps } from '../../themes/StyledSystemProps'
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

const Box = styled.div<StyledSystemProps>`
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

export default Box

Box.defaultProps = {
  display: 'flex',
  maxWidth: '100%',
  position: 'relative',
  flexDirection: 'column'
}
