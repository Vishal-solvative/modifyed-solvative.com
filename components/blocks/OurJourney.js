"use client";

import { tinaField } from "tinacms/dist/react";

export const OurJourney = ({ data }) => {
  return (
    <div className="section-box mt-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12"></div>
          <div className="col-lg-10 col-sm-10 col-12 text-center">
            {data?.caption && (
              <div className="text-center mb-20">
                <span
                  className="tag-1"
                  data-tina-field={tinaField(data, "caption")}
                >
                  {data?.caption}
                </span>
              </div>
            )}
            <h2
              className="text-display-3 color-gray-900 mb-60"
              data-tina-field={tinaField(data, "firstTitle")}
            >
              {data?.firstTitle}
              <br className="d-lg-block d-none" />
              {data?.secondTitle}
            </h2>
          </div>
          <div className="col-lg-1 col-sm-1 col-12"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-sm-12 col-12"></div>
          <div className="col-lg-10 col-sm-12 col-12">
            <ul className="list-steps">
              {data?.steps?.map((item, index) => (
                <li className="icon-asset1" key={index}>
                  <div className="text-center block-step bg-9 hover-up">
                    <div
                      className="mb-30"
                      data-tina-field={tinaField(item, "image")}
                    >
                      <img src={item?.image} />
                    </div>
                    <h3
                      className="text-heading-5 mb-10"
                      data-tina-field={tinaField(item, "journeyTitle")}
                    >
                      {item?.journeyTitle}
                    </h3>
                    <p
                      className="text-body-text color-gray-500"
                      data-tina-field={tinaField(item, "description")}
                    >
                      {item?.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-1 col-sm-12 col-12"></div>
        </div>
      </div>
    </div>
  );
};

export const OurJourneyBlockSchema = {
  label: "Our Journey",
  name: "ourJourney",
  ui: {
    previewSrc: "/thumbnails/our-journey.png",
    defaultItem: {
      caption: "How It Work ?",
      firstTitle: "Our Journey",
    },
  },
  fields: [
    {
      type: "string",
      name: "caption",
      label: "Caption",
    },
    {
      type: "string",
      name: "firstTitle",
      label: "First Title",
      required: true,
    },
    {
      type: "string",
      name: "secondTitle",
      label: "Second Title",
      required: true,
    },
    {
      type: "object",
      name: "steps",
      label: "Steps",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.journeyTitle };
        },
        defaultItem: {
          journeyTitle: "Start Plan",
          description: "Choose any of our packages",
        },
      },
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
          required: true,
        },
        {
          type: "string",
          name: "journeyTitle",
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
