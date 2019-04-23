import { useSpring } from 'react-spring'

export function fadeUp() {
  return useSpring({
    to: { opacity: 1, transform: 'translate3d(0px,0,0)' },
    from: { opacity: 0, transform: 'translate3d(30px,0,0)' }
  })
}

export function fadeIn() {
  return useSpring({ opacity: 1, from: { opacity: 0 } })
}
