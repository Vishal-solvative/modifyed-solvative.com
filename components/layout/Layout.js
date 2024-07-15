"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useTina } from "tinacms/dist/react";

const Layout = (props) => {
  const { children } = props;
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const { global } = data;
  const { footer, header } = global;
  const [openClass, setOpenClass] = useState("");
  const handleOpen = () => {
    if (document.body.classList.contains("mobile-menu-active")) {
      document.body.classList.remove("mobile-menu-active");
      setOpenClass("");
    } else {
      document.body.classList.add("mobile-menu-active");
      setOpenClass("sidebar-visible");
    }
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <div className={openClass && "body-overlay-1"} onClick={handleRemove} />

      <>
        <Header
          handleOpen={handleOpen}
          headerStyle={props.headerStyle}
          header={header}
        />
        <Sidebar openClass={openClass} header={header} />
      </>

      <main className="main">{children}</main>

      <Footer footer={footer} />

      <BackToTop />
    </>
  );
};

export default Layout;
