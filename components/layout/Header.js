/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchPages } from "../../util/pagesData";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
const Header = ({
  header,
  headerStyle = false,
  handleOpen,
  activePage,
  setActivePage,
}) => {
  return (
    <>
      <header className="header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link
                  className="d-flex"
                  href="/"
                  onClick={() => setActivePage("/")}
                >
                  <img
                    alt="Agon"
                    src={header?.logo}
                    data-tina-field={tinaField(header, "logo")}
                  />
                </Link>
              </div>
              <div className="header-nav">
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    {header?.navLinks?.map((navLink, index) => (
                      <li
                        key={index}
                        onClick={() => setActivePage(navLink?.link)}
                      >
                        <Link
                          href={navLink?.link}
                          data-tina-field={tinaField(navLink, "link")}
                        >
                          <p
                            className={
                              activePage == navLink?.link ? "active" : ""
                            }
                          >
                            {navLink?.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div
                  className="burger-icon burger-icon-white"
                  onClick={handleOpen}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
