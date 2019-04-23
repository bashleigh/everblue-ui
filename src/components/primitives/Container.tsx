import styled from 'styled-components'
import { StyledSystemProps } from '../../themes/StyledSystemProps'
import Box from './Box'

const StyledContainer = styled(Box)`
  max-width: 1190px;
  @media screen and (max-width: 1189) {
    max-width: 100%;
  }
`

const Container: React.FC<StyledSystemProps> = ({ children, ...rest }) => {
  return <StyledContainer {...rest}>{children}</StyledContainer>
}

export default Container

Container.defaultProps = {
  width: '100%',
  height: 'auto',
  alignItems: 'center',
  justifyContent: 'center'
}
