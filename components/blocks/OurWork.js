import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { useActivePage } from "../../hooks/useActivePage";

export const OurWork = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box mt-100">
      <div className="container">
        <div className="text-center mb-20">
          <span
            className="tag-1 bg-6 color-green-900"
            data-tina-field={tinaField(data, "tag")}
          >
            {data?.tag}
          </span>
        </div>
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
            <div className="col-lg-4 col-sm-12">
              <div className="card-grid-style-3 pb-40 bg-5 mb-30">
                <div className="grid-1-img">
                  <img
                    src={card?.image}
                    alt="Agon"
                    data-tina-field={tinaField(card, "image")}
                  />
                </div>
                <h3
                  className="text-heading-3 mt-20"
                  data-tina-field={tinaField(card, "heading1")}
                >
                  {card?.heading1}
                </h3>
                <p
                  className="text-body-excerpt mt-20"
                  data-tina-field={tinaField(card, "heading2")}
                >
                  {card?.heading2}
                </p>
                <div className="mt-30">
                  <Link href={card?.btnLink || "#"} legacyBehavior>
                    <a
                      className="btn btn-default icon-arrow-right"
                      data-tina-field={tinaField(card, "btnText")}
                      onClick={() => updateActivePage(data?.btnLink)}
                    >
                      {card?.btnText}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const OurWorkBlockSchema = {
  label: "Our Work",
  name: "OurWork",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/our-work.png",
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
      label: "Tag",
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
        {
          type: "string",
          name: "btnText",
          label: "Button Text",
        },
        {
          type: "string",
          name: "btnLink",
          label: "Button Link",
        },
      ],
    },
  ],
};
