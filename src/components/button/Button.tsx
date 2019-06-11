import * as React from 'react'
import styled, { css } from 'styled-components'
import {
  space,
  color,
  width,
  height,
  border,
  display,
  fontSize,
  minWidth,
  boxShadow,
  alignItems,
  borderRadius,
  justifyContent
} from 'styled-system'
import { theme } from '../theme'
import { StyledSystemProps } from '../theme/StyledSystemProps'
import { TextTransformProperty } from 'csstype'
import { animated } from 'react-spring'
import { IconProps } from './IconButton'

export type ButtonProps = StyledSystemProps & {
  text?: string
  color?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  textTransform?: TextTransformProperty
}

const StyledButton = styled(animated.button)<StyledSystemProps>`
  ${space};
  ${color};
  ${width};
  ${border};
  ${height};
  ${display};
  ${minWidth};
  ${fontSize};
  ${boxShadow};
  ${alignItems};
  ${borderRadius};
  ${justifyContent};
  display: flex;
  outline: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  box-shadow: ${theme.baseBoxShadow};
  transition: ${theme.baseTransition};
  text-transform: ${(props: ButtonProps) => props.textTransform || 'uppercase'};
  font-weight: 600;
  ${(props: ButtonProps) => {
    if (props.size === 'small') {
      return css`
        height: 30px;
      `
    }
    if (props.size === 'medium') {
      return css`
        height: 40px;
      `
    }
    if (props.size === 'large') {
      return css`
        height: 50px;
      `
    }
  }}
  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
    transition: ${theme.baseTransition};
    box-shadow: 0 1px 4px rgba(50, 50, 93, 0.11), 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  &:disabled {
    opacity: 0.7;
  }
`

const Button: React.FC<ButtonProps> = ({ onClick, children, text, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children || text}
    </StyledButton>
  )
}

export default Button

Button.defaultProps = {
  bg: 'blue',
  fontSize: 0,
  size: 'medium',
  color: 'white',
  text: 'Button',
  minWidth: '150px',
  borderRadius: '4px',
  alignItems: 'center',
  onClick: () => false,
  justifyContent: 'center',
  textTransform: 'uppercase'
}
