import React, { useContext } from "react";
import { ScrollContext } from "../../context/ScrollProvider";
import { Container_GoToTop } from "./GoToTop_css";

export default function GoToTop() {
  const { scrollY } = useContext(ScrollContext);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return scrollY > 100 ? (
    <Container_GoToTop>
      <ArrowUp onClick={handleClick}></ArrowUp>
    </Container_GoToTop>
  ) : null;
}

export function ArrowUp(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11 16h2v-4.2l1.6 1.6L16 12l-4-4l-4 4l1.4 1.4l1.6-1.6Zm1 6q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
      ></path>
    </svg>
  );
}
