import React, { Component } from "react";
import PropTypes from "prop-types";
import { config, Transition } from "react-spring";
import { Text } from "../";
import { Row, TextCont, StyledAlert, CloseIcon } from "./Elements";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: true,
      open: false
    };
  }

  _handleClose() {
    this.setState(
      {
        open: false
      },
      () => {
        this.props.onClose();
      }
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return {
        open: true
      };
    }
  }

  _renderAction = element => {
    if (React.isValidElement(element)) {
      return element;
    }
    return null;
  };

  _renderIcon = icon => {
    if (React.isValidElement(icon)) {
      return icon;
    }
    return null;
  };

  render() {
    const { action, text, color, icon, style, open } = this.props;
    return (
      <Transition
        items={open}
        native
        config={config.gentle}
        from={{
          opacity: 0,
          translateY: "20px"
        }}
        enter={{
          opacity: 1,
          translateY: "0"
        }}
        leave={{
          opacity: 0,
          translateY: "20px",
          pointerEvents: "none"
        }}
      >
        {open =>
          open &&
          (props => (
            <StyledAlert
              {...this.props}
              style={{
                transform: props.translateY.interpolate(
                  x => `translate3d(0,${x},0)`
                ),
                ...props
              }}
            >
              <Row>
                {icon && this._renderIcon(icon)}
                <TextCont>
                  <Text {...this.props}>{text}</Text>
                </TextCont>
                <CloseIcon onClick={() => this._handleClose()} />
              </Row>
              {action && (
                <Row color={color} actionRow>
                  {this._renderAction(action)}
                </Row>
              )}
            </StyledAlert>
          ))
        }
      </Transition>
    );
  }
}

Alert.defaultProps = {
  text: "Here is a nice alert!",
  bg: "#2d2d2d",
  color: "#FFF",
  onClose: () => {},
  autoClose: true,
  duration: 3500,
  open: true
};

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  autoClose: PropTypes.bool,
  duration: PropTypes.number,
  bg: PropTypes.string,
  icon: PropTypes.element
};

export default Alert;
