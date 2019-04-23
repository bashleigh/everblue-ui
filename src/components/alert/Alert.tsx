import * as React from 'react'
import Box from '../primitives/Box'
import { Text } from '../typography'
import { useTransition } from 'react-spring'
import { TextCont, StyledAlert, CloseIcon } from './Elements'
import { StyledSystemProps } from '../../themes/StyledSystemProps'

type Props = StyledSystemProps & {
  text: string
  open?: boolean
  color?: string
  autoClose?: boolean
  onClose: () => void
  intent: 'success' | 'error'
  alertPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

const Alert: React.FC<Props> = ({
  open,
  autoClose,
  text,
  onClose,
  intent,
  alertPosition,
  ...rest
}) => {
  const transitions = useTransition(open, null, {
    from: { opacity: 0, transform: [{ translateY: '20px' }] },
    enter: { opacity: 1, transform: [{ translateY: 0 }] },
    leave: { opacity: 0, transform: [{ translateY: '20px' }] }
  } as any)

  return (
    <React.Fragment>
      {transitions.map(
        ({ item, key, props }: any) =>
          item && (
            <StyledAlert
              {...rest}
              key={key}
              bg={intent}
              style={props}
              alertPosition={alertPosition || 'bottom-right'}
            >
              <Box flexDirection="row" width="100%" mt={1}>
                <TextCont>
                  <Text color={rest.color || 'primary'}>{text}</Text>
                </TextCont>
                <CloseIcon size={30} color="dark" onClick={onClose} />
              </Box>
            </StyledAlert>
          )
      )}
    </React.Fragment>
  )
}

export default Alert

Alert.defaultProps = {
  intent: 'success'
}
