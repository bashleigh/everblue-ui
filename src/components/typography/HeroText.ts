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

const HeroText = styled.h1<StyledSystemProps>`
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

export default HeroText

HeroText.defaultProps = {
  fontSize: 6,
  m: 0
}
