/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import { useActivePage } from "../../hooks/useActivePage";

const Sidebar = ({ header, openClass }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
                    {header?.navLinks?.map((navLink, index) => (
                      <li key={index}>
                        <Link
                          href={navLink?.link}
                          data-tina-field={tinaField(navLink, "link")}
                        >
                          <p
                            className={
                              activePage == navLink?.link ? "active" : ""
                            }
                            onClick={() => updateActivePage(navLink?.link)}
                          >
                            {navLink?.title}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="site-copyright color-gray-400">
                Copyright 2024 © Solvative.
                <br />
                Designed by
                <Link href="http://alithemes.com" legacyBehavior>
                  <a>&nbsp; AliThemes</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
