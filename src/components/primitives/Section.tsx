import * as React from 'react'
import styled from 'styled-components'
import { StyledSystemProps } from '../theme/StyledSystemProps'
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

const StyledSection = styled.section`
  ${flex};
  ${order};
  ${color};
  ${width};
  ${space};
  ${zIndex};
  ${height};
  ${maxWidth};
  ${fontSize};
  ${position};
  ${alignSelf};
  ${alignItems};
  ${flexDirection};
  ${justifyContent};
  display: flex;
  position: relative;
  box-sizing: border-box;
`

const Section: React.FC<StyledSystemProps> = ({ children, ...rest }) => (
  <StyledSection {...rest}>{children}</StyledSection>
)

export default Section

Section.defaultProps = {
  maxWidth: '100%'
}
