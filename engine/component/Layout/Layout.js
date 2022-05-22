import React from "react";
import GoToTop from "../GoToTop/GoToTop";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <main>
        <Header></Header>
        {children}
      </main>
      <GoToTop></GoToTop>
    </>
  );
}
