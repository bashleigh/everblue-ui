import React from 'react'
import styled, { css } from 'styled-components'
import { Row } from 'react-flexbox-grid'
import { ThemeInterface } from '../../themes/ThemeInterface'

const StyledRow = styled(Row)`
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

const CustomRow: React.FC = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>
}

export default CustomRow
