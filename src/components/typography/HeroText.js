import styled from "styled-components";
import { FluidType } from "./FluidType";
import { space, color } from "styled-system";

export default styled.h1`
  ${space};
  ${color};
  width: auto;
  position: relative;
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.align || "left"};
  ${FluidType("49px", "70px", "320px", "1200px")};
  font-style: ${props => props.fontStyle || "normal"};
  &:before {
    position: absolute;
    content: "";
    bottom: 5%;
    left: 0;
    width: 35%;
    height: 2px;
    background: ${props => props.bg || "#3578EA"};
  }
`;
