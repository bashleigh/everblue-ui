import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from '../'

const StyledButton = styled.button`
  background: ${(props) => (props.outline || props.minimal ? 'transparent' : props.bg)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
  border: none;
  ${(props) => !props.isIcon && `min-width: 100px`};
  height: ${(props) => (props.size === 'lg' ? '50px' : props.size === 'md' ? '40px' : '30px')};
  border: ${(props) => (props.outline ? `1px solid ${props.color}` : 'none')};
  border-radius: ${(props) => (props.rounded ? '4px' : 0)};
  box-shadow: ${(props) =>
    props.bg === 'transparent' || props.minimal ? 'none' : '0 1px 3px rgba(50,50,93,0.2)'};
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
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 15px;
  z-index: 10;
  letter-spacing: .025em;
`

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
      <ButtonText uppercase={uppercase} fontFamily={fontFamily}>
        {text}
      </ButtonText>
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
  onClick: () => {},
  iconPos: 'left',
  minimal: false,
  hover: false,
  p: '0.25em 1.2em'
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
