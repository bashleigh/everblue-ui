import styled from "styled-components";
import { space, color, fontWeight, fontStyle, textAlign } from "styled-system";

import { FluidType } from "./FluidType";

const H1 = styled.h1`
  ${space};
  ${color};
  ${fontStyle};
  ${textAlign};
  ${fontWeight};
  ${FluidType("32px", "36px", "320px", "1200px")};
  font-family: ${props =>
    props.theme.fontFamily
      ? props.theme.fontFamily
      : props.customFont
      ? props.customFont
      : "Arial"};
`;

H1.defaultProps = {
  m: "0px",
  color: "#1b1b1b",
  fontStyle: "normal",
  textAlign: "left",
  fontWeight: "regular"
};

export default H1;
