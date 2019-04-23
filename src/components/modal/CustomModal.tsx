import React from 'react'
import PropTypes from 'prop-types'
import { Transition } from 'react-spring/renderprops'

import { ModalWrap, CustomModalInner } from './Elements'

const MODAL_ANIM_CONFIG = {
  duration: 250,
  tension: 100,
  friction: 10
}

type Props = {}

const CustomModal: React.FC<Props> = ({ children }) => {
  return (
    <Transition
      items={open}
      native={true}
      config={MODAL_ANIM_CONFIG}
      from={{
        opacity: 0,
        translateY: '40px'
      }}
      enter={{
        opacity: 1,
        translateY: '0'
      }}
      leave={{
        opacity: 0,
        translateY: '40px',
        pointerEvents: 'none'
      }}
    >
      {(open) =>
        open &&
        ((style: any) => (
          <ModalWrap style={{ opacity: style.opacity }}>
            <CustomModalInner
              style={{
                transform: style.translateY.interpolate((x: any) => `translate3d(0,${x},0)`),
                opacity: style.opacity
              }}
            >
              {children || null}
            </CustomModalInner>
          </ModalWrap>
        ))
      }
    </Transition>
  )
}

CustomModal.defaultProps = {
  onClose: () => false
}

export default CustomModal
