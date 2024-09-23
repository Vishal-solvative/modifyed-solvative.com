"use client";

import { LinkTemp } from "../../tina/GlobalTemplates/LinkTemp";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { useActivePage } from "../../hooks/useActivePage";

export const WelcomeHero = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <div className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="banner-hero banner-homepage6">
        <div className="container mt-40">
          <div className="row">
            <div className="col-lg-6 mt-30">
              <h1
                className="text-display-4"
                data-tina-field={tinaField(data, "heading1")}
              >
                {data?.heading1}
              </h1>
              <div className="list-social-banner d-none">
                <Link href="#" legacyBehavior>
                  <a className="social-banner facebook hover-up"></a>
                </Link>

                <Link href="#" legacyBehavior>
                  <a className="social-banner instagram hover-up"></a>
                </Link>

                <Link href="#" legacyBehavior>
                  <a className="social-banner twitter hover-up"></a>
                </Link>

                <Link href="#" legacyBehavior>
                  <a className="social-banner linkedin hover-up"></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 offset-xl-1 mt-30">
              <p
                className="text-body-lead-large color-gray-500"
                data-tina-field={tinaField(data, "heading2")}
              >
                {data.heading2}
              </p>
              <div className="mt-40">
                {data?.getStarted && (
                  <Link href={data?.getStarted?.url || "#"} legacyBehavior>
                    <a
                      className={`btn btn-black shape-square ${
                        data?.getStarted?.icon && "icon-arrow-right-white"
                      }`}
                      onClick={() => updateActivePage(data?.getStarted?.url)}
                      data-tina-field={tinaField(data?.getStarted, "text")}
                    >
                      {data?.getStarted?.text}
                    </a>
                  </Link>
                )}
                {data?.howToStart && (
                  <Link href={data?.howToStart?.url || "#"} legacyBehavior>
                    <a
                      className="btn btn-link icon-triangle color-gray-900 ml-40"
                      data-tina-field={tinaField(data?.howToStart, "text")}
                      onClick={() => updateActivePage(data?.howToStart?.url)}
                    >
                      {data?.howToStart?.text}
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const WelcomeHeroBlockSchema = {
  label: "Welcome hero",
  name: "WelcomeHero",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/welcome-hero.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "heading1",
      label: "Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Sub Heading",
    },
    { ...LinkTemp, label: "Get Started", name: "getStarted" },
    { ...LinkTemp, label: "How to start", name: "howToStart" },
  ],
};
