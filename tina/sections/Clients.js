import { tinaField } from "tinacms/dist/react";

const Clients = {
  props: {
    label: "Clients",
    name: "Clients",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/clients.png",
    },
    fields: [
      {
        type: "string",
        name: "sectionName",
        label: "Section Name",
      },
      {
        type: "object",
        name: "actionItems",
        label: "Action Items",
        list: true,
        fields: [
          {
            type: "string",
            name: "count",
            label: "Count",
          },
          {
            type: "string",
            name: "primary",
            label: "Primary Text",
          },
          {
            type: "string",
            name: "secondary",
            label: "Secondary Text",
          },
        ],
      },
    ],
  },

  template: (fields) => (
    <div className="section-box mt-100 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="pb-20 text-mb-center">
              <div className="row">
                {fields?.actionItems?.map((actionItem, index) => (
                  <div
                    key={index}
                    className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center"
                  >
                    <span className="text-display-3 color-green-900">
                      <span
                        className="count"
                        data-tina-field={tinaField(actionItem, "count")}
                      >
                        {actionItem?.count}
                      </span>
                    </span>
                    <div
                      className="text-body-quote"
                      data-tina-field={tinaField(actionItem, "primary")}
                    >
                      {actionItem?.primary}
                    </div>
                    <p
                      className="text-body-text color-gray-500 mt-10"
                      data-tina-field={tinaField(actionItem, "secondary")}
                    >
                      {actionItem?.secondary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  ),
};

export default Clients;
