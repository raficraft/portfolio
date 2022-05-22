import { S } from "../../styled/function";
import styled from "styled-components";
import { anim } from "../../styled/animation";

export const Wrapper_project = styled.section`
  .project_header {
    aside {
      margin: 1rem 0;
      ${S.flex("row", "space-between", "flex-start", "wrap")};

      label {
        margin: 0 1rem 0 0;
      }

      select {
        font-size: 1.25rem;
        border: 1px solid var(--grey-light);
        border-radius: 5px;
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
      ${S.responsiveContainer("30%")}
      overflow: hidden;
      position: relative;
      background-color: white;
      border: 1px solid rgba(219, 229, 230, 1);
      border-radius: 3px;
      ${S.shadow("blue")}
      transform: translateZ(-1000px);

      &:hover {
        border: 1px solid var(--tertiary-bg);
      }

      @media (max-width: 1280px) {
        ${S.responsiveContainer("45%")}
      }
      @media (max-width: 768px) {
        ${S.responsiveContainer("100%")}
      }

      header {
        ${S.flex("row", "space-between", "center", "wrap")};
        margin: 0 0 1rem 0;
      }

      &_img {
        aspect-ratio: 93/ 47;
        background-size: cover;
        display: flex;
        overflow: hidden;
      }

      &_desc {
        position: absolute;
        z-index: 10;
        top: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.95);
        padding: 1rem;
        ${S.flex("column", "space-around", "center")};
        transform: translateY(105%);
        animation: 0.5s ${anim.fadeOut} ease-out both;
        cursor: pointer;
        transition: transform0s;

        .codacy_icon {
          text-align: center;
        }
      }

      &:hover .sticker_desc {
        animation: 0.5s ${anim.fadeIn} ease-out both;
      }

      article {
        border-top: 1px solid grey;
        padding: 1rem;
      }

      footer {
        ${S.flex("column")};
        .sticker_link {
          ${S.flex("row", "space-between", "flex-start", "wrap")};
          width: 100%;
          margin: 0 0 1rem 0;
          .link_icon {
            ${S.flex("row", "center", "center")};
            margin: 0 0 1rem 0;
            a {
              font-size: 1rem;
              text-decoration: none;
            }

            svg {
              font-size: 1.5rem;
            }
            svg {
              margin: 0rem 0.5rem 0;
            }
            span {
              margin: auto auto;
            }
          }
        }

        .list_badge {
          ${S.flex("row", "flex-start", "flex-start", "wrap")};
          gap: 0 1rem;
        }
      }
    }

    &[data-current="true"] {
      .sticker {
        animation: ${anim.goToZ} 0.5s linear;
        animation-fill-mode: both;
      }
    }
  }
`;
