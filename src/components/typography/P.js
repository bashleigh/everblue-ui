import styled from "styled-components";
import { FluidType } from "./FluidType";
import { space, color, fontWeight, fontFamily } from "styled-system";

export default styled.p`
  ${space};
  ${color};
  ${fontWeight};
  ${fontFamily};
  text-align: ${props => props.align || "left"};
  font-weight: ${props => props.fontWeight || "300"};
  margin: ${props => props.margin || 0};
  ${FluidType("14px", "16px", "320px", "1200px")};
  font-family: ${props =>
    props.theme.fontFamily
      ? props.theme.fontFamily
      : props.customFont
        ? props.customFont
        : "Arial"};
  &:hover {
    cursor: ${props => props.hover && "pointer"};
  }
`;
