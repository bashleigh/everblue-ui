import * as React from 'react'
import { ButtonProps } from './Button'
import styled from 'styled-components'
import Button from './Button'
import { theme } from '../theme'

export type MinimalButtonProps = ButtonProps & {
  hoverBg?: string
}

const StyledMinimalButton = styled(Button)`
  &:hover {
    background-color: ${(props: MinimalButtonProps) =>
      props.hoverBg || theme.colors.transparentBlack};
  }
`

const MinimalButton: React.FC<MinimalButtonProps> = (props) => {
  return <StyledMinimalButton bg="transparent" {...props} />
}

export default MinimalButton
