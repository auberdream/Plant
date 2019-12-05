import React from "react";
import { storiesOf } from "@storybook/react";
import { Swatch, SwatchGrid, Label } from "./styles";
import theme from "./index";

storiesOf("Theme", module).add("Colours", () => (
  <SwatchGrid>
    {Object.entries(theme).map((colour, index) => (
      <Swatch backgroundColor={colour[1].base} key={index}>
        <Label>{colour[0]}</Label>
      </Swatch>
    ))}
  </SwatchGrid>
));
