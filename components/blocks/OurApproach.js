import Link from "next/link";
import { tinaField } from "tinacms/dist/react";
import { useActivePage } from "../../hooks/useActivePage";

export const OurApproach = ({ data }) => {
  const { activePage, updateActivePage } = useActivePage();
  return (
    <section className="section-box mt-100 bg-green-900 pt-90 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-12 block-gallery-1">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="img-responsive mb-10"
                  src={data?.image1}
                  alt="Agon"
                  data-tina-field={tinaField(data, "image1")}
                />
                <img
                  className="img-responsive"
                  src={data?.image2}
                  alt="Agon"
                  data-tina-field={tinaField(data, "image2")}
                />
              </div>
              <div className="col-lg-6">
                <img
                  className="img-responsive"
                  src={data?.image3}
                  alt="Agon"
                  data-tina-field={tinaField(data, "image3")}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 col-12 block-pl">
            <h2
              className="text-heading-1 color-white mb-30 mt-20"
              data-tina-field={tinaField(data, "heading1")}
            >
              {data?.heading1}
            </h2>
            <p
              className="text-inter-lg"
              data-tina-field={tinaField(data, "heading2")}
            >
              {data?.heading2}
            </p>
            <div className="mt-30">
              <Link href={data?.btnLink}>
                <a
                  className="btn btn-black text-body-text"
                  data-tina-field={tinaField(data, "btnText")}
                  onClick={() => updateActivePage(data?.btnLink)}
                >
                  {data?.btnText}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OurApproachBlockSchema = {
  label: "Our Approach",
  name: "OurApproach",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/our-approach.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "image",
      name: "image1",
      label: "Image 1",
    },
    {
      type: "image",
      name: "image2",
      label: "Image 2",
    },
    {
      type: "image",
      name: "image3",
      label: "Image 3",
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
};
