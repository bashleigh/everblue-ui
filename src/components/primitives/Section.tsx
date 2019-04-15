import styled from 'styled-components'
import {
  flex,
  order,
  space,
  color,
  width,
  height,
  position,
  maxWidth,
  fontSize,
  alignSelf,
  alignItems,
  flexDirection,
  justifyContent,
  zIndex
} from 'styled-system'

export default styled.section`
  ${flex};
  ${space};
  ${order};
  ${color};
  ${width};
  ${zIndex};
  ${height};
  ${position};
  ${fontSize};
  ${alignSelf};
  ${alignItems};
  ${flexDirection};
  ${justifyContent};
  display: flex;
  position: relative;
  ${(props) => (props.maxWidth ? maxWidth : `max-width: 100%`)};
`
