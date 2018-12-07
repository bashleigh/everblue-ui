import styled from "styled-components";
import {
  flex,
  order,
  color,
  space,
  width,
  zIndex,
  height,
  display,
  maxWidth,
  minWidth,
  position,
  fontSize,
  flexWrap,
  boxShadow,
  alignSelf,
  minHeight,
  alignItems,
  borderRadius,
  flexDirection,
  justifyContent
} from "styled-system";

const Box = styled.div`
  ${flex};
  ${space};
  ${color};
  ${order};
  ${width};
  ${zIndex};
  ${height};
  ${display};
  ${fontSize};
  ${maxWidth};
  ${minWidth};
  ${position};
  ${flexWrap};
  ${minHeight};
  ${alignSelf};
  ${boxShadow};
  ${alignItems};
  ${borderRadius};
  ${flexDirection};
  ${justifyContent};
  box-sizing: ${props => props.boxSizing || "border-box"};
`;

export default Box;

Box.defaultProps = {
  display: "flex",
  waxWidth: "100%",
  position: "relative",
  flexDirection: "column"
};

Box.propTypes = {
  ...flex.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...space.propTypes,
  ...order.propTypes,
  ...zIndex.propTypes,
  ...height.propTypes,
  ...display.propTypes,
  ...maxWidth.propTypes,
  ...position.propTypes,
  ...fontSize.propTypes,
  ...minHeight.propTypes,
  ...boxShadow.propTypes,
  ...alignSelf.propTypes,
  ...alignItems.propTypes,
  ...borderRadius.propTypes,
  ...flexDirection.propTypes,
  ...justifyContent.propTypes
};
