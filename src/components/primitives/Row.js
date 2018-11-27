import styled from "styled-components";
import { width, space, height, color } from "styled-system";

export default styled.div`
  ${width};
  ${height};
  ${space};
  ${color};
  display: flex;
  flex-direction: "row";
  flex-wrap: ${props => props.flexWrap || "wrap"};
`;
