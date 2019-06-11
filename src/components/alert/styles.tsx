import { X } from 'react-feather'
import { theme } from '../theme'
import { animated } from 'react-spring'
import styled, { css } from 'styled-components'
import { StyledSystemProps } from '../theme/StyledSystemProps'
import { color, space, justifyContent, alignItems } from 'styled-system'

type AlertPositionProp = {
  alertPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export const TextCont = styled.div`
  display: flex;
  max-width: 350px;
`

export const StyledAlert = styled(animated.div)<StyledSystemProps & AlertPositionProp>`
  ${color};
  ${space};
  ${alignItems};
  ${justifyContent};
  width: auto;
  display: flex;
  z-index: 1400;
  position: fixed;
  border-radius: ${theme.baseRadius};
  box-shadow: ${theme.baseBoxShadow};
  ${(props: AlertPositionProp) => {
    if (props.alertPosition === 'top-left') {
      return css`
        top: 20px;
        left: 20px;
      `
    }
    if (props.alertPosition === 'top-right') {
      return css`
        top: 20px;
        right: 20px;
      `
    }
    if (props.alertPosition === 'bottom-left') {
      return css`
        bottom: 20px;
        left: 20px;
      `
    }
    return css`
      bottom: 20px;
      right: 20px;
    `
  }}
`

export const CloseIcon = styled(X)<any>`
  ${color};
  ${space};
  &:hover {
    cursor: pointer;
  }
`
