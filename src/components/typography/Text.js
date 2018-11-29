import styled from "styled-components";
import { FluidType } from "./FluidType";
import { space, color, fontWeight, fontFamily } from "styled-system";

export default styled.span`
  ${space};
  ${color};
  ${fontWeight};
  ${fontFamily};
  text-align: ${props => props.align || "left"};
  font-weight: ${props => props.fontWeight || "300"};
  margin-left: ${props => props.marginLeft || 0};
  margin-right: ${props => props.marginLeft || 0};
  margin-top: ${props => props.marginLeft || 0};
  margin-bottom: ${props => props.marginLeft || 0};
  padding-left: ${props => props.paddingLeft || 0};
  padding-right: ${props => props.marginLeft || 0};
  padding-top: ${props => props.marginLeft || 0};
  ${FluidType("14px", "16px", "320px", "1200px")};
  &:hover {
    cursor: ${props => props.hover && "pointer"};
  }
`;
