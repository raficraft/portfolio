import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper = styled.header`
  padding: 0 ${S.spacing(4)};
  ${S.flexCenter("row")};
  color: #fff;
  margin: 0 0 ${S.spacing(2)} 0;

  nav {
    border-bottom: 3px solid #d8e1e8;
    padding: ${S.spacing(4)};
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
        }
      }
    }
  }
`;