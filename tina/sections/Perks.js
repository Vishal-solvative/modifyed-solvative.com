import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

const Perks = {
  props: {
    label: "Perks",
    name: "Perks",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/perks.png",
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
        type: "object",
        name: "perksList",
        label: "Perks List",
        list: true,
        fields: [
          {
            label: "Title",
            name: "title",
            type: "string",
          },
          {
            label: "Image",
            name: "image",
            type: "image",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
          },
          {
            type: "string",
            name: "btnText",
            label: "Button Text",
            required: true,
          },
          {
            type: "string",
            name: "btnLink",
            label: "Button Link",
            required: true,
          },
        ],
      },
    ],
  },
  template: (fields) => (
    <section className="section-box box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-sm-1 col-12"></div>
          <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
            <h2
              className="text-heading-1 color-gray-900"
              data-tina-field={tinaField(fields, "primaryHeading")}
            >
              {fields?.primaryHeading}
            </h2>
            <p
              className="text-body-lead-large color-gray-600 mt-20"
              data-tina-field={tinaField(fields, "secondaryHeading")}
            >
              {fields?.secondaryHeading}
            </p>
          </div>
          <div className="col-lg-2 col-sm-1 col-12"></div>
        </div>
      </div>
      <div className="container mt-70">
        <div className="row">
          {fields?.perksList?.map((perk, index) => (
            <div key={index} className="col-lg-4 col-sm-12">
              <div className={`card-grid-1 bg-${index + 1}  hover-up`}>
                <div className="grid-1-img">
                  <img
                    src={perk?.image}
                    alt="Agon"
                    data-tina-field={tinaField(perk, "image")}
                  />
                </div>
                <h3
                  className="text-heading-3 mt-20"
                  data-tina-field={tinaField(perk, "title")}
                >
                  {perk?.title}
                </h3>
                <p
                  className="text-body-excerpt mt-20"
                  data-tina-field={tinaField(perk, "description")}
                >
                  {perk?.description}
                </p>
                <div className="mt-30">
                  <Link
                    className="btn btn-default btn-white icon-arrow-right"
                    href={perk?.btnLink || "#"}
                    data-tina-field={tinaField(perk, "btnLink")}
                  >
                    {perk?.btnText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

export default Perks;
