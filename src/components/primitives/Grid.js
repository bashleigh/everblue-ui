import React from "react";
import styled from "styled-components";
import { Grid } from "react-flexbox-grid";

const StyledGrid = styled(Grid)`
  padding-left: ${props => `${props.theme.gridGutter}px` || "8px"};
  padding-right: ${props => `${props.theme.gridGutter}px` || "8px"};
`;

export default props => <StyledGrid {...props}>{props.children}</StyledGrid>;
