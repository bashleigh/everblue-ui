import React, { Component, Fragment } from 'react'
import { Transition } from 'react-spring/renderprops.cjs'

import { ModalWrap, ModalInner, ModalBodyCont, ModalHeaderCont, CloseButton } from './Elements'
import { H5, P } from '../'
import { StyledSystemProps } from '../../themes/StyledSystemProps'

const MODAL_ANIM_CONFIG = {
  duration: 250,
  tension: 100,
  friction: 10
}

type Props = StyledSystemProps & {
  heading?: string
  body?: string
  mode?: string
  open?: boolean
  onClose: () => void
}

type State = {
  open: boolean
}

class Modal extends Component<Props, State> {
  static defaultProps = {
    heading: 'Modal Heading',
    body: 'Modal Body',
    onClose: () => false
  }
  constructor(props: Props) {
    super(props)
    this.state = {
      open: props.open
    }
  }

  _renderContent() {
    const { children, heading, body, onClose } = this.props
    if (children) {
      return <Fragment />
    }
    return (
      <Fragment>
        <ModalHeaderCont>
          <H5>{heading}</H5>
          <CloseButton onClick={onClose} />
        </ModalHeaderCont>
        <ModalBodyCont>
          <P>{body}</P>
        </ModalBodyCont>
      </Fragment>
    )
  }

  render() {
    const { children, heading, onClose } = this.props
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
        {(open: any) =>
          open &&
          ((props: any) => (
            <ModalWrap style={{ opacity: props.opacity }}>
              <ModalInner
                style={{
                  transform: props.translateY.interpolate((x: any) => `translate3d(0,${x},0)`),
                  opacity: props.opacity
                }}
              >
                <ModalHeaderCont>
                  <H5>{heading}</H5>
                  <CloseButton onClick={onClose} />
                </ModalHeaderCont>
                {children}
              </ModalInner>
            </ModalWrap>
          ))
        }
      </Transition>
    )
  }
}

export default Modal
