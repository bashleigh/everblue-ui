import styled from 'styled-components'
import { space, color, textAlign, fontSize, fontWeight, width } from 'styled-system'
import { ThemeInterface } from '../theme/ThemeInterface'
import { StyledSystemProps } from '../theme/StyledSystemProps'

export type ParagraphProps = StyledSystemProps & {
  pointer?: boolean
}

const P = styled.p<ParagraphProps>`
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
  fontSize: 0
}
