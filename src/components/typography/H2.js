import styled from "styled-components";
import { FluidType } from "./FluidType";
import { space, color } from "styled-system";

export default styled.h2`
  ${space};
  ${color};
  text-align: ${props => props.align || "left"};
  font-style: ${props => props.fontStyle || "normal"};
  font-weight: ${props => props.fontWeight || 300};
  letter-spacing: ${props => props.letterSpacing && `${props.letterSpacing}px`};
  ${FluidType("25px", "36px", "320px", "1200px")};
  font-family: ${props =>
    props.theme.fontFamily
      ? props.theme.fontFamily
      : props.customFont
        ? props.customFont
        : "Arial"};
`;
