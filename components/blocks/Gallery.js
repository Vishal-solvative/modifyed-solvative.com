import { tinaField } from "tinacms/dist/react";

export const Gallery = ({ data }) => {
  return (
    <div className="section-box mt-100 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <img
              src={data?.image1}
              alt="solvative"
              className="main-img hover-effect"
              data-tina-field={tinaField(data, "image1")}
            />
          </div>
          <div className="col-lg-5">
            <img
              src={data?.image2}
              alt="solvative"
              className="main-img hover-effect"
              data-tina-field={tinaField(data, "image2")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const GalleryBlockSchema = {
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
};
