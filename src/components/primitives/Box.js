import styled from "styled-components";
import {
  width,
  maxWidth,
  height,
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
  ${height};
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
  ${props => (props.maxWidth ? maxWidth : `max-width: 100%`)};
  box-sizing: border-box;
`;

export default Box;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes
};
