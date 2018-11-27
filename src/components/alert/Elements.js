import styled from "styled-components";
import { animated } from "react-spring";
import { X } from "react-feather";

export const Row = styled.div`
  display: flex;
  justify-content: ${props => (props.actionRow ? "flex-end" : "space-between")};
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: ${props => props.actionRow && "10px"};
`;

export const TextCont = styled.div`
  display: flex;
  max-width: 350px;
`;

export const StyledAlert = styled(animated.div)`
  width: auto;
  background-color: ${props => props.bg};
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 15px 20px;
  color: ${props => props.color};
  z-index: 1400;
  align-items: center;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  justify-content: space-between;
`;

export const CloseIcon = styled(X)`
  color: "#FFF";
  width: 20px;
  height: 20px;
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;
