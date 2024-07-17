const ImageContainer = {
  props: {
    label: "Image container",
    name: "ImageContainer",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
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
        type: "object",
        name: "action",
        label: "Action",
        list: true,
        fields: [
          {
            label: "Label",
            name: "actionType",
            type: "string",
            required: true,
          },
          {
            label: "Icon",
            name: "icon",
            type: "boolean",
          },
          {
            label: "Link",
            name: "link",
            type: "string",
          },
        ],
      },
    ],
  },
  template: (fields) => (
    <div className="section-box">
      <div className="banner-hero banner-homepage6">
        <div className="container mt-40">
          <div className="row">
            <div className="col-lg-6 mt-30" style={{ background: "red" }}>
              <h1 className="text-display-4">{fields.heading}</h1>
              <p className="text-body-lead-large color-gray-500">
                {fields.subHeading}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export default ImageContainer;
