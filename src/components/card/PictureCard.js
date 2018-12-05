import React from "react";
import styled from "styled-components";

import { Box, H5, Text, Button } from "../";

const PictureCont = styled("div")`
  flex: 1;
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  background-image: ${props =>
    props.bgImage ? `url(${props.bgImage})` : null};
  background-color: ${props => props.bg || "#2D374"};
  min-height: ${props => `calc(${props.minHeight} / 2)`};
  background-size: ${props => props.backgroundSize || "cover"};
  border-top-left-radius: ${props => props.borderRadius || "4px"};
  border-top-right-radius: ${props => props.borderRadius || "4px"};
  background-position: ${props => props.backgroundPosition || "50% 50%"};
  width: 100%;
`;

const ContentCont = styled("div")`
  height: auto;
  width: 100%;
  display: flex;
  padding: 15px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const TextCont = styled("div")`
  display: flex;
  flex-direction: column;
`;

const PictureCard = props => (
  <Box {...props}>
    <PictureCont
      backgroundSize={props.backgroundSize}
      bgImage={props.bgImage}
      minHeight={props.minHeight}
    />
    <ContentCont>
      <TextCont>
        <H5 color={props.headingColor}>{props.cardTitle}</H5>
        <Text color={props.bodyColor} mt="10px" mb="15px">
          {props.cardBody}
        </Text>
      </TextCont>
      <Button
        bg={props.buttonBg}
        size={props.buttonSize}
        onClick={props.onClick}
        text={props.buttonText}
        color={props.buttonTextColor}
      />
    </ContentCont>
  </Box>
);

PictureCard.defaultProps = {
  p: "0px",
  bg: "#FFF",
  width: "auto",
  height: "auto",
  display: "flex",
  minWidth: "220px",
  maxWidth: "100%",
  onClick: () => {},
  minHeight: "320px",
  borderRadius: "4px",
  buttonTextColor: "#FFF",
  cardTitle: "Card Title",
  boxSizing: "border-box",
  buttonText: "Button Text",
  cardBody: "Card Body goes here.",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
};

export default PictureCard;
