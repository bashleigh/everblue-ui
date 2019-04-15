import React from 'react'
import styled from 'styled-components'
import { Spring, config, animated } from 'react-spring'
import {
  flex,
  order,
  color,
  space,
  width,
  zIndex,
  height,
  display,
  maxWidth,
  minWidth,
  position,
  fontSize,
  flexWrap,
  boxShadow,
  alignSelf,
  minHeight,
  alignItems,
  borderRadius,
  flexDirection,
  justifyContent
} from 'styled-system'

const AnimatedDiv = styled(animated.div)`
  ${flex};
  ${space};
  ${color};
  ${order};
  ${width};
  ${zIndex};
  ${height};
  ${display};
  ${fontSize};
  ${maxWidth};
  ${minWidth};
  ${position};
  ${flexWrap};
  ${minHeight};
  ${alignSelf};
  ${boxShadow};
  ${alignItems};
  ${borderRadius};
  ${flexDirection};
  ${justifyContent};
  box-sizing: ${(props) => props.boxSizing || 'border-box'};
`

const getConfig = (customConfig) => {
  switch (customConfig) {
    case 'slow':
      return config.slow
    case 'gentle':
      return config.gentle
    case 'stiff':
      return config.stiff
    case 'wobbly':
      return config.wobbly
    default:
      return config.default
  }
}

const _getFromObject = (anim) => {
  switch (anim) {
    case 'fade':
      return { opacity: 0 }
    case 'fadeUp':
      return { opacity: 0, translateY: '40px' }
    case 'fadeRight':
      return { opacity: 0, translateX: '40px' }
    case 'fadeLeft':
      return { opacity: 0, translateY: '40px' }
    default:
      return { opacity: 0, translateY: '40px' }
  }
}

const _getToObject = (anim) => {
  switch (anim) {
    case 'fade':
      return { opacity: 1 }
    case 'fadeUp':
      return { opacity: 1, translateY: '0' }
    case 'fadeRight':
      return { opacity: 1, translateX: '0' }
    case 'fadeLeft':
      return { opacity: 1, translateY: '0' }
    default:
      return { opacity: 1, translateY: '0' }
  }
}

const _getTransformStyle = (anim, props) => {
  switch (anim) {
    case 'fade':
      return
    case 'fadeUp':
      return props.translateY.interpolate((x) => `translate3d(0,${x},0)`)
    case 'fadeRight':
      return props.translateX.interpolate((x) => `translate3d(${x},0,0)`)
    case 'fadeLeft':
      return props.translateX.interpolate((x) => `translate3d(${x},0,0)`)
    default:
  }
}

const Animator = (props) => (
  <Spring
    native
    duration={props.duration}
    delay={props.delay}
    config={getConfig(props.customConfig)}
    from={_getFromObject(props.animation)}
    to={_getToObject(props.animation)}
  >
    {(animProps) => (
      <AnimatedDiv
        style={{
          transform: _getTransformStyle(props.animation, animProps),
          ...animProps
        }}
        {...props}
      >
        {props.children}
      </AnimatedDiv>
    )}
  </Spring>
)

Animator.defaultProps = {
  width: 'auto',
  display: 'flex',
  maxWidth: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  boxSizing: 'border-box',
  justifyContent: 'center'
}

export default Animator
