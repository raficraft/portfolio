import { S } from "../../styled/function";
import styled from "styled-components";

export const Wrapper_hardSkills = styled.section`
  .listSvg {
    ${S.flex("row", "center", "center", "wrap")}
    gap : 3rem;
    margin: 3rem 0;
    &_item {
      padding: 3rem;
      background-color: white;
      border-radius: 5px;
      border: 1px solid var(--grey-light);
      ${S.responsiveContainer("22%")}
      ${S.flex("row", "center", "center", "wrap")} svg {
        font-size: 4rem;
      }

      svg {
        color: var(--secondary-color);
      }
    }
  }
`;

export const Wrapper_softSkills = styled.section``;
