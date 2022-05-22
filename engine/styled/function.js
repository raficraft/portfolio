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
    return `box-shadow : 0 2px 4px ${color}`;
  },

  iframeResponsive: (height, width) => css`
    overflow: hidden;
    padding-top: percentage(height / width);
    position: relative;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  `,
};
