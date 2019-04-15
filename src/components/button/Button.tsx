import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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
  alignItems
} from 'styled-system'
import { ThemeInterface } from '../../themes'
import { Text } from '../typography'

const StyledButton = styled.button`
  ${space};
  ${width};
  ${display};
  ${borderRadius};
  ${border};
  ${justifyContent}; 
  ${alignItems};
  ${(props) => !props.isIcon && minWidth};
  background: ${(props) => (props.outline || props.minimal ? 'transparent' : color)};
  justify-content: center;
  align-items: center;
  
  height: ${(props) => (props.size === 'lg' ? '50px' : props.size === 'md' ? '40px' : '30px')};
  border: ${(props) => (props.outline ? `1px solid ${color}` : 'none')};
  box-shadow: ${(props) => (props.bg === 'transparent' || props.minimal ? 'none' : boxShadow)};
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
  cursor: pointer;
  outline: none;
  position: relative;
  text-decoration: none;
  &:hover {
    box-shadow: ${(props) =>
      props.bg === 'transparent' || props.minimal ? 'none' : '0 1px 5px rgba(50,50,93,0.5)'};
    background: ${(props) => props.minimal && 'rgba(50,50,93,0.05)'};
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform: ${(props) => props.hover && 'translateY(-1px)'};
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.7;
  }
`

const ButtonText = styled.span`
  margin: ${(props) => props.margin};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')}
  font-weight: 500;
  text-decoration: none;
  font-size: 15px;
  z-index: 10;
  letter-spacing: .025em;
  font-family: ${(props: ThemeInterface) => props.theme.fontFamily || 'Arial'};
`

type Props = {
  text: string
  rounded: boolean
  shadow: boolean
  size: 'sm' | 'md' | 'lg'
  iconPos: 'left' | 'right'
  outline: boolean
  minimal: boolean
  width: string
  bg: string
  color: string
  margin: string
  onClick: () => void
  icon: React.ReactNode
  uppercase: boolean
  hover: boolean
}

class Button extends Component {
  _renderIcon = (icon) => {
    if (React.isValidElement(icon)) {
      return icon
    }
    return null
  }

  _renderContent(iconPos, text, icon) {
    const { uppercase, fontFamily } = this.props
    if (icon) {
      if (!text) {
        return <Fragment>{this._renderIcon(icon)}</Fragment>
      }
      switch (iconPos) {
        case 'right':
          return (
            <Fragment>
              <ButtonText fontFamily={fontFamily} uppercase={uppercase} margin="0 10px 0 0">
                {text}
              </ButtonText>
              {this._renderIcon(icon)}
            </Fragment>
          )
        default:
          return (
            <Fragment>
              {this._renderIcon(icon)}
              <ButtonText fontFamily={fontFamily} uppercase={uppercase} margin="0 0 0 10px">
                {text}
              </ButtonText>
            </Fragment>
          )
      }
    }
    return (
      <Text uppercase={uppercase} fontFamily={fontFamily}>
        {text}
      </Text>
    )
  }

  render() {
    const { text, icon, iconPos } = this.props
    const isIcon = icon && !text
    return (
      <StyledButton isIcon={isIcon} {...this.props}>
        {this._renderContent(iconPos, text, icon)}
      </StyledButton>
    )
  }
}

Button.defaultProps = {
  rounded: true,
  shadow: true,
  size: 'md',
  color: '#FFF',
  outline: false,
  bg: '#3578EA',
  icon: null,
  minWidth: '150px',
  onClick: () => {},
  iconPos: 'left',
  minimal: false,
  hover: false,
  borderRadius: '4px',
  p: '0.25em 1.2em',
  boxShadow: '0 1px 3px rgba(50,50,93,0.2)',
  border: 'none',
  display: 'flex'
}

Button.propTypes = {
  /** Text to render inside button */
  text: PropTypes.string,
  /** Whether to add rounded corners */
  rounded: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  iconPos: PropTypes.oneOf(['left', 'right']),
  outline: PropTypes.bool,
  minimal: PropTypes.bool,
  width: PropTypes.string,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.element,
  uppercase: PropTypes.bool,
  hover: PropTypes.bool
}

export default Button
