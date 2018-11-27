import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  width: ${props => props.width || "auto"};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-direction: column;
  justify-content: ${props => props.align || "center"};
  align-items: center;
  display: flex;
  min-height: ${props => (props.small ? "90px" : "300px")};
  height: auto;
  box-sizing: border-box;
`;

const Card = props => <StyledCard {...props}>{props.children}</StyledCard>;

export default Card;
