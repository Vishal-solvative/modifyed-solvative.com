import { tinaField } from "tinacms/dist/react";

const Gallery = {
  props: {
    label: "Gallery",
    name: "Gallery",
    ui: {
      itemProps: (item) => {
        return { label: item.sectionName };
      },
      previewSrc: "/thumbnails/image-container.png",
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
    ],
  },

  template: (fields) => (
    <div className="section-box mt-100 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={fields?.image1}
              alt="solvative"
              className="main-img hover-effect"
              data-tina-field={tinaField(fields, "image1")}
            />
          </div>
          <div className="col-lg-5">
            <img
              src={fields?.image2}
              alt="solvative"
              className="main-img hover-effect"
              data-tina-field={tinaField(fields, "image2")}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export default Gallery;
