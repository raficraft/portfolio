import { S } from "../../styled/function";
import styled from "styled-components";
import { anim } from "../../styled/animation";

export const Container_GoToTop = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #fff;
  ${S.size("3rem", "3rem")}
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.8s;
  }

  svg {
    font-size: 3rem;
    color: var(--secondary-bg);
  }
`;
