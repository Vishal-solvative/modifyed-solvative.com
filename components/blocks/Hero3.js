import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { useActivePage } from "../../hooks/useActivePage";

export const Hero3 = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box">
      <div className="banner-hero bg-about-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 box-banner-left">
              <span
                className="tag-1 bg-6 color-green-900"
                data-tina-field={tinaField(data, "tag")}
              >
                {data?.tag}
              </span>
              <h1
                className="text-display-3 mt-30"
                data-tina-field={tinaField(data, "heading1")}
              >
                {data?.heading1}
              </h1>
              <p
                className="text-body-lead-large color-gray-500 mt-40 pr-40"
                data-tina-field={tinaField(data, "heading2")}
              >
                {data?.heading2}
              </p>
              <div className="mt-40">
                <Link href={data?.btn1Link || "#"} legacyBehavior>
                  <a
                    className="btn btn-black shape-square icon-arrow-right-white"
                    data-tina-field={tinaField(data, "btn1Text")}
                    onClick={() => updateActivePage(data?.btn1Link || "#")}
                  >
                    {data?.btn1Text}
                  </a>
                </Link>
                <Link href={data?.btn2Link || "#"} legacyBehavior>
                  <a
                    className="btn btn-link color-gray-900 icon-arrow-right text-heading-6"
                    data-tina-field={tinaField(data, "btn2Text")}
                    onClick={() => updateActivePage(data?.btn2Link || "#")}
                  >
                    {data?.btn2Text}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <div className="banner-imgs">
                <div className="block-1 shape-2">
                  <img
                    src={data?.mainImage}
                    alt="Agon"
                    data-tina-field={tinaField(data, "mainImage")}
                  />
                </div>
                <div className="float-end col-lg-6 mt-90">
                  <div className="list-icons mt-50">
                    {data?.cards?.map((card, i) => (
                      <div key={i} className="item-icon none-bd">
                        <span className="icon-left">
                          <img
                            src={card?.tagImage}
                            alt="Agon"
                            data-tina-field={tinaField(card, "tagImage")}
                          />
                        </span>
                        <h4 className="text-heading-4">
                          <span
                            className="text-heading-3 color-green-900"
                            data-tina-field={tinaField(card, "number")}
                          >
                            <span className="count">{card?.number}</span>
                          </span>
                        </h4>
                        <p
                          className="text-body-text color-gray-500"
                          data-tina-field={tinaField(card, "title")}
                        >
                          {card?.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Hero3BlockSchema = {
  label: "Hero3",
  name: "Hero3",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/hero3.png",
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
      name: "mainImage",
      label: "Image",
    },
    {
      type: "object",
      name: "cards",
      label: "Card List",
      list: true,
      fields: [
        {
          type: "image",
          name: "tagImage",
          label: "Image",
        },
        {
          type: "string",
          name: "number",
          label: "Number",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
        },
      ],
    },
    {
      type: "string",
      name: "btn1Text",
      label: "Button1 Text",
    },
    {
      type: "string",
      name: "btn1Link",
      label: "Button1 Link",
    },
    {
      type: "string",
      name: "btn2Text",
      label: "Button2 Text",
    },
    {
      type: "string",
      name: "btn2Link",
      label: "Button2 Link",
    },
  ],
};
