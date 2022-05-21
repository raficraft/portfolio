import { S } from "../../styled/function";
import styled from "styled-components";
import { anim } from "../../styled/animation";

export const Container_GoToTop = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: withe;
  ${S.size("3rem", "3rem")}

  svg {
    font-size: 3rem;
    color: var(--secondary-bg);
  }
`;
