import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const ContactUsHeading = {
  props: {
    label: "ContactUs Heading",
    name: "ContactUsHeading",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/contact-us-header.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
      },
      {
        type: "string",
        name: "firstHeading",
        label: "Primary Heading",
        required: true,
      },
      {
        type: "rich-text",
        name: "secondHeading",
        label: "Secondary Heading",
        required: true,
      },
    ],
  },
  template: (fields) => (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="banner-hero banner-breadcrums">
        <div className="container text-center">
          <h1
            className="text-heading-2 color-gray-1000 mb-20"
            data-tina-field={tinaField(fields, "firstHeading")}
          >
            {fields?.firstHeading}
          </h1>
          <div
            className="breadcrumbs"
            data-tina-field={tinaField(fields, "secondHeading")}
          >
            <TinaMarkdown
              content={fields?.secondHeading}
              components={{
                p: (props) => (
                  <p className="text-body-text color-gray-500" {...props} />
                ),
                ul: (props) => <ul className="text-body-text" {...props} />,
                a: (props) => (
                  <a className="color-gray-900" href="/" {...props} />
                ),
                bold: (props) => <span className="color-gray-500" {...props} />,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  ),
};

export default ContactUsHeading;
