import { tinaField } from "tinacms/dist/react";
import { LinkTemp } from "../GlobalTemplates/LinkTemp";
import { IdeaTemp } from "../GlobalTemplates/IdeaTemp";

const Ideas = {
  props: IdeaTemp,
  ui: {
    previewSrc: "/thumbnails/ideas.png",
  },

  template: (fields) => (
    <section className="section-box mt-100 box-animation fade-up-desktop fade-mobile animation">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="text-start mb-25">
              <span
                className="tag-1 bg-6 color-green-900"
                data-tina-field={tinaField(fields, "heading")}
              >
                {fields?.heading}
              </span>
            </div>
            <h2
              className="text-heading-2 color-gray-900 mb-50"
              data-tina-field={tinaField(fields, "subHeading")}
            >
              {fields?.subHeading}

              {/* <br className='d-lg-block d-none' /> */}
            </h2>
          </div>
        </div>
      </div>
      <div className="container mt-20">
        <div className="row">
          {fields?.features?.map((feature, inx) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={inx}>
              <div className="list-icons">
                <div className="item-icon none-bd">
                  <span className="icon-left">
                    <img
                      src={feature?.logo}
                      alt="Agon"
                      data-tina-field={tinaField(feature, "logo")}
                    />
                  </span>
                  <h4
                    className="text-heading-6"
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
  ),
};

export default Ideas;
