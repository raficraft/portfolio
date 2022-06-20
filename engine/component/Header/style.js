import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 0 ${S.spacing(2)} 0;
  color: #fff;
  ${S.flex("row", "flex-start", "center")}

  nav {
    ${S.flex("row", "center", "center")};
    /* border-bottom: 3px solid #d8e1e8; */
    & ul {
      ${S.flexCenter("row")};
      gap: 3rem;
      @media (min-width: 769px) {
        gap: 6rem;
      }

      li {
        ${S.flex("row", "center", "center")};
        list-style: none;

        a {
          text-decoration: none;
          font-size: 1.25rem;
          color: white;
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
