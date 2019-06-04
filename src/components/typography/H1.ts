import styled from 'styled-components'
import { color, fontFamily, fontSize, fontWeight, space, textAlign } from 'styled-system'
import { ThemeInterface } from '../theme/ThemeInterface'
import { StyledSystemProps } from '../theme/StyledSystemProps'

const H1 = styled.h1<StyledSystemProps>`
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

export default H1

H1.defaultProps = {
  fontSize: 5,
  m: 0
}
