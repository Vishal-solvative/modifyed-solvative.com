import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { LinkTemp } from "../GlobalTemplates/LinkTemp";
import Image from "next/image";
const need = [
  "Expertise",
  "Case Studies",
  "Who We Are",
  "Careers",
  "Solve Forward Journal",
];

const pageNotFound = {
  props: {
    name: "pagenotfound",
    label: "page not found",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/page-not-found.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
      },
      {
        type: "image",
        name: "errorImage",
        label: "Error Image",
      },
      {
        type: "string",
        name: "heading",
        label: "Heading",
        required: true,
      },
      {
        type: "string",
        name: "subHeading",
        label: "Sub Heading",
        required: true,
      },
      {
        label: "Tags",
        name: "tags",
        type: "string",
        list: true,
      },
      { ...LinkTemp, label: "Back to home" },
    ],
  },

  template: (fields) => (
    <section className="section-box">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column bd-highlight mt-110">
              <div
                className="bd-highlight text-heading-1 mt-30"
                data-tina-field={tinaField(fields, "heading")}
              >
                {fields?.heading}
              </div>
              <div
                className="p-2 bd-highlight text-body-normal mt-20"
                data-tina-field={tinaField(fields, "subHeading")}
              >
                {fields?.subHeading}
              </div>
              <div className="d-flex flex-wrap p-2 bd-highlight thw-60 custom-container">
                {fields?.tags?.map((item, index) => (
                  <span
                    key={index}
                    className="border-pills text-body-small pxy-8-12 mx-10"
                    data-tina-field={tinaField(item, "tags")}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-30 mt-md-0">
            <Image
              src={fields?.errorImage}
              alt="Robot"
              data-tina-field={tinaField(fields, "errorImage")}
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center back-to-homepage-btn-cover mt-40">
          <div className="back-to-homepage-btn">
            <div className="d-flex justify-content-center align-items-center back-to-homepage-btn-2">
              <Link href={fields?.link?.url || "/"} legacyBehavior>
                <a data-tina-field={tinaField(fields?.link, "text")}>
                  {fields?.link?.text}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};

export default pageNotFound;
