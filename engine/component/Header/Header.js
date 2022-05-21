import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { nav_data } from "../../data/nav/nav_data";
import { Wrapper } from "./style";

export default function Header() {
  function makeLink() {
    return nav_data.map((nav, key) => {
      return (
        <li key={key}>
          <a href={nav.link} onClick={() => router.push(`/${nav.link}`)}>
            {nav.title}
          </a>
        </li>
      );
    });
  }

  return (
    <Wrapper id="top_header">
      <nav className="wrapper_inside">
        <ul>{makeLink()}</ul>
      </nav>
    </Wrapper>
  );
}
