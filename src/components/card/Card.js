import React from "react";
import styled from "styled-components";

import Box from "../primitives/Box";

const StyledBox = styled(Box)`
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

const Card = props => (
  <StyledBox onClick={props.onClick} {...props}>
    {props.children}
  </StyledBox>
);

Card.defaultProps = {
  p: "20px",
  bg: "#FFF",
  width: "auto",
  display: "flex",
  maxWidth: "100%",
  onClick: () => {},
  minHeight: "200px",
  borderRadius: "4px",
  boxSizing: "border-box",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
};

export default Card;
