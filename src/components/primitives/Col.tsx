import * as React from 'react'
import { Col } from 'react-flexbox-grid'
import styled, { css } from 'styled-components'
import { ThemeInterface } from '../theme/ThemeInterface'

const StyledCol = styled(Col)`
  ${(props: ThemeInterface) => {
    if (props.theme.gridGutter) {
      return css`
        padding-left: ${props.theme.gridGutter / 2}px;
        padding-right: ${props.theme.gridGutter / 2}px;
      `
    } else {
      return css`
        padding-left: 8px;
        padding-right: 8px;
      `
    }
  }}
`

const CustomCol: React.FC = ({ children, ...rest }) => {
  return <StyledCol {...rest}>{children}</StyledCol>
}

export default CustomCol
