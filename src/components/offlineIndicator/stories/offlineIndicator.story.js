import React from "react";
import { storiesOf } from "@storybook/react";
import { OfflineIndicator } from "../..";

storiesOf("OfflineIndicator", module).add("Standard Indicator", () => (
  <OfflineIndicator />
));
