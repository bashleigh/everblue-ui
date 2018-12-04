import styled from "styled-components";
import { FluidType } from "./FluidType";
import { space, color, fontWeight, fontStyle, textAlign } from "styled-system";

const H3 = styled.h3`
  ${space};
  ${color};
  ${fontStyle};
  ${textAlign};
  ${fontWeight};
  ${FluidType("21px", "23px", "320px", "1200px")};
  font-family: ${props =>
    props.theme.fontFamily
      ? props.theme.fontFamily
      : props.customFont
      ? props.customFont
      : "Arial"};
`;

H3.defaultProps = {
  m: "0px",
  color: "#1b1b1b",
  fontStyle: "normal",
  textAlign: "left",
  fontWeight: "regular"
};

export default H3;
