import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

import "../base.css";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
