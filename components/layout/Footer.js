/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import { useActivePage } from "../../hooks/useActivePage";

const Footer = ({ footer }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-top">
            <div className="row">
              <div className="col-md-4 col-sm-6 text-center text-md-start">
                <Link href="/" legacyBehavior>
                  <a
                    data-tina-field={tinaField(footer, "logo")}
                    onClick={() => updateActivePage("/")}
                  >
                    {/* <img alt="Agon" src="/assets/imgs/template/logo.svg" /> */}
                    <Image
                      src={footer?.logo}
                      alt="Agon"
                      width={162}
                      height={42}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-md-8 col-sm-6 text-center text-md-end">
                <span
                  className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20"
                  data-tina-field={tinaField(footer, "footerText")}
                >
                  {footer?.footerText}
                </span>
                <Link
                  href={footer?.createAccount?.url || "#"}
                  legacyBehavior
                  data-tina-field={tinaField(footer?.createAccount, "url")}
                >
                  <a
                    className="btn btn-square"
                    data-tina-field={tinaField(footer?.createAccount, "text")}
                    onClick={() => updateActivePage(footer?.createAccount?.url)}
                  >
                    {footer?.createAccount?.text}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 width-20 mb-30">
              <h4
                className="text-heading-5"
                data-tina-field={tinaField(footer, "contact")}
              >
                {footer?.contact}
              </h4>
              <div
                className="mt-20 text-body-text color-gray-600 mb-20"
                data-tina-field={tinaField(footer, "address")}
              >
                {footer?.address}
              </div>
              <div
                className="mt-20 text-body-text color-gray-600"
                data-tina-field={tinaField(footer, "phone")}
              >
                {footer?.phone}
              </div>
              <div
                className="text-body-text color-gray-600"
                data-tina-field={tinaField(footer, "email")}
              >
                {footer?.email}
              </div>
            </div>
            {footer?.otherLinks?.map((data, inx) => (
              <div className="col-lg-3 width-20 mb-30" key={inx}>
                <h4
                  className="text-heading-5"
                  data-tina-field={tinaField(data, "title")}
                >
                  {data?.title}
                </h4>
                <ul className="menu-footer mt-20">
                  {data?.link?.map((link, inx) => (
                    <li key={inx}>
                      <Link href={link?.url || "#"} legacyBehavior>
                        <a
                          data-tina-field={tinaField(link, "text")}
                          onClick={() => updateActivePage(link?.url)}
                        >
                          {link?.text}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © Agon Official 2022
                </span>
                <Link href="/page-terms" legacyBehavior>
                  <a className="text-body-text color-gray-400 ml-50">
                    Privacy policy
                  </a>
                </Link>
                <Link href="/page-terms" legacyBehavior>
                  <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                </Link>
                <Link href="/page-terms" legacyBehavior>
                  <a className="text-body-text color-gray-400 ml-50">
                    Terms of service
                  </a>
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <Link href="https://facebook.com" legacyBehavior>
                    <a className="icon-socials icon-facebook"></a>
                  </Link>
                  <Link href="https://twitter.com" legacyBehavior>
                    <a className="icon-socials icon-twitter"></a>
                  </Link>
                  <Link href="https://www.instagram.com" legacyBehavior>
                    <a className="icon-socials icon-instagram"></a>
                  </Link>
                  <Link href="https://www.linkedin.com" legacyBehavior>
                    <a className="icon-socials icon-linkedin"></a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
