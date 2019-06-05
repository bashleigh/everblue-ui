import styled from 'styled-components'
import { color, fontFamily, fontSize, fontWeight, space, textAlign } from 'styled-system'
import { ThemeInterface } from '../theme/ThemeInterface'
import { StyledSystemProps } from '../theme/StyledSystemProps'

const H5 = styled.h5<StyledSystemProps>`
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

export default H5

H5.defaultProps = {
  fontSize: 1,
  m: 0
}
