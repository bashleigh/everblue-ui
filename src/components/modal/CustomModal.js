import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-spring";

import { ModalWrap, CustomModalInner } from "./Elements";

const MODAL_ANIM_CONFIG = {
  duration: 250,
  tension: 100,
  friction: 10
};

const CustomModal = ({ children, open }) => (
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
          <CustomModalInner
            style={{
              transform: props.translateY.interpolate(
                x => `translate3d(0,${x},0)`
              ),
              opacity: props.opacity
            }}
          >
            {children || null}
          </CustomModalInner>
        </ModalWrap>
      ))
    }
  </Transition>
);

CustomModal.defaultProps = {
  onClose: () => {}
};

CustomModal.propTypes = {
  mode: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default CustomModal;
