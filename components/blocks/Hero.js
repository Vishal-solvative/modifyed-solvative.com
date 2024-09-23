import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { useActivePage } from "../../hooks/useActivePage";

export const Hero = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();

  return (
    <section className="section-box">
      <div className="banner-hero banner-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mt-50">
              <span
                className="tag-1 bg-green-900"
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
                    className="btn btn-link icon-triangle color-gray-900 ml-40"
                    data-tina-field={tinaField(data, "btn2Text")}
                    onClick={() => updateActivePage(data?.btn2Link || "#")}
                  >
                    {data?.btn2Text}
                  </a>
                </Link>
              </div>
              <div className="mt-50">
                <div className="row">
                  {data?.cards?.map((card, i) => (
                    <div key={i} className="col-lg-3 col-sm-4 col-4">
                      <h3 className="text-heading-4 color-gray-900 mb-15">
                        <span
                          className="count"
                          data-tina-field={tinaField(card, "number")}
                        >
                          {card?.number}
                        </span>
                      </h3>
                      <p
                        className="text-body-text-md color-gray-500"
                        data-tina-field={tinaField(card, "title")}
                      >
                        {card?.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="banner-imgs">
                <div className="block-1 shape-2">
                  <img
                    src={data?.leftImage}
                    alt="Agon"
                    data-tina-field={tinaField(data, "leftImage")}
                  />
                </div>
                <div className="block-2 shape-3">
                  <img
                    src={data?.rightImage}
                    alt="Agon"
                    data-tina-field={tinaField(data, "rightImage")}
                  />
                </div>
                <img
                  className="img-responsive shape-1"
                  alt="Agon"
                  src={data?.centerImage}
                  data-tina-field={tinaField(data, "centerImage")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const HeroBlockSchema = {
  label: "Hero",
  name: "Hero",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/hero.png",
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
      name: "leftImage",
      label: "Left Image",
    },
    {
      type: "image",
      name: "rightImage",
      label: "Right Image",
    },
    {
      type: "image",
      name: "centerImage",
      label: "Center Image",
    },
    {
      type: "object",
      name: "cards",
      label: "Card List",
      list: true,
      fields: [
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
