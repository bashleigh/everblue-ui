import * as React from 'react'
import { Grid } from 'react-flexbox-grid'
import styled, { css } from 'styled-components'
import { ThemeInterface } from '../theme/ThemeInterface'
import { height, width, space } from 'styled-system'
import { StyledSystemProps } from '../theme/StyledSystemProps'

const StyledGrid = styled(Grid)<StyledSystemProps>`
  ${height};
  ${width};
  ${space};
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
  return (
    <StyledGrid fluid={true} {...rest}>
      {children}
    </StyledGrid>
  )
}

export default CustomGrid
