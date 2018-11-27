import styled from "styled-components";
import { FluidType } from "./FluidType";
import { space, color } from "styled-system";

export default styled.h3`
  ${space};
  ${color};
  text-align: ${props => props.align || "left"};
  font-style: ${props => props.fontStyle || "normal"};
  font-weight: ${props => props.fontWeight || 300};
  ${FluidType("21px", "30px", "320px", "1200px")};
`;
