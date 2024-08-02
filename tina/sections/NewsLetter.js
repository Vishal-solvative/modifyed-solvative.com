import { LinkTemp } from "../GlobalTemplates/LinkTemp";
import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

const NewsLetter = {
  props: {
    label: "News Letter",
    name: "NewsLetter",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/newsletter.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
      },
      {
        type: "string",
        name: "mainHeading",
        label: "Main Heading",
        required: true,
      },
      {
        type: "string",
        name: "primaryHeading",
        label: "Primary Heading",
        required: true,
      },
      {
        type: "string",
        name: "secondaryHeading",
        label: "Secondary Heading",
        required: true,
      },
      { ...LinkTemp, label: "Link" },
      {
        label: "Primary Image",
        name: "primaryImage",
        type: "image",
      },
      {
        label: "Secondary Image",
        name: "secondaryImage",
        type: "image",
      },
    ],
  },
  template: (fields) => (
    <div className="section-box overflow-visible mb-50 box-animation fade-up-desktop fade-mobile animation">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="bg-6 box-newsletter position-relative">
              <div className="row">
                <div className="col-lg-5 col-md-7">
                  <span
                    className="text-body-capitalized color-gray-500 text-uppercase"
                    data-tina-field={tinaField(fields, "mainHeading")}
                  >
                    {fields?.mainHeading}
                  </span>
                  <h4
                    className="text-heading-2 mb-10 mt-10"
                    data-tina-field={tinaField(fields, "primaryHeading")}
                  >
                    {fields?.primaryHeading}
                  </h4>
                  <p
                    className="text-body-text color-gray-500"
                    data-tina-field={tinaField(fields, "secondaryHeading")}
                  >
                    {fields?.secondaryHeading}
                  </p>
                  {fields?.link && (
                    <div>
                      <Link href={fields?.link?.url} legacyBehavior>
                        <a data-tina-field={tinaField(fields?.link, "text")}>
                          {fields?.link?.text}
                        </a>
                      </Link>
                    </div>
                  )}
                  <div className="box-form-newsletter mt-30">
                    <form className="form-newsletter">
                      <input
                        className="input-newsletter"
                        placeholder="Enter you mail .."
                      />
                      <button className="btn btn-send"></button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                  <div className="block-chart">
                    <Link href="#" legacyBehavior>
                      <a>
                        <img
                          src={fields?.secondaryImage}
                          alt="Agon"
                          data-tina-field={tinaField(fields, "secondaryImage")}
                        />
                      </a>
                    </Link>
                  </div>
                  <Link href="#" legacyBehavior>
                    <a>
                      <img
                        src={fields?.primaryImage}
                        alt="Agon"
                        className="img-responsive img-newsletter"
                        data-tina-field={tinaField(fields, "primaryImage")}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  ),
};

export default NewsLetter;
