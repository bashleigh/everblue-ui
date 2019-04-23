import * as React from 'react'
import styled, { css } from 'styled-components'
import {
  space,
  width,
  color,
  minWidth,
  boxShadow,
  borderRadius,
  display,
  border,
  justifyContent,
  alignItems,
  height
} from 'styled-system'
import { Text } from '../typography'
import { StyledSystemProps } from '../../themes/StyledSystemProps'
import { theme } from '../../themes'

export type ButtonProps = StyledSystemProps & {
  text?: string
  color?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
}

const StyledButton = styled.button`
  ${space};
  ${color};
  ${width};
  ${border};
  ${height};
  ${display};
  ${minWidth};
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
    transition: ${theme.baseTransition};
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
  }
  &:disabled {
    opacity: 0.7;
  }
`

const Button: React.FC<ButtonProps> = ({ text, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      <Text>{text}</Text>
    </StyledButton>
  )
}

export default Button

Button.defaultProps = {
  bg: 'primary',
  text: 'Button',
  size: 'medium',
  color: 'white',
  minWidth: '150px',
  alignItems: 'center',
  onClick: () => false,
  justifyContent: 'center'
}
