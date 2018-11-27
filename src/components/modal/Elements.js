import styled from "styled-components";
import { animated } from "react-spring";
import { X } from "react-feather";

export const ModalWrap = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalInner = styled(animated.div)`
  width: auto;
  max-width: 100%;
  flex-direction: column;
  width: ${props => (props.hasChildren ? "auto" : "500px")}
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 15px 35px rgba(50,50,93,.2), 0 5px 15px rgba(0,0,0,.17);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalHeaderCont = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 15px 20px;
  align-items: center;
  border-bottom: 1px solid #f1f7fb;
  box-sizing: border-box;
`;

export const ModalBodyCont = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  align-items: flex-start;
  border-bottom: ${props => (props.hasAction ? "none" : "1px solid #f1f7fb")};
  box-sizing: border-box;
`;

export const ModalFooterCont = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 15px 20px;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const CloseButton = styled(X)`
  position: absolute;
  font-size: 40px;
  right: 20px;
  color: rgba(0, 0, 0, 0.6);
  z-index: 1001;
  width: 20px;
  height: 20px;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
  }
`;
