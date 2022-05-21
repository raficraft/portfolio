import styled, { keyframes } from "styled-components";

export const anim = {
  fadeIn: keyframes`
  0% {
    transform: translateZ(-1200px);
  }
  100% {
    transform: translateZ(0);
  }
`,
  fadeOut: keyframes`
  0% {
      transform: translateZ(0);
      opacity: 1
    }
    100% {
      transform: translateZ(-105%);
      opacity:0 ;
  }
`,
};
