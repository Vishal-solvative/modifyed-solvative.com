import { tinaField } from "tinacms/dist/react";
import Link from "next/link";
import { useActivePage } from "../../hooks/useActivePage";

export const Hero2 = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box">
      <div className="banner-hero banner-2 bg-about-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <span
                className="tag-1 color-orange-900"
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
            <div className="col-lg-5 d-none d-lg-block">
              <div className="banner-imgs">
                <div className="block-1 shape-1">
                  <img
                    src={data?.smallImage}
                    alt="Agon"
                    data-tina-field={tinaField(data, "smallImage")}
                  />
                </div>
                <img
                  className="img-responsive shape-2"
                  alt="Agon"
                  src={data?.bigImage}
                  data-tina-field={tinaField(data, "bigImage")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Hero2BlockSchema = {
  label: "Hero2",
  name: "Hero2",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/hero2.png",
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
      name: "smallImage",
      label: "Small Image",
    },
    {
      type: "image",
      name: "bigImage",
      label: "Big Image",
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
