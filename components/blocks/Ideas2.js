import { tinaField } from "tinacms/dist/react";
import { splitText } from "../../util/splitText";
import { IdeaTemp } from "../../tina/GlobalTemplates/IdeaTemp";

export const Ideas2 = ({ data }) => {
  const [firstPart, secondPart] = splitText(data?.heading);
  const [firstDesc, secondDesc] = splitText(data?.subHeading);

  return (
    <section className="section-box mt-100 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-sm-1 col-12" />
          <div className="col-lg-10 col-sm-10 col-12 text-center">
            <h2
              className="text-heading-1 color-gray-900 mb-10"
              data-tina-field={tinaField(data, "heading")}
            >
              {firstPart}
              {secondPart && (
                <>
                  <br className="d-lg-block d-none" />
                  {secondPart}
                </>
              )}
            </h2>
            <p
              className="text-body-lead-large color-gray-600 mt-20"
              data-tina-field={tinaField(data, "subHeading")}
            >
              {firstDesc}
              {secondDesc && (
                <>
                  <br className="d-lg-block d-none" />
                  {secondDesc}
                </>
              )}
            </p>
          </div>
          <div className="col-lg-1 col-sm-1 col-12" />
        </div>
      </div>
      <div className="container mt-40">
        <div className="row">
          {data?.features?.map((feature, inx) => (
            <div key={inx} className="col-lg-4 col-md-12 col-sm-12">
              <div className="list-icons mt-40 hover-up">
                <div className="item-icon">
                  <span className="icon-left">
                    <img
                      src={feature?.logo}
                      alt="Agon"
                      data-tina-field={tinaField(feature, "logo")}
                    />
                  </span>
                  <h4
                    className="text-heading-4"
                    data-tina-field={tinaField(feature, "title")}
                  >
                    {feature?.title}
                  </h4>
                  <p
                    className="text-body-text color-gray-600 mt-15"
                    data-tina-field={tinaField(feature, "description")}
                  >
                    {feature?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Ideas2BlockSchema = {
  ...IdeaTemp,
  name: "ideas2",
  label: "Ideas 2",
  ui: {
    previewSrc: "/thumbnails/ideas-2.png",
  },
};
