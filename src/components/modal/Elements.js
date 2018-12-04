import styled from "styled-components";
import { animated } from "react-spring";
import { X } from "react-feather";

export const ModalWrap = styled(animated.div)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 1000;
  height: 100vh;
  display: flex;
  padding: 20px;
  position: fixed;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalInner = styled(animated.div)`
  width: auto;
  display: flex;
  max-width: 100%;
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  width: ${props => (props.hasChildren ? "auto" : "500px")}
  box-shadow: 0 15px 35px rgba(50,50,93,.2), 0 5px 15px rgba(0,0,0,.17);
`;

export const CustomModalInner = styled(animated.div)`
  width: auto;
  width: auto;
  display: flex;
  max-width: 100%;
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.bg || 'transparent'};
  box-shadow: 0 15px 35px rgba(50,50,93,.2), 0 5px 15px rgba(0,0,0,.17);
`

export const ModalHeaderCont = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 20px;
  align-items: center;
  box-sizing: border-box;
  justify-content: flex-start;
  border-bottom: 1px solid #f1f7fb;
`;

export const ModalBodyCont = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: ${props => (props.hasAction ? "none" : "1px solid #f1f7fb")};
`;

export const ModalFooterCont = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 20px;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const CloseButton = styled(X)`
  right: 20px;
  width: 20px;
  height: 20px;
  z-index: 1001;
  font-size: 40px;
  position: absolute;
  color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;
