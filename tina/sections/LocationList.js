import { tinaField } from "tinacms/dist/react";

const LocationList = {
  props: {
    label: "Location List",
    name: "LocationList",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
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
        name: "locationList",
        label: "Location List",
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
            name: "address",
            label: "Address",
            required: true,
          },
          {
            type: "string",
            name: "mobile",
            label: "Mobile",
            required: true,
          },
          {
            type: "string",
            name: "email",
            label: "Email",
            required: true,
          },
        ],
      },
    ],
  },
  template: (fields) => (
    <section className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-10 col-12 text-center mt-40">
            <h2
              className="text-heading-1 color-gray-900 mb-20"
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
        </div>
      </div>
      <div className="container mt-100">
        <div className="row">
          {fields?.locationList?.map((location, index) => (
            <div key={index} className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons hover-up">
                <div className="item-icon">
                  <span className="icon-left">
                    <img
                      src={location?.image}
                      alt="Agon"
                      data-tina-field={tinaField(location, "image")}
                    />
                  </span>
                  <h4
                    className="text-heading-4"
                    data-tina-field={tinaField(location, "title")}
                  >
                    {location?.title}
                  </h4>
                  <p className="text-body-text color-gray-1100 mt-15">
                    <p data-tina-field={tinaField(location, "address")}>
                      {location?.address}
                    </p>

                    <p data-tina-field={tinaField(location, "mobile")}>
                      Phone: {location?.mobile}
                    </p>

                    <p data-tina-field={tinaField(location, "email")}>
                      Email:{location?.email}
                    </p>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
};

export default LocationList;
