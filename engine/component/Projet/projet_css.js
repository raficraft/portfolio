import { S } from "../../styled/function";
import styled from "styled-components";
import { anim } from "../../styled/animation";

export const Wrapper_project = styled.section`
  .project_header {
    aside {
      margin: 1rem 0;
      ${S.flex("row", "space-between", "center", "wrap")};

      label {
        font-size: 1.25rem;
        margin: 0 1rem 0 0;
      }

      select {
        font-size: 1.25rem;
        border: 1px solid var(--grey-light);
        border-radius: 5px;
        padding: 0.5rem;
      }

      p {
        font-size: 1.25rem;
        margin: auto 1rem;
      }
    }
  }

  .listProject {
    ${S.flex("row", "space-around", "flex-start", "wrap")};
    margin: 4rem 0;
    gap: 3rem 2rem;
    perspective: 1000px;
    transform-style: preserve-3d;

    .sticker {
      ${S.flex("column", "flex-start", "flex-start")};
      ${S.responsiveContainer("30%")}
      background-color: white;
      border-radius: 3px;
      ${S.shadow("blue")}
      padding: 0 0 1.5rem;
      border: 1px solid rgba(219, 229, 230, 1);
      border-top: 5px solid rgba(219, 229, 230, 1);
      border-bottom: 5px solid rgba(219, 229, 230, 1);
      ${S.shadow("#aaaacb")};

      h2 {
        font-size: 1.75rem;
      }

      &:hover {
        border: 1px solid var(--tertiary-bg);
        border-top: 5px solid var(--tertiary-bg);
        border-bottom: 5px solid var(--tertiary-bg);
      }

      @media (max-width: 1280px) {
        ${S.responsiveContainer("45%")}
      }
      @media (max-width: 768px) {
        ${S.responsiveContainer("100%")}
      }

      &_img {
        aspect-ratio: 16/ 9;
        background-size: cover;
        display: flex;
        overflow: hidden;
      }

      article {
        padding: 1rem;
        ${S.flex("column", "space-between", "flex-start")};
        flex: 1;
        border-top: 2px solid var(--grey-light);
      }

      .list_badge {
        ${S.flex("row", "flex-start", "flex-start")};
        gap: 1rem;
        font-size: 1.125rem;
        font-weight: bold;
        text-transform: uppercase;
        margin: 1rem 0 1.5rem;
      }

      .sticker_desc {
        padding: 1.5rem 0;
        border-top: 1px solid var(--grey-light);
        border-bottom: 1px solid var(--grey-light);
        flex: 1;
        margin: auto;
      }

      .sticker_link {
        ${S.flex("row", "space-between", "flex-start")};
        margin: 1.5rem 0;
      }

      .link_icon {
        ${S.flex("row", "center", "center")};
        a {
          text-decoration-color: black;
          font-size: 1.25rem;
          &:hover {
            color: red;
            text-decoration-color: red;
          }
        }
        svg {
          margin: auto 1rem;
          ${S.size("1.5rem", "1.5rem")}
        }
      }

      footer {
        width: 100%;
        ${S.flexCenter()}

        img {
          height: 1.5rem;
        }
      }

      /*

      header {
        ${S.flex("row", "space-between", "center", "wrap")};
        margin: 0 0 1rem 0;
      }
      &_title {
        font-size: 2rem;
      }

      &_img {
        aspect-ratio: 93/ 47;
        background-size: cover;
        display: flex;
        overflow: hidden;
      }

      &_desc {
        z-index: 10;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.95);
        ${S.flex("column", "space-around", "center")};
        margin: 1rem 0;

        .codacy_icon {
          text-align: center;
        }
      }

      &_link {
        ${S.flex("row", "space-between", "flex-start", "wrap")};
        width: 100%;
        margin: 1rem 0;
      }

      .link_icon {
        ${S.flex("row", "center", "center")};
        a {
          text-decoration-color: black;
          font-size: 1.25rem;
        }
        svg {
          margin: auto 1rem;
          ${S.size("1.5rem", "1.5rem")}
        }
      }

      article {
        border-top: 1px solid grey;
        padding: 1rem;
      }

      .list_badge {
        ${S.flex("row", "flex-start", "flex-start", "wrap")};
        gap: 0 1rem;
      }

      footer {
        ${S.flex("column", "center", "center", "wrap")};
        img {
          height: 1.5rem;
        }
      } */
    }
  }
`;
