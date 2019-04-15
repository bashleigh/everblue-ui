import React from 'react'
import styled from 'styled-components'
import { Col } from 'react-flexbox-grid'

const StyledCol = styled(Col)`
  padding-left: ${(props) =>
    `${parseFloat(props.theme.gridGutter / 2).toFixed(1)}px !important` || '8px'};
  padding-right: ${(props) =>
    `${parseFloat(props.theme.gridGutter / 2).toFixed(1)}px !important` || '8px'};
`

export default (props) => <StyledCol {...props}>{props.children}</StyledCol>
