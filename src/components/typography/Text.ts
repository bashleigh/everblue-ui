import styled from 'styled-components'
import { space, color, textAlign, fontSize, fontWeight, width } from 'styled-system'
import { StyledSystemProps } from '../../themes'
import { ThemeInterface } from '../../themes/'

type Props = StyledSystemProps & {
  pointer?: boolean
}

const Span = styled.span<Props>`
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

export default Span

Span.defaultProps = {
  fontSize: 1
}
