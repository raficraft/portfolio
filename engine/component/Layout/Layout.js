import React from "react";
import { HtmlParams_footer, HtmlParams_header } from "../../../pages/index_css";
import GoToTop from "../GoToTop/GoToTop";
import Header from "../Header/Header";
import ArchitectureContainer from "../ArchitectureContainer/ArchitectureContainer";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <main>
        <ArchitectureContainer {...HtmlParams_header}>
          <Header></Header>
        </ArchitectureContainer>
        {children}

        <ArchitectureContainer {...HtmlParams_footer}>
          <h1>Footer</h1>
        </ArchitectureContainer>
      </main>
      <GoToTop></GoToTop>
    </>
  );
}
