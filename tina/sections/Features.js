import { tinaField } from "tinacms/dist/react";

const Features = {
  props: {
    label: "Features",
    name: "Features",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/features.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
      },
      {
        label: "Image",
        name: "image",
        type: "image",
        required: true,
      },
      {
        label: "Tag",
        name: "tag",
        type: "string",
      },
      {
        label: "Primary Heading",
        name: "primaryHeading",
        type: "string",
        required: true,
      },
      {
        label: "Secondary Heading",
        name: "secondaryHeading",
        type: "string",
        required: true,
      },
      {
        type: "object",
        name: "contents",
        label: "Contents",
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
            required: true,
          },
        ],
      },
    ],
  },
  template: (fields) => (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="container mt-120">
        <div className="row">
          <div className="col-lg-6 col-sm-12 block-img-we-do">
            <img
              className="bdrd-16 img-responsive main-img"
              src={fields?.image}
              alt="Agon"
              data-tina-field={tinaField(fields, "image")}
            />
          </div>
          <div className="col-lg-6 col-sm-12 block-we-do">
            <span
              className="tag-1 bg-6 color-green-900"
              data-tina-field={tinaField(fields, "tag")}
            >
              {fields?.tag}
            </span>
            <h3
              className="text-heading-1 mt-30"
              data-tina-field={tinaField(fields, "primaryHeading")}
            >
              {fields?.primaryHeading}
            </h3>
            <p
              className="text-body-lead-large color-gray-600 mt-30"
              data-tina-field={tinaField(fields, "secondaryHeading")}
            >
              {fields?.secondaryHeading}
            </p>
            <div className="line-bd-green mt-50"></div>
            <div className="row">
              {fields?.contents?.map((content, index) => (
                <div key={index} className="col-lg-6 col-sm-6 col-12 mt-50">
                  <h4
                    className="text-heading-6 icon-leaf"
                    data-tina-field={tinaField(content, "heading")}
                  >
                    {content?.heading}
                  </h4>
                  <p
                    className="text-body-excerpt color-gray-600 mt-15"
                    data-tina-field={tinaField(content, "content")}
                  >
                    {content?.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  ),
};

export default Features;
