import { css } from "styled-components";

const space = 8;

export const S = {
  flex: (
    direction = "row",
    justify = "flex-start",
    align = "flex-start",
    wrap = "nowrap"
  ) => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: ${justify};
    align-content: ${align};
  `,

  size: (width, height) => css`
    height: ${height};
    width: ${width};
  `,

  flexCenter: (direction, wrap = "nowrap") => css`
    display: flex;
    flex-direction: ${direction};
    flex-wrap: ${wrap};
    justify-content: center;
    align-content: center;
  `,

  round: (radius) => css`
    border-radius: ${radius};
  `,
  responsiveContainer: (maxWidth = "100%") => css`
    max-width: ${maxWidth};
    width: 100%;
  `,

  spacing: (value) => {
    const val = value * space;
    return val + "px";
  },
  shadow: (color) => {
    return `0 2px 4px ${color}`;
  },
};
