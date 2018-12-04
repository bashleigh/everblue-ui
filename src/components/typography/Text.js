import styled from "styled-components";
import { FluidType } from "./FluidType";
import {
  space,
  color,
  textAlign,
  textStyle,
  fontStyle,
  fontWeight
} from "styled-system";

export default styled.span`
  ${space};
  ${color};
  ${textAlign};
  ${textStyle};
  ${fontStyle};
  ${fontWeight};
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
