import styled from 'styled-components'
import { color, fontFamily, fontSize, fontWeight, space, textAlign } from 'styled-system'
import { ThemeInterface } from '../../themes/ThemeInterface'
import { StyledSystemProps } from '../../themes/StyledSystemProps'

const H3 = styled.h3<StyledSystemProps>`
  ${space};
  ${color};
  ${fontSize};
  ${textAlign};
  ${fontFamily};
  ${fontWeight};
  text-transform: ${(props: ThemeInterface) => props.theme.textTransform || 'none'};
  &:hover {
    cursor: ${(props: ThemeInterface) => (props.theme.pointer ? 'pointer' : 'default')};
  }
`

export default H3

H3.defaultProps = {
  fontSize: 3,
  m: 0
}