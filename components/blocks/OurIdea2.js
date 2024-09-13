import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

export const OurIdea2 = ({ data }) => {
  return (
    <section className="section-box">
      <div className="container mt-120">
        <div className="row">
          <div className="col-lg-6 col-sm-12 block-img-we-do">
            <div className="inner-image">
              <img
                className="bdrd-16 img-responsive"
                src={data?.bigImage}
                alt="Agon"
                data-tina-field={tinaField(data, "bigImage")}
              />
              <div className="block-chart">
                <img
                  src={data?.smallImage}
                  alt="Agon"
                  data-tina-field={tinaField(data, "smallImage")}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 block-we-do-2">
            <span
              className="tag-1 bg-6 color-green-900"
              data-tina-field={tinaField(data, "tag")}
            >
              {data?.tag}
            </span>
            <h3
              className="text-heading-1 mt-30"
              data-tina-field={tinaField(data, "heading1")}
            >
              {data?.heading1}
            </h3>
            <p
              className="text-body-lead-large color-gray-600 mt-30"
              data-tina-field={tinaField(data, "heading2")}
            >
              {data?.heading2}
            </p>
            <div className="list-icons mt-50">
              {data?.ideas?.map((idea, i) => (
                <div className="item-icon none-bd">
                  <span className="icon-left">
                    <img
                      src={idea?.image}
                      alt="Agon"
                      data-tina-field={tinaField(idea, "image")}
                    />
                  </span>
                  <h4
                    className="text-heading-4"
                    data-tina-field={tinaField(idea, "title")}
                  >
                    {idea?.title}
                  </h4>
                  <p
                    className="text-body-excerpt color-gray-600 mt-15"
                    data-tina-field={tinaField(idea, "description")}
                  >
                    {idea?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OurIdea2BlockSchema = {
  label: "Our Idea2",
  name: "OurIdea2",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/our-idea2.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "tag",
      lebel: "Tag",
    },
    {
      type: "string",
      name: "heading1",
      label: "Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Sub Heading",
    },
    {
      type: "image",
      name: "bigImage",
      label: "Big Image",
    },
    {
      type: "image",
      name: "smallImage",
      label: "Small Image",
    },
    {
      type: "object",
      name: "ideas",
      label: "Idea List",
      list: true,
      fields: [
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
      ],
    },
  ],
};
