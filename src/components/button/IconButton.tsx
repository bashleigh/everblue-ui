import * as React from 'react'
import Button from './Button'
import styled from 'styled-components'
import { ButtonProps } from './Button'

export type IconProps = React.SVGAttributes<SVGElement> & {
  color?: string
  size?: string | number
}

export type IconButtonProps = ButtonProps & {
  icon: any
}

const StyledIconButton = styled(Button)<ButtonProps>`
  min-width: auto;
`

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  ...rest
}: {
  icon: typeof React.Component
}) => {
  return <StyledIconButton {...rest}>{<Icon />}</StyledIconButton>
}

export default IconButton

IconButton.defaultProps = {
  width: 'auto',
  size: 'medium',
  color: 'white',
  onClick: () => false,
  bg: 'background.tint1'
}
