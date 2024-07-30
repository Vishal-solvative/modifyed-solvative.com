/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import "react-perfect-scrollbar/dist/css/styles.css";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";

const Sidebar = ({ header, openClass, activePage, setActivePage }) => {
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          {/* Commenting top user account if needed we can uncomment and use */}
          {/* <div className='mobile-header-top'>
                        <div className='user-account'>
                            <img src='/assets/imgs/template/ava_1.png' alt='Agon' />
                            <div className='content'>
                                <h6 className='user-name'>
                                    Hi <span className='text-brand'>Steven !</span>
                                </h6>
                                <p className='font-xs text-muted'>You have 5 new messages</p>
                            </div>
                        </div>
                    </div> */}
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="mobile-menu font-heading">
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
              </div>
              {/* Commenting user account nav links if needed we can uncomment and use */}
              {/* <div className='mobile-account'>
                                <h6 className='mb-10'>Your Account</h6>
                                <ul className='mobile-menu font-heading'>
                                    <li>
                                        <Link href='/#' legacyBehavior>
                                            <a>Profile</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/#' legacyBehavior>
                                            <a>Work Preferences</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/#' legacyBehavior>
                                            <a>My Boosted Shots</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/#' legacyBehavior>
                                            <a>My Collections</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/#' legacyBehavior>
                                            <a>Account Settings</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/#' legacyBehavior>
                                            <a>Go Pro</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href='/page-login' legacyBehavior>
                                            <a>Sign Out</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}
              <div className="site-copyright color-gray-400">
                Copyright 2022 © Agon - Agency Template.
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
