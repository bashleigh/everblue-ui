import * as React from 'react'
import { StyledSystemProps } from '../theme/StyledSystemProps'
import Button from './Button'
import styled from 'styled-components'
import { ButtonProps } from './Button'

const StyledIconButton = styled(Button)`
  width: auto;
`

const IconButton: React.FC<ButtonProps> = () => {
  return <div>icon button</div>
}

export default IconButton

IconButton.defaultProps = {
  bg: 'primary',
  width: 'auto',
  size: 'medium',
  color: 'white',
  minWidth: 'inherit',
  onClick: () => false
}
