import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useActivePage } from "../../hooks/useActivePage";

export const ServiceHeader2 = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box">
      <div className="banner-hero bg-service-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center box-animation fade-up-desktop fade-mobile animation">
              <div data-tina-field={tinaField(data, "primary_heading")}>
                <TinaMarkdown
                  content={data?.primary_heading}
                  components={{
                    h1: (props) => <h1 className="text-display-2" {...props} />,
                    bold: (props) => (
                      <span className="color-green-900" {...props} />
                    ),
                  }}
                />
              </div>

              <p
                className="text-body-lead-large color-gray-500 mt-40 pr-40"
                data-tina-field={tinaField(data, "heading2")}
              >
                {data?.heading2}
              </p>
              <div className="mt-40 text-center">
                <Link
                  className="btn btn-black icon-arrow-right-white"
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
            </div>
            <div className="col-lg-12 d-none d-lg-block">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-8">
                  <div className="banner-imgs">
                    <div className="block-1 shape-2">
                      <img
                        src={data?.banner1}
                        alt="Agon"
                        className="img-responsive img-newsletter"
                        data-tina-field={tinaField(data, "banner1")}
                      />
                    </div>
                    <div className="block-2 shape-2">
                      <img
                        src={data?.banner2}
                        alt="Agon"
                        className="img-responsive img-newsletter"
                        data-tina-field={tinaField(data, "banner2")}
                      />
                    </div>
                    <div className="block-3 shape-2">
                      <img
                        src={data?.banner3}
                        alt="Agon"
                        className="img-responsive img-newsletter"
                        data-tina-field={tinaField(data, "banner3")}
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
                <div className="col-lg-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ServiceHeader2BlockSchema = {
  label: "Service Header 2",
  name: "ServiceHeader2",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/service-header-2.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "rich-text",
      name: "primary_heading",
      label: "Primary Heading",
    },
    {
      type: "string",
      name: "heading2",
      label: "Secondary Heading",
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
      label: "Banner 1",
      name: "banner1",
      type: "image",
    },
    {
      label: "Banner 2",
      name: "banner2",
      type: "image",
    },
    {
      label: "Banner 3",
      name: "banner3",
      type: "image",
    },
  ],
};
