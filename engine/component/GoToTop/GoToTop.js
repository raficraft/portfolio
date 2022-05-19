import React from "react";

export default function GoToTop() {
  function handleClick() {
    console.log("click");
  }
  return <div onClick={handleClick}>X</div>;
}
