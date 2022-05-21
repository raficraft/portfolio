import styled, { keyframes } from "styled-components";

export const anim = {
  fadeIn: keyframes`
  0% {
    transform: translateY(105%);
  }
  100% {
    transform: translateY(0);
  }
`,
  fadeOut: keyframes`
  0% {
      transform: translateY(0);
      opacity: 1
    }
    100% {
      transform: translateY(-105%);
      opacity:0 ;
  }`,

  goToZ: keyframes`
  0% {
    transform: translateZ(-1200px);
  }
  100% {
    transform: translateZ(0);
  }
`,
};
