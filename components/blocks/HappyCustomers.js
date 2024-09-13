"use client";

import { tinaField } from "tinacms/dist/react";

export const HappyCustomers = ({ data }) => {
  return (
    <section className="section-box">
      <div className="container mt-120">
        <div className="bdrd-58 box-gray-100">
          <div className="row">
            <div className="col-lg-2 col-sm-1 col-12" />
            <div className="col-lg-8 col-sm-10 col-12 text-center">
              <h2
                className="text-heading-1 color-gray-900 mt-30"
                data-tina-field={tinaField(data, "customerTitle")}
              >
                {data?.customerTitle}
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
            <div className="row">
              {data?.testimonials?.map((item) => (
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="card-grid-style-2 hover-up mb-20">
                    <h5
                      className="text-heading-5 color-gray-900"
                      data-tina-field={tinaField(item, "customerTitle")}
                    >
                      {item?.customerTitle}
                    </h5>
                    <p
                      className="text-body-text color-gray-600 mt-20 text-comment"
                      data-tina-field={tinaField(item, "quote")}
                    >
                      {item?.quote}
                    </p>
                    <div className="box-img-user">
                      <div
                        className="img-user"
                        data-tina-field={tinaField(item, "avatar")}
                      >
                        <img src={item.avatar} alt="Agon" />
                      </div>
                      <h4
                        className="text-body-lead color-gray-900 mb-5"
                        data-tina-field={tinaField(item, "name")}
                      >
                        {item.name}
                      </h4>
                      <p
                        className="text-body-text-md"
                        data-tina-field={tinaField(item, "role")}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HappyCustomersBlockSchema = {
  label: "Happy Customers",
  name: "happyCustomers",
  ui: {
    previewSrc: "/thumbnails/happy-customers.png",
    defaultItem: {
      customerTitle: "Happy Customers",
      description: "Know about our clients, we are a woldwide corporate brand.",
    },
  },
  fields: [
    {
      type: "string",
      name: "customerTitle",
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
      name: "testimonials",
      label: "Testimonials",
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item.customerTitle };
        },
        defaultItem: {
          customerTitle: "Satisfied client testimonial",
          quote:
            "Even factoring differences in body weight between children and adults into account, it would still not reach an intoxicating level in children.",
        },
      },
      fields: [
        {
          type: "string",
          name: "customerTitle",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "quote",
          label: "Quote",
          required: true,
        },
        {
          type: "image",
          name: "avatar",
          label: "Avatar",
          required: true,
        },
        {
          type: "string",
          name: "name",
          label: "Author name",
          required: true,
        },
        {
          type: "string",
          name: "role",
          label: "Role",
          required: true,
        },
      ],
    },
  ],
};
