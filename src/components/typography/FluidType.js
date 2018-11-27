// style-utils.js

export const StripUnit = (value1, value2) => {
  let strippedValue1 = parseInt(value1, 10);
  let strippedValue2 = parseInt(value2, 10);
  let sum = strippedValue1 - strippedValue2;
  return sum;
};

export function FluidType(minFontSize, maxFontSize, minWidth, maxWidth) {
  return `
  @media screen and (min-width: ${minWidth}) {
    font-size: calc(${minFontSize} + ${StripUnit(
    maxFontSize,
    minFontSize
  )} * ((100vw - ${minWidth}) / ${StripUnit(maxWidth, minWidth)}));
  }
  @media screen and (min-width: ${maxWidth}) {
    font-size: ${maxFontSize};
  }
  `;
}
