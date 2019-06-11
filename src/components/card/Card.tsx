import React from 'react'
import styled from 'styled-components'

import Box from '../primitives/Box'
import { theme } from '../theme'
import { StyledSystemProps } from '../theme/StyledSystemProps'

export type CardProps = StyledSystemProps & {
  onClick?: () => void
  color?: string
}

const StyledCard = styled(Box)`
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`

const Card: React.FC<CardProps> = ({ onClick, children, ...rest }) => (
  <StyledCard onClick={onClick} {...rest}>
    {children}
  </StyledCard>
)

Card.defaultProps = {
  p: 3,
  bg: 'white',
  width: 'auto',
  display: 'flex',
  maxWidth: '100%',
  onClick: () => false,
  borderRadius: '4px',
  boxShadow: theme.baseBoxShadow
}

export default Card
