import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { nav_data } from "../../data/nav/nav_data";
import { Wrapper } from "./style";

export default function Header() {
  const [current, setCurrent] = useState("#profil");

  function handleClick(link) {
    setCurrent(link);
  }

  function makeLink() {
    return nav_data.map((nav, key) => {
      return (
        <li key={key}>
          <a
            href={nav.link}
            onClick={() => {
              handleClick(nav.link);
            }}
            data-current={current === nav.link ? "true" : "false"}
          >
            {nav.title}
            <span className="link_underline"></span>
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
