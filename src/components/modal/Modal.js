import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Transition } from "react-spring";

import {
  ModalWrap,
  ModalInner,
  ModalBodyCont,
  ModalHeaderCont,
  CloseButton,
  ModalFooterCont
} from "./Elements";
import { H5, P } from "../";

const MODAL_ANIM_CONFIG = {
  duration: 250,
  tension: 100,
  friction: 10
};

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  _renderContent() {
    const { children, heading, body, onClose, actions } = this.props;
    const hasAction = !!actions;
    if (children) {
      return (
        <Fragment>
          <ModalHeaderCont>
            <H5>{heading}</H5>
            <CloseButton onClick={onClose} />
          </ModalHeaderCont>
          {children}
        </Fragment>
      );
    }
    return (
      <Fragment>
        <ModalHeaderCont>
          <H5>{heading}</H5>
          <CloseButton onClick={onClose} />
        </ModalHeaderCont>
        <ModalBodyCont hasAction={!hasAction}>
          <P>{body}</P>
        </ModalBodyCont>
        {actions && <ModalFooterCont>{actions}</ModalFooterCont>}
      </Fragment>
    );
  }

  render() {
    const { children, open } = this.props;
    const hasChildren = !!children;
    return (
      <Transition
        items={open}
        native
        config={MODAL_ANIM_CONFIG}
        from={{
          opacity: 0,
          translateY: "40px"
        }}
        enter={{
          opacity: 1,
          translateY: "0"
        }}
        leave={{
          opacity: 0,
          translateY: "40px",
          pointerEvents: "none"
        }}
      >
        {open =>
          open &&
          (props => (
            <ModalWrap style={{ opacity: props.opacity }}>
              <ModalInner
                haschildren={hasChildren}
                style={{
                  transform: props.translateY.interpolate(
                    x => `translate3d(0,${x},0)`
                  ),
                  opacity: props.opacity
                }}
              >
                {this._renderContent()}
              </ModalInner>
            </ModalWrap>
          ))
        }
      </Transition>
    );
  }
}

Modal.defaultProps = {
  heading: "Modal Heading",
  body: "Modal Body",
  onClose: () => {}
};

Modal.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string,
  children: PropTypes.node,
  mode: PropTypes.string,
  actions: PropTypes.func,
  onClose: PropTypes.func.isRequired
};

export default Modal;
