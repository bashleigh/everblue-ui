import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

const StyledRow = styled(Row)`
  padding-left: ${(props) => `${props.theme.gridGutter}px` || '8px'};
  padding-right: ${(props) => `${props.theme.gridGutter}px` || '8px'};
`

export default (props) => <StyledRow {...props}>{props.children}</StyledRow>
