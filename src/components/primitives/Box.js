import styled from "styled-components";
import {
  width,
  space,
  fontSize,
  color,
  flex,
  justifyContent,
  alignItems,
  flexDirection,
  order,
  alignSelf
} from "styled-system";

const Box = styled.div`
  ${width};
  ${space};
  ${fontSize};
  ${color};
  ${flex};
  ${justifyContent};
  ${alignItems};
  ${flexDirection};
  ${order};
  ${alignSelf};
  display: flex;
`;

export default Box;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes
};
