import React from 'react'
import { Grid } from 'react-flexbox-grid'
import styled, { css } from 'styled-components'
import { ThemeInterface } from '../../themes/ThemeInterface'

const StyledGrid = styled(Grid)`
  ${(props: ThemeInterface) => {
    if (props.theme.gridGutter) {
      return css`
        padding-left: ${props.theme.gridGutter}px;
        padding-right: ${props.theme.gridGutter}px;
      `
    } else {
      return css`
        padding-left: 8px;
        padding-right: 8px;
      `
    }
  }}
`

const CustomGrid: React.FC = ({ children, ...rest }) => {
  return <StyledGrid {...rest}>{children}</StyledGrid>
}

export default CustomGrid
