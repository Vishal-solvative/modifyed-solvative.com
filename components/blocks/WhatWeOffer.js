"use client";

import OfferSlider from "../slider/Offer";
import { tinaField } from "tinacms/dist/react";

export const WhatWeOffer = ({ data }) => {
  return (
    <section className="section-box">
      <div className="container mt-120">
        <div className="bg-2 bdrd-58 pattern-white pb-60">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
              <h2
                className="text-heading-1 color-gray-900"
                data-tina-field={tinaField(data, "offerTitle")}
              >
                {data?.offerTitle}
              </h2>
              <p
                className="text-body-lead-large color-gray-600 mt-20"
                data-tina-field={tinaField(data, "description")}
              >
                {data?.description}
              </p>
            </div>
            <div className="col-lg-2 col-sm-1 col-12" />
          </div>
          <div className="container mt-70">
            {data?.testimonials && <OfferSlider data={data?.testimonials} />}
          </div>
        </div>
      </div>
    </section>
  );
};
export const WhatWeOfferBlockSchema = {
  label: "What We Offer",
  name: "whatWeOffer",
  ui: {
    previewSrc: "/thumbnails/what-we-offer.png",
    defaultItem: {
      offerTitle: "What We Offer",
      description:
        "What makes us different from others? We give holistic solutions with strategy, design and technology.",
    },
  },
  fields: [
    {
      type: "string",
      name: "offerTitle",
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
      label: "Testimonials",
      name: "testimonials",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.offerTitle };
        },
        defaultItem: {
          offerTitle: "Market Research",
          quote: "One make creepeth, man bearing theira firmament.",
        },
      },
      fields: [
        {
          type: "image",
          name: "img",
          label: "Image",
        },
        {
          type: "string",
          name: "offerTitle",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "quote",
          label: "Quote",
          required: true,
        },
      ],
    },
  ],
};
