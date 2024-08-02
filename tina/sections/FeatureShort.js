import { tinaField } from "tinacms/dist/react";
import Link from "next/link";

const FeatureShort = {
  props: {
    label: "Feature Short",
    name: "FeatureShort",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/features-short.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
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
      {
        type: "object",
        name: "actions",
        label: "Actions",
        list: true,
        fields: [
          {
            type: "string",
            name: "heading",
            label: "Heading",
            required: true,
          },
          {
            type: "string",
            name: "content",
            label: "Content",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
        ],
      },
    ],
  },
  template: (fields) => (
    <section className="section-box mt-90 mb-mobile mb-150 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
            <h2
              className="text-heading-1 color-gray-900 mb-10"
              data-tina-field={tinaField(fields, "primaryHeading")}
            >
              {fields?.primaryHeading}
            </h2>
            <p
              className="text-body-lead-large color-gray-600 mt-20"
              data-tina-field={tinaField(fields, "secondaryHeading")}
            >
              {fields?.secondaryHeading}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      <div className="container mt-90 mb-100">
        <div className="row">
          {fields?.actions?.map((content, index) => (
            <div key={index} className="col-lg-6 col-sm-12">
              <div
                className={
                  index % 2 == 0
                    ? "bg-2 box-square hover-up"
                    : "bg-6 box-square hover-up"
                }
              >
                <h4
                  className="text-heading-4 color-gray-900 mb-15"
                  data-tina-field={tinaField(content, "heading")}
                >
                  {content?.heading}
                </h4>
                <p
                  className="text-body-text-md color-gray-600"
                  data-tina-field={tinaField(content, "content")}
                >
                  {content?.content}
                </p>
                <div
                  className={
                    index % 2 == 0
                      ? "box-image-inner bg-color-1"
                      : "box-image-inner bg-color-2"
                  }
                >
                  <Link href="#" legacyBehavior>
                    <a>
                      <img
                        src={content?.image}
                        alt="Agon"
                        data-tina-field={tinaField(content, "image")}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

export default FeatureShort;
