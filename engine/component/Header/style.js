import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 0 ${S.spacing(4)};
  margin: 0 0 ${S.spacing(2)} 0;
  color: #fff;

  nav {
    ${S.flex("row", "center", "center")};
    padding: ${S.spacing(4)};
    /* border-bottom: 3px solid #d8e1e8; */
    & ul {
      ${S.flexCenter("row")};

      li {
        ${S.flex("row", "center", "center")};
        list-style: none;
        margin: 0 ${S.spacing(3)};
        @media (min-width: 769px) {
          margin: 0 ${S.spacing(6)};
        }

        a {
          text-decoration: none;
          font-size: 1.25rem;
          color: var(--primary-bg);
          padding: 0.25rem 1rem;
          position: relative;

          .link_underline {
            content: " ";
            ${S.size("100%", "1px")};
            background-color: rgba(0, 0, 0, 0);
            position: absolute;
            left: 0;
            bottom: 0;
            transition: background-color 0.5s;
          }

          &:hover {
            .link_underline {
              background-color: rgba(0, 0, 0, 0.5);
            }
          }

          &[data-current="true"] {
            .link_underline {
              background-color: var(--tertiary-bg);
            }
          }
        }
      }
    }
  }
`;
