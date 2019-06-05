import styled from 'styled-components'
import { height, space, color, SpaceProps, ColorProps, HeightProps } from 'styled-system'

export type DividerProps = SpaceProps & ColorProps & HeightProps

export default styled.div<DividerProps>`
  ${space};
  ${color};
  ${height};
  width: 100%;
`
