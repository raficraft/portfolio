import { S } from "../../styled/function";
import styled from "styled-components";
import { anim } from "../../styled/animation";

export const Wrapper_project = styled.section`
  .listProject {
    ${S.flex("row", "space-around", "flex-start", "wrap")};
    margin: 4rem 0;
    gap: 3rem 2rem;

    .sticker {
      ${S.responsiveContainer("30%")}

      border: 2px solid #adadadff;
      border-radius: 3px;

      header {
        ${S.flex("row", "space-between", "center", "wrap")};
        margin: 0 0 1rem 0;
      }

      &_title {
        font-size: 1.5rem;
        width: 100%;
        font-weight: bold;
      }

      &_img {
        aspect-ratio: 93/ 47;
        background-size: cover;
        display: flex;
        overflow: hidden;

        &:hover .sticker_desc {
          animation: 0.5s ${anim.fadeIn} ease-out both;
        }
      }

      &_desc {
        background-color: rgba(255, 255, 255, 0.95);
        flex: 1;
        align-self: stretch;
        padding: 1rem;
        transform: translateY(105%);
        ${S.flex("column", "space-around", "center")};
        animation: 0.5s ${anim.fadeOut} ease-out both;

        .codacy_icon {
          text-align: center;
        }
      }

      &_title {
        margin: 0 0 1rem 0;
      }

      article {
        border-top: 2px solid grey;
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
            a,
            svg {
              font-size: 1.25rem;
            }
            svg {
              margin: 0.35rem 0.5rem 0;
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
  }
`;
