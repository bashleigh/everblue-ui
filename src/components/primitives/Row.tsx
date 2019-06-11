import * as React from 'react'
import { Row } from 'react-flexbox-grid'
import styled, { css } from 'styled-components'
import { ThemeInterface } from '../theme/ThemeInterface'
import { SpaceProps, space, ColorProps, color, WidthProps, width } from 'styled-system'

export type RowProps = SpaceProps &
  ColorProps &
  WidthProps & {
    color?: string
  }

const StyledRow = styled(Row)<RowProps>`
  ${space};
  ${color};
  ${width};
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

const CustomRow: React.FC<RowProps> = ({ children, ...rest }) => {
  return <StyledRow {...rest}>{children}</StyledRow>
}

export default CustomRow
