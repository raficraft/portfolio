import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper_hardSkills = styled.section`
  .header_top {
    margin: 0 0 2rem 0;
  }

  .listSvg {
    ${S.flex("row", "space-around", "center", "wrap")}
    width: 100%;
    gap: 2rem;
    margin: 3rem 0;

    &_item {
      ${S.flex("column", "center", "center", "wrap")};
      ${S.responsiveContainer("18%")}
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
        color: var(--secondary-bg);
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
    margin: 4rem 0 2rem;

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

      @media (max-width: 1001px) {
        ${S.responsiveContainer("100%")}
      }
    }
  }
  .assessFirst_img {
    ${S.responsiveContainer("calc(100vw)")}
  }

  .svg_AND_list {
    ${S.flex("row", "space-between", "center", "wrap")};
    margin: 2rem 0;

    &--item {
      ${S.flex("column", "center", "center")};
      margin: 2rem auto;
    }

    &--icon {
      ${S.flex("column", "center", "center")};
      margin: 1.5rem 0;

      svg {
        padding: 2rem;
        background-color: var(--quaternary-bg);
        border-radius: 50%;
        ${S.size("8rem", "8rem")};
        color: white;
        margin: 0 auto 1.5rem auto;
      }
    }

    &--text {
      li {
        margin: 0 0 1rem 0;
      }
    }
  }

  .talent_tag {
    ${S.flex("row", "center", "center", "wrap")};
    margin: 2rem 0;

    .tag {
      border-radius: 3px;
      background-color: var(--quaternary-bg);
      padding: 0.25rem 1rem;
      margin: 0.5rem 1rem;
      font-size: 1.125rem;
      color: white;
      ${S.shadow("grey")}
    }
  }
`;
