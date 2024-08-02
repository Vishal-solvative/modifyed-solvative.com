import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { LinkTemp } from "../GlobalTemplates/LinkTemp";

const WelcomeHero = {
  props: {
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
  },
  template: (fields) => (
    <div className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="banner-hero banner-homepage6">
        <div className="container mt-40">
          <div className="row">
            <div className="col-lg-6 mt-30">
              <h1
                className="text-display-4"
                data-tina-field={tinaField(fields, "heading1")}
              >
                {fields.heading1}
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
                data-tina-field={tinaField(fields, "heading2")}
              >
                {fields.heading2}
              </p>
              <div className="mt-40">
                {fields?.getStarted && (
                  <Link href={fields?.getStarted?.url || "#"} legacyBehavior>
                    <a
                      className={`btn btn-black shape-square ${
                        fields?.getStarted?.icon && "icon-arrow-right-white"
                      }`}
                      data-tina-field={tinaField(fields?.getStarted, "text")}
                    >
                      {fields?.getStarted?.text}
                    </a>
                  </Link>
                )}
                {fields?.howToStart && (
                  <Link href={fields?.howToStart?.url || "#"} legacyBehavior>
                    <a
                      className="btn btn-link icon-triangle color-gray-900 ml-40"
                      data-tina-field={tinaField(fields?.howToStart, "text")}
                    >
                      {fields?.howToStart?.text}
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default WelcomeHero;
