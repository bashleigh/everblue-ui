import styled from 'styled-components'
import { space, color, textAlign, fontSize, fontWeight, width } from 'styled-system'
import { ThemeInterface } from '../../themes/ThemeInterface'
import { StyledSystemProps } from '../../themes/StyledSystemProps'

type Props = StyledSystemProps & {
  pointer?: boolean
}

const P = styled.p<Props>`
  ${space};
  ${color};
  ${width};
  ${fontSize};
  ${textAlign};
  ${fontWeight};
  text-transform: ${(props: ThemeInterface) => props.theme.textTransform || 'none'};
  &:hover {
    cursor: ${(props: ThemeInterface) => (props.theme.pointer ? 'pointer' : 'default')};
  }
`

export default P

P.defaultProps = {
  fontSize: 1
}
