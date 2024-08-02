import { tinaField } from "tinacms/dist/react";
import { LinkTemp } from "../GlobalTemplates/LinkTemp";
import { splitText } from "../../util/splitText";
import { IdeaTemp } from "../GlobalTemplates/IdeaTemp";

const Ideas2 = {
  props: {
    ...IdeaTemp,
    name: "ideas2",
    label: "Ideas 2",
    ui: {
      previewSrc: "/thumbnails/ideas-2.png",
    },
  },

  template: (fields) => {
    const [firstPart, secondPart] = splitText(fields?.heading);
    const [firstDesc, secondDesc] = splitText(fields?.subHeading);

    return (
      <section className="section-box mt-100 box-animation fade-up-desktop fade-mobile animation">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 col-sm-1 col-12" />
            <div className="col-lg-10 col-sm-10 col-12 text-center">
              <h2
                className="text-heading-1 color-gray-900 mb-10"
                data-tina-field={tinaField(fields, "heading")}
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
                data-tina-field={tinaField(fields, "subHeading")}
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
            {fields?.features?.map((feature, inx) => (
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
  },
};

export default Ideas2;
