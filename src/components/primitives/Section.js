import styled from "styled-components";
import { width, color, space } from "styled-system";

export default styled.section`
  ${width};
  ${color};
  ${space};
  display: flex;
  position: relative;
  z-index: 20;
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
`;
