import styled from "styled-components";
import { space, color } from "styled-system";

import { FluidType } from "./FluidType";

export default styled.h1`
  ${space};
  ${color};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.align || "left"};
  ${FluidType("29px", "42px", "320px", "1200px")};
  font-style: ${props => props.fontStyle || "normal"};
  font-family: ${props =>
    props.theme.fontFamily
      ? props.theme.fontFamily
      : props.customFont
        ? props.customFont
        : "Arial"};
`;
