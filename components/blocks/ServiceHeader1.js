import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { useActivePage } from "../../hooks/useActivePage";

export const ServiceHeader1 = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="banner-hero bg-service-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 box-banner-left">
              <h1
                className="text-display-3 mt-30"
                data-tina-field={tinaField(data, "primaryHeading")}
              >
                {data?.primaryHeading}
              </h1>
              <p
                className="text-body-lead-large color-gray-500 mt-40 pr-40"
                data-tina-field={tinaField(data, "secondaryHeading")}
              >
                {data?.secondaryHeading}
              </p>
              <div className="mt-40">
                <Link
                  className="btn btn-black shape-square icon-arrow-right-white"
                  href={data?.btn1Link || "#"}
                  data-tina-field={tinaField(data, "btn1Link")}
                  onClick={() => updateActivePage(data?.btn1Link)}
                >
                  {data?.btn1Title}
                </Link>
                <Link
                  className="btn btn-link icon-triangle color-gray-900 ml-40"
                  href={data?.btn2Link || "#"}
                  data-tina-field={tinaField(data, "btn2Link")}
                  onClick={() => updateActivePage(data?.btn2Link)}
                >
                  {data?.btn2Title}
                </Link>
              </div>
              <div className="row mt-50">
                {data?.stats?.map((stat, index) => (
                  <div
                    key={index}
                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div className="list-icons">
                      <div className="item-icon none-bd">
                        <span className="icon-left">
                          <img
                            src={stat?.image}
                            alt="Agon"
                            data-tina-field={tinaField(stat, "image")}
                          />
                        </span>
                        <h4 className="text-heading-4">
                          <span className="text-heading-3 color-green-900">
                            +
                            <span
                              className="count"
                              data-tina-field={tinaField(stat, "number")}
                            >
                              {stat?.number}
                            </span>
                          </span>
                        </h4>
                        <p
                          className="text-body-text color-gray-500"
                          data-tina-field={tinaField(stat, "title")}
                        >
                          {stat?.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <div className="banner-imgs">
                <div className="block-1 shape-2">
                  <img
                    src={data?.secondaryImage}
                    alt="Agon"
                    data-tina-field={tinaField(data, "secondaryImage")}
                  />
                </div>
                <img
                  src={data?.primaryImage}
                  alt="Agon"
                  className="img-responsive img-newsletter"
                  data-tina-field={tinaField(data, "primaryImage")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceHeader1BlockSchema = {
  label: "Service Header 1",
  name: "serviceHeader1",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/service-header-1.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "string",
      name: "primaryHeading",
      label: "Primary Heading",
      required: true,
    },
    {
      type: "string",
      name: "secondaryHeading",
      label: "Secondary Heading",
      required: true,
    },
    {
      label: "Button1 Title",
      name: "btn1Title",
      type: "string",
    },
    {
      label: "Button1 Link",
      name: "btn1Link",
      type: "string",
    },
    {
      label: "Button2 Title",
      name: "btn2Title",
      type: "string",
    },
    {
      label: "Button2 Link",
      name: "btn2Link",
      type: "string",
    },
    {
      label: "Primary Image",
      name: "primaryImage",
      type: "image",
    },
    {
      label: "Secondary Image",
      name: "secondaryImage",
      type: "image",
    },
    {
      type: "object",
      name: "stats",
      label: "Stats",
      list: true,
      fields: [
        {
          type: "string",
          name: "number",
          label: "Number",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          label: "Image",
          name: "image",
          type: "image",
          required: true,
        },
      ],
    },
  ],
};
