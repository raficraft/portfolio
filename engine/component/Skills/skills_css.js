import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper_hardSkills = styled.section`
  .listSvg {
    ${S.flex("row", "space-around", "center", "wrap")}
    width: 100%;
    gap: 2rem;
    margin: 3rem 0;

    &_item {
      ${S.flex("column", "center", "center", "wrap")};
      ${S.responsiveContainer("22%")}
      padding: 1rem;
      background-color: white;
      border-radius: 5px;
      border: 1px solid var(--grey-light);
      @media (max-width: 768px) {
        ${S.responsiveContainer("40%")}
      }
      @media (max-width: 501px) {
        ${S.responsiveContainer("40%")}
      }
      svg {
        margin: auto auto;
        font-size: 4rem;
        color: var(--secondary-color);
      }
      > p {
        width: 100%;
        margin: 1rem auto;
        text-align: center;
      }

      .icon_text {
        width: 100%;
        margin: auto auto;
        font-family: var(--primary-font);
        font-size: 2rem;
        @media (max-width: 1100px) {
          font-size: 1.65rem;
        }
        @media (max-width: 880px) {
          font-size: 1.4rem;
        }
      }

      &--text {
        @media (max-width: 501px) {
          ${S.responsiveContainer("70%")}
        }
      }
    }
  }
`;

export const Wrapper_softSkills = styled.section`
  .two_col {
    ${S.flex("row", "space-around", "center", "nowrap")}
    gap : 2rem;
    margin: 2rem 0;

    @media (max-width: 1000px) {
      ${S.flex("column", "space-around", "center", "nowrap")}
    }

    h2 {
      text-transform: uppercase;
      color: grey;
    }

    .box_item {
      ${S.flex("column", "center", "center", "nowrap")}
      ${S.responsiveContainer("calc(100vw / 2)")}

      .text {
        margin: 1rem;
      }

      @media (max-width: 501px) {
        ${S.responsiveContainer("100%")}
      }
    }
  }
  .assessFirst_img {
    ${S.responsiveContainer("calc(100vw)")}
  }
  .box_item--iframe {
    min-height: 100%;
    ${S.iframeResponsive("400px", "400px")}
  }
`;
