import { tinaField } from "tinacms/dist/react";

export const OurProcess = ({ data }) => {
  return (
    <div className="section-box">
      <div className="container mt-120">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center hover-effect box-animation fade-right-desktop fade-mobile animation">
            <img
              className="img-small img-responsive "
              src={data?.secondaryImageLeft}
              alt="Agon"
              data-tina-field={tinaField(data, "secondaryImageLeft")}
            />
            <div className="block-card">
              <img
                src={data?.secondaryImage}
                alt="Agon"
                data-tina-field={tinaField(data, "secondaryImage")}
              />
            </div>
            <div className="block-control">
              <img
                src={data?.secondaryImageRight}
                alt="Agon"
                data-tina-field={tinaField(data, "secondaryImageRight")}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
            <h3
              className="text-heading-1 mt-30 box-animation fade-down-desktop fade-mobile animation"
              data-tina-field={tinaField(data, "heading")}
            >
              {data?.heading}
            </h3>
            <p
              className="text-body-lead-large color-gray-400 box-animation fade-down-desktop fade-mobile animation"
              data-tina-field={tinaField(data, "subHeading")}
            >
              {data?.subHeading}
            </p>
            <div className="row">
              {data?.ourprocess?.map((process, inx) => (
                <div
                  className="col-lg-6 col-sm-6 col-12 mt-50 box-animation fade-left-desktop fade-mobile animation"
                  key={inx}
                >
                  <p
                    className="text-heading-1 color-green-900 mb-10"
                    data-tina-field={tinaField(process, "count")}
                  >
                    0{inx + 1}
                  </p>
                  <h4
                    className="text-heading-6 icon-leaf"
                    data-tina-field={tinaField(process, "title")}
                  >
                    {process?.title}
                  </h4>
                  <p
                    className="text-body-excerpt color-gray-600 mt-15"
                    data-tina-field={tinaField(process, "content")}
                  >
                    {process?.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const OurProcessBlockSchema = {
  label: "Progress Stats",
  name: "OurProcess",
  ui: {
    itemProps: (item) => {
      return { label: item.sectionName };
    },
    previewSrc: "/thumbnails/progress-stats.png",
  },
  fields: [
    {
      type: "string",
      name: "sectionName",
      label: "Section Name",
    },
    {
      type: "image",
      name: "secondaryImageLeft",
      label: "Secondary Image left",
    },
    {
      type: "image",
      name: "secondaryImage",
      label: "Secondary Image",
    },
    {
      type: "image",
      name: "secondaryImageRight",
      label: "Secondary Image right",
    },
    {
      type: "string",
      name: "heading",
      label: "Heading",
      required: true,
    },
    {
      type: "string",
      name: "subHeading",
      label: "Sub Heading",
      required: true,
    },
    {
      type: "object",
      name: "ourprocess",
      label: "Our Process",
      list: true,
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
          required: true,
        },
        {
          label: "Content",
          name: "content",
          type: "string",
        },
      ],
    },
  ],
};
