import React from "react";
import { HtmlParams_footer, HtmlParams_header } from "../../../pages/index_css";
import GoToTop from "../GoToTop/GoToTop";
import Header from "../Header/Header";
import ResponsiveParent from "../ResponsiveParent/ResponsiveParent";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <main>
        <ResponsiveParent {...HtmlParams_header}>
          <Header></Header>
        </ResponsiveParent>
        {children}

        <ResponsiveParent {...HtmlParams_footer}>
          <h1>Footer</h1>
        </ResponsiveParent>
      </main>
      <GoToTop></GoToTop>
    </>
  );
}
