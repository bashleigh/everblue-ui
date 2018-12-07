import React from "react";
import styled from "styled-components";
import { Spring, config, animated } from "react-spring";
import {
  space,
  width,
  justifyContent,
  alignItems,
  flexDirection
} from "styled-system";

const getConfig = customConfig => {
  switch (customConfig) {
    case "slow":
      return config.slow;
    case "gentle":
      return config.gentle;
    case "stiff":
      return config.stiff;
    case "wobbly":
      return config.wobbly;
    default:
      return config.default;
  }
};

const AnimatedDiv = styled(animated.div)`
  ${space};
  ${width};
  width: auto;
  display: flex;
  ${alignItems};
  max-width: 100%;
  ${justifyContent};
  box-sizing: border-box;
  ${props => (props.flexDirection ? flexDirection : "flex-direction: column")};
`;

export default ({ children, style, delay, customConfig, ...rest }) => {
  return (
    <Spring
      native
      delay={delay}
      config={getConfig(customConfig)}
      from={{ opacity: 0, translateX: "40px" }}
      to={{ opacity: 1, translateX: "0" }}
    >
      {({ opacity, translateX }) => (
        <AnimatedDiv
          style={{
            opacity,
            transform: translateX.interpolate(x => `translate3d(${x},0,0)`)
          }}
          {...rest}
        >
          {children}
        </AnimatedDiv>
      )}
    </Spring>
  );
};
