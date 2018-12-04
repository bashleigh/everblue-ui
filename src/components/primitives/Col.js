import React from "react";
import styled from "styled-components";
import { Col } from "react-flexbox-grid";

const StyledCol = styled(Col)`
  padding-left: ${props => `${props.theme.gridGutter}px` || "8px"};
  padding-right: ${props => `${props.theme.gridGutter}px` || "8px"};
`;

export default props => <StyledCol {...props}>{props.children}</StyledCol>;
