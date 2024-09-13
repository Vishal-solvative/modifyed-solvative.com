import { tinaField } from "tinacms/dist/react";

export const FAQCategory = ({ data }) => {
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="col-lg-8 col-sm-10 col-12 text-center">
            <h2
              className="text-heading-1 color-gray-900"
              data-tina-field={tinaField(data, "heading1")}
            >
              {data?.heading1}
            </h2>
            <p
              className="text-body-lead-large color-gray-600 mt-20"
              data-tina-field={tinaField(data, "heading2")}
            >
              {data?.heading2}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      <div className="container mt-70">
        <div className="row">
          {data?.cards?.map((card, i) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div
                className="card-grid-style-6 hover-up wow animate__animated animate__fadeIn"
                data-wow-delay=".1s"
              >
                <div className="grid-6-img">
                  <img
                    src={card?.image}
                    alt="Agon"
                    data-tina-field={tinaField(card, "image")}
                  />
                </div>
                <h3
                  className="text-heading-5 mt-20"
                  data-tina-field={tinaField(card, "heading1")}
                >
                  {card?.heading1}
                </h3>
                <p
                  className="text-body-text color-gray-600 mt-20"
                  data-tina-field={tinaField(card, "heading2")}
                >
                  {card?.heading2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQCategoryBlockSchema = {
  label: "FAQ Category",
  name: "FAQCategory",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/faq-category.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "heading1",
      label: "Primary Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Secondary Heading",
    },
    {
      type: "object",
      name: "cards",
      label: "Cards",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "heading1",
          label: "Primary Heading",
        },
        {
          type: "string",
          name: "heading2",
          label: "Secondary Heading",
        },
      ],
    },
  ],
};
