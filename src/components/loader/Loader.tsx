import React from 'react'
import styled, { keyframes } from 'styled-components'

const anim1 = keyframes`
  0%   { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
`
const anim2 = keyframes`
  0%   { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
`

const anim3 = keyframes`
  0%   { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
`

const Wrapper = styled.div`
  flex: 1 1 auto;
  position: relative;
  display: flex;
`

const StyledLoader = styled.div`
  display: block;
  height: 32px;
  width: 32px;
  animation: ${anim1} 3s linear infinite;
  & span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    clip: rect(16px, 32px, 32px, 0);
    animation: ${anim2} 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }

  & span::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    border: 3px solid transparent;
    border-top: 3px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: ${anim3} 1.5s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  }
  & span::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: 32px;
    width: 32px;
    border: 3px solid ${(props) => props.color || '#3578EA'};
    border-radius: 50%;
  }

  & span:before,
  span::after {
    box-sizing: border-box;
  }
`

interface LoaderProps {}

const Loader: React.FC<LoaderProps> = () => {
  return (
    <Wrapper>
      <StyledLoader>
        <span />
      </StyledLoader>
    </Wrapper>
  )
}

export default Loader
