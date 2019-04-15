import * as React from 'react'
import { Text } from '..'
import { Row, TextCont, StyledAlert, CloseIcon } from './Elements'
import { useTransition } from 'react-spring'
import { StyledSystemProps } from '../../themes/StyledSystemProps'

type Props = StyledSystemProps & {
  text: string
  open?: boolean
  color?: string
  autoClose?: boolean
  onClose: () => void
  intent: 'success' | 'error'
}

const Alert: React.FC<Props> = ({ open, autoClose, text, onClose, intent, ...rest }) => {
  const transitions = useTransition(open, null, {
    from: { opacity: 0, transform: [{ translateY: '20px' }] },
    enter: { opacity: 1, transform: [{ translateY: 0 }] },
    leave: { opacity: 0, transform: [{ translateY: '20px' }] }
  } as any)
  return transitions.map(
    ({ item, key, props }: any) =>
      item && (
        <StyledAlert intent={intent} key={key} {...rest} style={props}>
          <Row>
            <TextCont>
              <Text {...props}>{text}</Text>
            </TextCont>
            <CloseIcon size={30} onClick={onClose} />
          </Row>
        </StyledAlert>
      )
  )
}

export default Alert

Alert.defaultProps = {
  open: true,
  bg: '#2d2d2d',
  color: '#FFF',
  autoClose: true,
  onClose: () => false,
  text: 'Here is a nice alert!'
}
