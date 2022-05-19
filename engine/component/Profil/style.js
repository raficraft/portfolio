import { S } from "../../styled/function";
import styled from "styled-components";

export const Container = styled.section`
  ${S.flex("column-reverse", "flex-start", "flex-start")};
  gap: 0 2rem;
  @media (min-width: 601px) {
    ${S.flex("row", "space-between", "flex-start")};
  }

  .imgProfil {
    ${S.flexCenter("row")};

    span {
      border-radius: 16px;
    }
    @media (max-width: 600px) {
      margin: auto auto;
      margin-bottom: 2rem;
      width: calc(100vw - 8rem);
      height: calc(100vw - 12rem);
    }
    @media (min-width: 601px) {
      max-width: 430px;
    }
  }

  .punchline {
    ${S.flex("column", "center", "flex-start")};

    header {
      @media (min-width: 601px) {
        margin: 0 0 6rem 0;
      }
    }
  }

  .bigTitle {
    text-align: center;
    @media (min-width: 601px) {
      text-align: left;
      font-size: 5.5rem;
      ${S.flex("column", "flex-start", "center")};
    }
  }

  h2 {
    text-align: center;
    @media (min-width: 601px) {
      margin: 0 0 2rem 0;
      text-align: left;
    }
  }

  blockquote {
    font-size: 1.25rem;
    text-align: center;
    margin: 0 0 2rem 0;
    @media (min-width: 601px) {
      text-align: left;
    }
  }

  .callToAction {
    ${S.responsiveContainer()}
    ${S.flex("row", "center", "center")};
    margin: 1rem 0;
    @media (min-width: 601px) {
      ${S.flex("row", "flex-start", "center")};
    }
    a {
      background-color: var(--tertiary-bg);
      border-radius: 5px;
      border: none;
      font-size: 1.5rem;
      color: white;
      text-decoration: none;
      ${S.flex("row", "center", "center")};
      padding: ${S.spacing(2)} ${S.spacing(3)};
      transition: 0.5s linear;
      &:hover {
        transition: 0.5s linear;
        background-color: #347d5c;
      }
      svg {
        margin: 0.25rem 1rem 0 0;
      }
    }
  }
`;