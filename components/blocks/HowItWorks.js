"use client";

import { tinaField } from "tinacms/dist/react";

export const HowItWorks = ({ data }) => {
  return (
    <section className="section-box mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
            <h2
              className="text-heading-1 color-gray-900 mb-30"
              data-tina-field={tinaField(data, "workTitle")}
            >
              {data?.workTitle}
            </h2>
            <p
              className="text-body-excerpt color-gray-600"
              data-tina-field={tinaField(data, "description")}
            >
              {data?.description}
            </p>
          </div>
          {data?.steps?.map((item, index) => (
            <div className="col-lg-3 col-md-12 col-sm-12 mt-50" key={index}>
              <div className="list-icons">
                <div className="item-icon pl-0">
                  {item?.icon && (
                    <div
                      className="mb-15"
                      data-tina-field={tinaField(item, "icon")}
                    >
                      <img src={item?.icon} alt="Agon" />
                    </div>
                  )}
                  <h4
                    className="text-heading-4"
                    data-tina-field={tinaField(item, "workTitle")}
                  >
                    {item?.workTitle}
                  </h4>
                  <p
                    className="text-body-text color-gray-600 mt-15"
                    data-tina-field={tinaField(item, "description")}
                  >
                    {item?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export const HowItWorksBlockSchema = {
  label: "How It Works",
  name: "howItWorks",
  ui: {
    previewSrc: "/thumbnails/how-it-works.png",
    defaultItem: {
      workTitle: "How It Works",
      description:
        "Ac sapien purus tristique neque nibh vitae faucibus non phasellus vulputate nulla in eget amet, risus",
    },
  },
  fields: [
    {
      type: "string",
      name: "workTitle",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      required: true,
    },
    {
      type: "object",
      name: "steps",
      label: "Steps",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.workTitle };
        },
        defaultItem: {
          workTitle: "1. Acquisition",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.",
        },
      },
      fields: [
        {
          type: "image",
          name: "icon",
          label: "Image",
        },
        {
          type: "string",
          name: "workTitle",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
        },
      ],
    },
  ],
};
