import styled from "styled-components";
import { space, color, width, flexWrap, flexDirection } from "styled-system";

export default styled.div`
  ${space};
  ${width};
  ${color};
  ${flexWrap};
  z-index: 100;
  display: flex;
  ${flexDirection};
  max-width: 1190px;
  position: relative;
  box-sizing: border-box;
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "auto"};
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  @media screen and (max-width: 1189) {
    max-width: 100%;
  }
`;
