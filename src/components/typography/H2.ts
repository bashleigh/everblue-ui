import styled from 'styled-components'
import {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  space,
  textAlign,
  lineHeight
} from 'styled-system'
import { ThemeInterface } from '../theme/ThemeInterface'
import { StyledSystemProps } from '../theme/StyledSystemProps'

const H2 = styled.h2<StyledSystemProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  ${fontFamily};
  ${fontWeight};
  ${lineHeight};
  text-transform: ${(props: ThemeInterface) => props.theme.textTransform || 'none'};
  &:hover {
    cursor: ${(props: ThemeInterface) => (props.theme.pointer ? 'pointer' : 'default')};
  }
`

export default H2

H2.defaultProps = {
  fontSize: 4,
  m: 0
}
