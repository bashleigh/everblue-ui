import styled from "styled-components";
import { FluidType } from "./FluidType";
import { space, color } from "styled-system";

export default styled.h4`
  ${space};
  ${color};
  text-align: ${props => props.align || "left"};
  color: ${props => props.color};
  margin: ${props => props.margin || 0};
  font-style: ${props => props.fontStyle || "normal"};
  font-weight: ${props => props.fontWeight || 300};
  ${FluidType("18px", "26px", "320px", "1200px")};
  font-family: ${props => console.log(props.theme)};
`;
